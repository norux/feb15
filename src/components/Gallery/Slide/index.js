import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import { SlideList } from '~/components/Gallery/Slide/SlideList'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    overflowX: 'auto',
  },
  flicking: {
    height: '450px',
  },
  area: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const Slide = ({ photos }) => {
  const { root } = useStyles()

  return (
    <Box className={classNames(root, 'invisible-scrollbar')}>
      <SlideList photos={photos}/>
    </Box>
  )
}
