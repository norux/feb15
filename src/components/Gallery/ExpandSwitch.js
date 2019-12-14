import React, { Fragment } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import classNames from 'classnames'

const useStyles = makeStyles(() => ({
  root: {},
  label: {
    fontSize: '1.4rem',
  },
  button: {
    padding: '5px 8px 5px 15px',
  },
  icon: {
    fontSize: '2rem',
  },
}))

export const ExpandSwitch = ({ expanded, className, onClick }) => {
  const { root, label, button, icon } = useStyles()

  return (
    <Box display="flex" alignItems="center" className={classNames(root, className)}>
      <Button variant="outlined" onClick={onClick} className={button}>
        {expanded ? (
          <Fragment>
            <p className={label}>접기</p>
            <ExpandLessIcon className={icon} />
          </Fragment>
        ) : (
          <Fragment>
            <p className={label}>펼치기</p>
            <ExpandMoreIcon className={icon} />
          </Fragment>
        )}
      </Button>
    </Box>
  )
}
