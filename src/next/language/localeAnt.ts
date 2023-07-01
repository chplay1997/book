import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import deDE from 'antd/es/locale/de_DE'
import frFR from 'antd/es/locale/fr_FR'
import ptBR from 'antd/es/locale/pt_BR'

export const defineLocaleAnt = locale => {
  switch (locale) {
    case 'pt':
      return ptBR
    case 'cn':
      return zhCN
    case 'de':
      return deDE
    case 'fr':
      return frFR
    default:
      return enUS
  }
}
