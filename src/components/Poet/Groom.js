import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    margin: '10px 30px',
  },
  bride: {
    marginLeft: '12px',
    color: '#44839d',
  },
  typographyList: {
    display: 'flex',
    alignItems: 'baseline',
  },
}))

export const Groom = () => {
  const { root, typographyList, bride } = useStyles()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={root}>
      <ul className={typographyList}>
        <li>
          <Typography variant="h4">곽윤호, 한용래</Typography>
        </li>
        <li className="mgl10">
          <Typography variant="body1">의 장남</Typography>
        </li>
        <li className={bride}>
          <Typography variant="h4">희범</Typography>
        </li>
      </ul>
    </Box>
  )
}
