const os = require('os')
const fs = require('fs')
const got = require('got')
const unzip = require('unzipper')

/**
 * Function to fetch language data and store them as local language files.
 *
 * App Script editor
 * https://script.google.com/u/0/home/projects/1eSTPy8RaFN-OnSFVeEI-aen9HNdC_86geB-d2ivoW-OhD2_v6IIAqJam/edit
 * @deprecated
 */
module.exports.updateLanguageFiles = async () => {
  console.time('Time')
  console.log('Fetching new translations...')
  const res = await got.get(
    'https://script.google.com/macros/s/AKfycbyrZJxiXX4TSOGlZ6vF-s0fFRcQLljDB76n7BCUrIt3rGT24A-pP6OzLKFlmmSca2V6/exec'
  )

  console.log('Updating local language files...')
  const data = JSON.parse(res.body)

  await Promise.all(
    Object.keys(data).map(lang => {
      return new Promise(resolve => {
        // Prepare directory.
        if (!fs.existsSync('./public/languages/v3')) {
          fs.mkdirSync('./public/languages')
          fs.mkdirSync('./public/languages/v3')
        }

        // Write language file.
        fs.writeFile(
          `./public/languages/v3/${lang.toLowerCase()}.json`,
          JSON.stringify(data[lang]),
          resolve
        )
      })
    })
  )

  console.log('Done!')
  console.timeEnd('Time')
}

module.exports.updateLocales = async () => {
  console.time('Time')
  console.log("Fetching new translations...")
  const res = await got.get(
    'https://script.google.com/macros/s/AKfycbw6e88VL92GSV_Mn46Nil8JiDAmG3NGSOJOab9DU35dIdqE2ttPqtQTeJxdxf5wPUca8g/exec'
  )
  console.log('Updating local language files...')
  const data = JSON.parse(res.body)

  await Promise.all(
    Object.keys(data).map(lang => {
      return new Promise(resolve => {
        if (!fs.existsSync('./public/locales')) {
          fs.mkdirSync('./public/locales')
        }

        // Write language file.
        fs.writeFile(
          `./public/locales/${lang.toLowerCase()}.json`,
          JSON.stringify(data[lang]),
          resolve
        )
      })
    })
  )
  console.log('Done!')
  console.timeEnd('Time')
}

/**
 * Function to fetch template data and store them as local template files.
 *
 * App Script editor
 * https://script.google.com/home/projects/1nL7nCuv4pUmZ8cBNLHx7FzxfO1zWAdZW2Yey5Rbhk3cLWPmWACQy5Sul/edit
 */
module.exports.updateTemplateFiles = async () => {
  console.time('Time')

  // Find the last update time.
  let lastUpdate

  await Promise.all(['html', 'json', 'sections'].map(dir => {
    const curDir = `./public/templates/${dir}`

    return new Promise(resolve => fs.readdir(curDir, async (err, files) => {
      if (err) {
        console.log(`Failed to read files in the directory ${curDir}`, err)
        return resolve()
      }

      await Promise.all(files.map(file => {
        const curFile = `${curDir}/${file}`

        return new Promise(resolve => fs.stat(curFile, (err, info) => {
          if (err) {
            console.log(`Failed to get info of the file ${curFile}`, err)
            return resolve()
          }

          if (!lastUpdate || lastUpdate < info.mtime) {
            lastUpdate = info.mtime
          }

          resolve()
        }))
      }))

      resolve()
    }))
  }))

  console.log('Fetching new templates...')
  const res = await got.get(`https://script.google.com/macros/s/AKfycbwvWKEvbT2aFPjU9dRQkTLvvMPYfwJaesOaiAPVXqRUs1slhfALxw5JLZOStQbI-Z5Ytg/exec${
    lastUpdate ? `?since=${lastUpdate.getTime() + lastUpdate.getTimezoneOffset() * 60 * 1000}` : ''
  }`)

  if (res.body.trim() === '') {
    console.log('No change detected.')
    return console.timeEnd('Time')
  }

  console.log('Updating local template files...')
  const matches = res.body.match(/^data:.+\/(.+);base64,(.*)$/)
  const ext = matches[1]
  const data = matches[2]
  const buffer = Buffer.from(data, 'base64')
  const tmpPath = `${os.tmpdir()}/templates_${Date.now()}.${ext}`

  try {
    // Prepare directory.
    if (!fs.existsSync('./public/templates')) {
      fs.mkdirSync('./public/templates')
    }

    // Extract template files.
    fs.writeFileSync(tmpPath, buffer)
    await fs.createReadStream(tmpPath).pipe(unzip.Extract({path: './public/templates'})).promise()
    fs.rmSync(tmpPath)
  } catch (err) {
    console.log('Failed to update local template files.', err)
  }

  console.log('Done!')
  console.timeEnd('Time')
}
