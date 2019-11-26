import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import { DisplayAnimation } from '~/components/common/DisplayAnimation'

const useStyles = makeStyles(() => ({
  root: {
    margin: '15px 0',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
}))

export const Section = ({ children, className }) => {
  const { root } = useStyles()
  const classes = [root, className]

  return (
    <DisplayAnimation>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classNames(classes)}>
        {children}
      </Box>
    </DisplayAnimation>
  )
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}
