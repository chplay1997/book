export const mergeTagHtml = origin => {
  const words = [...origin]
  let cur = null
  let index = 0
  while (index < words.length) {
    const word = words[index]
    if (cur) {
      words[cur] += ` ${word}`
    }
    if (/</.test(word) && !/>/.test(word)) {
      cur = index
    } else if (/>/.test(word) && cur) {
      words.splice(cur + 1, index - cur)
      index = cur
      cur = null
    }
    index++
  }
  return words
}

export const mergeTableTag = origin => {
  const words = [...origin]
  let cur = null
  let index = 0
  while (index < words.length) {
    const word = words[index]
    if (cur) {
      words[cur] += ` ${word}`
    }
    if (/<table/.test(word) && !/<\/table>/.test(word)) cur = index
    else if (/<\/table>/.test(word) && cur) {
      words.splice(cur + 1, index - cur)
      index = cur
      cur = null
    }
    index++
  }
  return words
}

export const getTags = word => {
  if (word.indexOf('<') === -1 || /(<\/?)br>/.test(word) || word.indexOf('<table') > -1) return {}
  let tags = []
  let closeTag = 0
  while (word.length > 2) {
    const begin = word.indexOf('<')
    const end = word.indexOf('>')
    if (begin === -1 || end === -1) break
    let newWord = word.slice(begin + 1, end)
    if (newWord[newWord.length - 1] === '/') continue
    if (newWord[0] === '/') closeTag++
    else if (newWord) tags.push(newWord.split(' ')[0])
    word = word.slice(end + 1)
  }
  return { tags, closeTag }
}

export const closeTag = (words, length) => {
  let tagOpen = []
  let count = 0
  let index = 0
  while (index < words.length && count < length) {
    const word = words[index++]
    const { tags, closeTag } = getTags(word)
    if (tags || closeTag) {
      tagOpen.push(...tags)
      const restLength = tagOpen.length - closeTag
      tagOpen.length = restLength > 0 ? restLength : 0
    }
    if (word.replace(/<([^><]+)>/g, '').length > 0) {
      count++
    }
  }
  return { tagOpen, index }
}

export default { mergeTagHtml, mergeTableTag, closeTag }
