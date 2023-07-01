const { updateLanguageFiles, updateLocales } = require('./fns')

updateLocales().catch(err => console.log('Failed to update local language files.', err))

// TODO: remove this line later. Reason: deprecated
// updateLanguageFiles().catch(err => console.log('Failed to update local language files.', err))

