import React from 'react'
import ViewWeekIcon from '@material-ui/icons/ViewWeek'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
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
    minWidth: '32px',
  },
  icon: {
    fontSize: '2rem',
  },
}))

export const ViewSwitch = ({ expanded, className, onClick }) => {
  const { root, button, icon } = useStyles()

  return (
    <Box display="flex" alignItems="center" className={classNames(root, className)}>
      <Button variant="outlined" onClick={onClick} className={button}>
        {expanded ? (
          <ViewWeekIcon className={icon} />
        ) : (
          <ViewModuleIcon className={icon} />
        )}
      </Button>
    </Box>
  )
}
