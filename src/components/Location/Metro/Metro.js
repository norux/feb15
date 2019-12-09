import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Title } from '~/components/Location/Metro/Title'
import { Content } from '~/components/Location/Metro/Content'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '30px',
  },
}))

export const Metro = () => {
  const { root } = useStyles()
  return (
    <Box className={root} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Title />
      <Content />
    </Box>
  )
}
