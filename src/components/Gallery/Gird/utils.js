export const orderingPhoto = (photos, maxCols) => {
  const ordered = []
  let temp = null
  let curCols = 0
  photos.forEach(photo => {
    curCols += photo.cols
    if (curCols === maxCols) {
      ordered.push(photo)
      curCols = 0
      return
    }

    if (temp) {
      ordered.push(temp)
      curCols += temp.cols
      temp = null
    }

    if (curCols > maxCols) {
      temp = photo
      curCols -= photo.cols
      return
    }

    ordered.push(photo)
  })

  if (temp) {
    ordered.push(temp)
  }

  return ordered
}
