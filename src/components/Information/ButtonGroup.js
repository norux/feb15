import Box from '@material-ui/core/Box'
import classNames from 'classnames'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { LockButton } from '~/components/Information/LockButton'
import { InitButton } from '~/components/Information/InitButton'

const useStyles = makeStyles(() => ({
  root: {
    marginRight: '30px',
  },
  icon: {
    marginLeft: '7px',
    minWidth: '32px',
  },
}))

export const ButtonGroup = ({ locked, onClickInit, onClickLock }) => {
  const { root, icon } = useStyles()

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={classNames(root)}>
      <InitButton className={icon} onClick={onClickInit} />
      <LockButton className={icon} locked={locked} onClick={onClickLock} />
    </Box>
  )
}
