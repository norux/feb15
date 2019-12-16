
const images = require.context('~/css/images', true)
export function getImage(name) {
  return images(`./${name}`)
}

export function isWideScreen() {
  return window.innerWidth >= 600
}
