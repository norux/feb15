import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Title } from '~/components/Location/Parking/Title'
import { Content } from '~/components/Location/Parking/Content'

const useStyles = makeStyles(() => ({
  root: {
    margin: '30px 30px 0',
  },
}))

export const Parking = () => {
  const { root } = useStyles()
  return (
    <Box className={root} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Title />
      <Content />
    </Box>
  )
}
