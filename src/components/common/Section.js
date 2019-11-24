import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import { DisplayAnimation } from '~/components/common/DisplayAnimation'

const useStyles = makeStyles(() => ({
  section: {
    margin: '10px 0',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
}))

export const Section = props => {
  const classes = useStyles()
  const { section } = classes
  const { children } = props

  return (
    <DisplayAnimation>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" className={section}>
        {children}
      </Box>
    </DisplayAnimation>
  )
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
}
