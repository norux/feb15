import React, { Fragment } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import classNames from 'classnames'

const useStyles = makeStyles(() => ({
  root: {},
  icon: {
    fontSize: '1.8rem',
  },
}))

export const ExpandSwitch = ({ expanded, className, onClick }) => {
  const { root, icon } = useStyles()

  return (
    <Box display="flex" alignItems="center" className={classNames(root, className)}>
      <Button variant="outlined" className={root} onClick={onClick}>
        {expanded ? (
          <Fragment>
            <p>접기</p>
            <ExpandLessIcon className={icon} />
          </Fragment>
        ) : (
          <Fragment>
            <p>펼치기</p>
            <ExpandMoreIcon className={icon} />
          </Fragment>
        )}
      </Button>
    </Box>
  )
}
