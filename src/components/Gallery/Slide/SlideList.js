import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { SlideItem } from '~/components/Gallery/Slide/SlideItem'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 15px 15px',
  },
}))

export const SlideList = ({ photos }) => {
  const { root } = useStyles()
  return (
    <ul className={root}>
      {photos.map((photo, index) => (
        <SlideItem photo={photo} key={index} />
      ))}
    </ul>
  )
}

SlideList.propTypes = {
  photos: PropTypes.array,
}
