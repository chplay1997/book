const fs = require('fs')
const readline = require('readline')
const path = require("path")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function uniq(arr) {
	return [...new Set(arr)]
}


// DEFINE

const enFilePath = path.join(__dirname, '../../public/languages/v3/en.json')
const defaultPath = path.join(__dirname, '../../src/next')
const ignoreFilePath = path.join(__dirname, './ignorePath')
const ignoreKeyPath = path.join(__dirname, './ignoreKey')

const ignoreFiles = fs.readFileSync(ignoreFilePath, 'utf8').split("\n").map(f => f.trim()).filter(f => !!f)
const ignoreKeys = fs.readFileSync(ignoreKeyPath, 'utf8').split("\n").map(k => k.trim()).filter(k => !!k).map(k => "\'".concat(k, "\'"))


const extensionRegex = /.[ts|tsx]$/
const regex = /('([A-Z|_]){2,}')|("([A-Z|_]){2,}")/g
const contentTagRegex = /(<[^/<>]*>)([^{}<>)]{2,})(<\/[^<>]*>)/gi


const langData = fs.readFileSync(enFilePath, 'utf8')

let chose = 0
function checkFileData (data) {
	const words = uniq(data.match(regex)?.filter(c => !!c && c?.length>3))
	let missingWords = []
	words.forEach(w => {
		const existent = langData.indexOf(w.replace(/'/g, "\"")) !== -1
		if (!existent && !ignoreKeys.includes(w.replace(/"/g, "\'"))) {
			missingWords.push(w)
		}
	})
	return missingWords
}


function checkContentInTag (data) {
	const matches = data.match(contentTagRegex)
	return matches?.filter(c => !!c && !/&[a-z]+;/.test(c)) || []
}

function checkPath(filePath) {
	let stat = null
	try {
		stat = fs.statSync(filePath)
	} catch {
		console.info("9779 error", filePath)
	}
	if (stat && stat.isDirectory()) {
		let folderFiles = fs.readdirSync(filePath)
		folderFiles = folderFiles.filter(f => !ignoreFiles.includes(f))
		folderFiles.forEach(path => {
			checkPath(filePath.concat("/", path))
		})
	} else if (stat && stat.isFile && extensionRegex.test(filePath)) {
		const data = fs.readFileSync(filePath, 'utf8')
		if (chose === 1) {
			const missing = checkFileData(data)
			if (missing && missing.length > 0) {
				
				console.info(`\nFile: ${filePath}\n\t`, missing.join(", "))
			}
		} else if (chose === 2) {
			const untranslatedContent = checkContentInTag(data)
			if (untranslatedContent.length > 0) {
				console.info(`\nFile: ${filePath}\n\n\t\t`, untranslatedContent.join("\n\t\t"), "\n-----------------------------------------------------------------------")
			}
		}
	}
}


// MENU

function run() {
	console.log(`\n\t\t----- PageFly missing language tester -----\n
\t1. Find missing word in en file
\t2. Find untranslated content in HTML tag
`)
	rl.question("Enter your choice: ", (answer => {
		const type = Number.parseInt(answer)
		switch (type) {
			case 1:
				chose = 1
				rl.question("Input file/folder path: src/next/", newPath => {
					const path = newPath ? defaultPath + "/" + newPath : defaultPath
					checkPath(path)
					rl.close()
				})
				break
			case 2:
				chose = 2
				rl.question("Input file/folder path: src/next/", newPath => {
					const path = newPath ? defaultPath + "/" + newPath : defaultPath
					checkPath(path)
					rl.close()
				})
				break
			default:
				rl.close()
		}
	}))
	rl.on("close" , () => {
		process.exit(0)
	})
}

run()