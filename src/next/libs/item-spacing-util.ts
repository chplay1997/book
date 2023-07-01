export const getItemSpacing = (gutter: {
  all: string | number
  laptop: string | number
  tablet: string | number
  mobile: string | number
}) => {
  const spacing = {}
  Object.entries(gutter).forEach(([k, v]: [k: string, v: string | number]) => {
    if (v === '') spacing[k] = ''
    else {
      v = typeof v === 'string' ? parseInt(v) : v
      spacing[k] = `${v / 2}px`
    }
  })
  return spacing
}
