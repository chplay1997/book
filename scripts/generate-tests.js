const fs = require('fs')
const path = require('path')

const inspectorFolderPath = path.join(__dirname, '../src/next/modules/inspector/elements')
const testFolderPath = path.join(__dirname, '../src/next/__tests__')

function isFileOrFolder(path) {
  return fs.lstatSync(path).isFile() ? 'file' : 'folder'
}

function firstIsUppercase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }

  if (str[0].toUpperCase() === str[0]) {
    return true
  }

  return false
}

function isUppercase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }

  return str.toUpperCase() === str
}

function isControlledComponent(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }
  return str.includes('Controlled')
}

function getParams(str) {
  // Remove comments of the form /* ... */
  // Removing comments of the form //
  // Remove body of the function { ... }
  // removing '=>' if func is arrow function
  str = str
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/(.)*/g, '')
    .replace(/{[\s\S]*}/, '')
    .replace(/=>/g, '')
    .trim()

  // Start parameter names after first '('
  var start = str.indexOf('(') + 1

  // End parameter names is just before last ')'
  var end = str.length - 1

  var result = str.substring(start, end).split(', ')

  var params = []

  result.forEach(element => {
    // Removing any default value
    element = element.replace(/=[\s\S]*/g, '').trim()

    if (element.length > 0) params.push(element)
  })

  return params
}

function getFunctionParams(fileContent, functionName) {
  const functionContent =
    fileContent.match(new RegExp(`${functionName}\\(([^)]*)\\)`)) ||
    fileContent.match(/^\s*\(([^)]*)\)\s*=>/)?.[1] ||
    fileContent.match(/^\s*([^=]*)=>/)?.[1]
  return functionContent ? functionContent[1].match(/\b\w+/gi) : ''
}

function createTestFiles(folderPath) {
  // create tests for each file in the inspector folder
  const files = fs.readdirSync(folderPath)
  files.forEach(file => {
    const filePath = path.join(inspectorFolderPath, file)
    if (isFileOrFolder(filePath) === 'file') {
      // read the file and extract all exported functions component and arrow functions co
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const exportedFunctions = fileContent.match(/export function ([^(]*)/g)
      const exportedArrowFunctions = fileContent.match(/export const ([^(]*)/g)
      const functions = exportedFunctions
        ? exportedFunctions.concat(exportedArrowFunctions)
        : [].concat(exportedArrowFunctions)
      const functionsNames = functions.map(functionName => functionName.split(' ')[2])

      let functionToTest = functionsNames.filter(
        str => firstIsUppercase(str) && !isUppercase(str) && !isControlledComponent(str)
      )

      // remove duplicate function
      functionToTest = [...new Set(functionToTest)]

      // find arguments of each function
      const componentProps = functionToTest.map(functionName => {
        return getFunctionParams(fileContent, functionName)
      })

      console.log(file, functionToTest, componentProps)

      const fileName = file.replace('.tsx', '')
      const testName = `${fileName}.test.tsx`
      const testFilePath = path.join(`${testFolderPath}/inspectors/elements/${folderPath}`, `${testName}`)

      const isTestFileExist = fs.existsSync(testFilePath)
      if (!isTestFileExist) {
        fs.writeFileSync(testFilePath, '')
      }
      const testFileContent = fs.readFileSync(testFilePath, 'utf-8')
      // check if file content has any test cases for the current file
      if (!/test\(|it\(|describe\(/gi.test(testFileContent)) {
        console.log(testName, 'File has no test cases, adding them')
        // import function to the test file
        const template = fs.readFileSync(path.join(__dirname, './test-template/template.txt')).toString()

        const importStatement = template
          .replace('[FUNCTION_TO_TEST]', functionToTest.join(', '))
          .replace('[PATH]', `@/modules/inspector/elements/${folderPath}/${fileName}`)

        fs.writeFileSync(testFilePath, importStatement)

        // add test cases for each function
        functionToTest.forEach((functionName, index) => {
          const props = componentProps[index]
          addTestCase(testFilePath, functionName, props)
        })
      }
    }
  })
}

function addTestCase(filePath, functionName, props) {
  const renderer = fs.readFileSync(path.join(__dirname, './test-template/renderer.txt')).toString()
  const testFileContent = fs.readFileSync(filePath, 'utf-8')

  // check if function have been test or not
  if (!testFileContent.includes(`${functionName} should be rendered correctly without any problem`)) {
    console.log('Adding test case for', functionName)
    const testCase = renderer
      .replaceAll('[COMPONENT]', functionName)
      .replaceAll('[PROPS]', props ? props.map(prop => `${prop}={''}`).join(' ') : '')

    fs.appendFileSync(filePath, testCase)
  }
}

createTestFiles(`${inspectorFolderPath}/base`)
createTestFiles(`${inspectorFolderPath}/shopify`)
