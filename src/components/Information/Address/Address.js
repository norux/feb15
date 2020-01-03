import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Title } from '~/components/Information/Address/Title'
import { Content } from '~/components/Information/Address/Content'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 30px',
  },
}))

export const Address = () => {
  const { root } = useStyles()
  return (
    <Box className={root} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Title />
      <Content />
    </Box>
  )
}
