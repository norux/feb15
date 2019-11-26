import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ExpandSwitch } from '~/components/Gallery/ExpandSwitch'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 500,
    '& span': {
      fontSize: '1.3rem',
    },
    marginLeft: '30px',
  },
  button: {
    marginRight: '30px',
  },
}))

export const Title = props => {
  const { root, title, button } = useStyles()
  return (
    <Box className={root} display="flex" flexDirection="row" justifyContent="space-between">
      <Typography variant="h3" className={title}>
        Gallery
      </Typography>
      <ExpandSwitch className={button} {...props} />
    </Box>
  )
}
