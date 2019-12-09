import React from 'react'
import classNames from 'classnames'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ButtonGroup } from '~/components/Location/ButtonGroup'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginLeft: '30px',
  },
}))

export const Title = ({ className, ...props }) => {
  const { root, title } = useStyles()
  return (
    <Box className={classNames(className, root)} display="flex" flexDirection="row" justifyContent="space-between">
      <Box display="flex" className={title}>
        <Typography variant="h3">오시는 길</Typography>
      </Box>
      <ButtonGroup {...props} />
    </Box>
  )
}
