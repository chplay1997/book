import { debounce } from 'lodash'

/**
 * Handle load custom styles to override And Design and Polaris styles
 */

function updateStylesheet() {
  const customStylesTag: HTMLStyleElement = document.querySelector('[data-styled]')
  if (customStylesTag) {
    // remove old tag
    document.querySelector('style#pf-custom-styles')?.remove()

    const cssRules = customStylesTag.sheet.cssRules
    // Create a new style sheet to copy the cssRules to
    const newStyleSheet = document.createElement('style')
    newStyleSheet.setAttribute('id', 'pf-custom-styles')
    document.head.appendChild(newStyleSheet)

    // Loop through the cssRules and add them to the new style sheet
    for (let i = 0; i < cssRules.length; i++) {
      const rule = cssRules[i]
      const ruleText = rule.cssText
      newStyleSheet.appendChild(document.createTextNode(ruleText))
    }
  }
}

export const reUpdateEditorStyleAfterLoaded = () => {
  const mutationObserver = new MutationObserver(
    debounce(mutations => {
      // automatically disconnect after 15 seconds. Stop observing, everything is done
      setTimeout(() => {
        mutationObserver.disconnect()
      }, 15000)

      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          // we need to disconnect and reobserve after append DOM to the head tag to prevent a loop here
          mutationObserver.disconnect()
          updateStylesheet()
          observe()
        }
      }
    }, 800)
  )

  const observe = () => {
    mutationObserver.observe(document.head, {
      childList: true,
    })
  }
  observe()
}
