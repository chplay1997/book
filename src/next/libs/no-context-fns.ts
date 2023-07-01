// Hold all the functions that are not context aware and make them testable
export function compareGlobalStylesWithCurrentStyles(globalStyles, currentStyles) {
  if (!globalStyles || !currentStyles) return []
  const styleKeys = Object.keys(currentStyles)

  return styleKeys
    .reduce((result, key) => {
      if (currentStyles[key] && globalStyles[key] && globalStyles[key] !== currentStyles[key]) {
        result.push(key)
      }
      return result
    }, [])
    .filter(item => isNaN(parseInt(item)))
}

const LIST_BUTTON_ELEMENT = ['ProductATC', 'Form2.Button', 'ProductViewDetails', 'CollectionViewDetails']
export const migrateDataBetweenParentButtonAndTextElement = (elementStore, parentStore, migrate, textValue) => {
  const {
    state: {
      type,
      data: { migrated },
    },
  } = elementStore

  if (type === 'Text' && parentStore && migrate && !migrated) {
    const {
      state: { type },
    } = parentStore
    if (LIST_BUTTON_ELEMENT.includes(type) && textValue) {
      elementStore.state.data = { ...elementStore.state.data, value: textValue, migrated: true }
    }
  }
  return elementStore
}
