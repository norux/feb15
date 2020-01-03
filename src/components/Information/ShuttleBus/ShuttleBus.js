import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Title } from '~/components/Information/ShuttleBus/Title'
import { Content } from '~/components/Information/ShuttleBus/Content'

const useStyles = makeStyles(() => ({
  root: {
    margin: '30px 30px 0',
  },
}))

export const ShuttleBus = () => {
  const { root } = useStyles()
  return (
    <Box className={root} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Title />
      <Content />
    </Box>
  )
}
