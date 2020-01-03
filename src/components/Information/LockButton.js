import React from 'react'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '1.7rem',
  },
}))

export const LockButton = ({ className, locked, onClick }) => {
  const { icon } = useStyles()

  return (
    <Button variant="outlined" className={className} onClick={onClick}>
      {locked ? <LockIcon className={icon} /> : <LockOpenIcon className={icon} />}
    </Button>
  )
}
