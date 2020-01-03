import React from 'react'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '1.7rem',
  },
}))

export const InitButton = ({ className, onClick }) => {
  const { icon } = useStyles()

  return (
    <Button variant="outlined" className={className} onClick={onClick}>
      <RefreshIcon className={icon} />
    </Button>
  )
}
