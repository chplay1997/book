import { lang } from '@/language/defaultLang'

/**
 * @deprecated This function is outdated, please use the new hook `useTranslation` instead
 */
export default function translate(key: string, args?: object) {
  let template = lang[key] || lang[Object.keys(lang).find(k => k?.toLowerCase() === key?.toLowerCase())] || key
  if (!args) {
    return template
  }

  try {
    // eslint-disable-next-line no-new-func
    return Function(...[...Object.keys(args), `return \`${template}\``])(...Object.values(args))
  } catch (e) {
    console.warn(e)
    return template
  }
}

/**
 * @deprecated
 */
export const changeKeyLanguage = (
  rawKey: string = '',
  textTransform: 'lowercase' | 'uppercase' | 'capitalize' = 'lowercase'
) => {
  try {
    if (typeof rawKey !== 'string') {
      return rawKey
    }
    switch (textTransform) {
      case 'lowercase':
        return translate(rawKey).toLowerCase()
      case 'uppercase':
        return translate(rawKey).toUpperCase()
      case 'capitalize':
        return (translate(rawKey))
      default:
        return rawKey
    }
  } catch (e) {
    console.error(e, rawKey)
    return rawKey
  }
}
