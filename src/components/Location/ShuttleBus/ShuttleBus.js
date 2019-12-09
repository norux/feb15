import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Title } from '~/components/Location/ShuttleBus/Title'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '30px',
  },
}))

export const ShuttleBus = () => {
  const { root } = useStyles()
  return (
    <Box className={root} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Title />
    </Box>
  )
}
