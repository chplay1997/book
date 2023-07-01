const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
//read file
const getTemplates = root => {
    return fs
        .readdirSync(root)
        .filter(name => !!name.match(/^[a-zA-Z0-9\-]*$/i))
        .map(name => {
            console.log(name)
            return {
                name,
                json: fs.readFileSync(path.join(root, name, 'data.json')).toString()
            }
        })
}

app.get('/data', (req, res) => {
    const { type } = req.query
    console.log(__dirname, '../public/templates')
    let root = path.resolve(__dirname, '../public/templates')
    if (type === 'shopify') {
        root = path.resolve(__dirname, '../public/templates')
    }
    // if (type === 'joomla') {
    //     root = path.resolve(__dirname, '../../projects/joomla/templates-joomla')
    // }
    // console.log('update template', root)

    const templates = getTemplates(root)
    res.json(templates)
})
//create file in nodejs
app.post('/html/:name', (req, res) => {
    // const { type } = req.query
    let root = path.resolve(__dirname, '../public/templates')
    // if (type === 'thanks') {
    //     root = path.resolve(__dirname, '../../projects/thanks/templates-new')
    // }
    // if (type === 'joomla') {
    //     root = path.resolve(__dirname, '../../projects/joomla/templates-joomla')
    // }
    const name = req.params.name
    const fullpath = path.join(root, name, 'index.html')
    console.log('saving template html: ', name, ' ===> ', fullpath)
    const writeStream = fs.createWriteStream(fullpath)
    req.pipe(writeStream)
    writeStream.on('close', () => {
        res.end()
    })
})
app.post('/data/:name', (req, res) => {
    // const { type } = req.query
    let root = path.resolve(__dirname, '../public/templates')
    // if (type === 'thanks') {
    //     root = path.resolve(__dirname, '../../projects/thanks/templates-new')
    // }
    // if (type === 'joomla') {
    //     root = path.resolve(__dirname, '../../projects/joomla/templates-joomla')
    // }
    const name = req.params.name
    const fullpath = path.join(root, name, 'data.json')
    console.log('saving template data: ', name, ' ===> ', fullpath)
    const writeStream = fs.createWriteStream(fullpath)
    req.pipe(writeStream)
    writeStream.on('close', () => {
        res.end()
    })
})

app.listen(4000, () => {
    console.log('tool cua duc da chay roi : ))')
})
