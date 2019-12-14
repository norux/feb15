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

export const Bride = () => {
  const { root, typographyList, bride } = useStyles()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={root}>
      <ul className={typographyList}>
        <li>
          <Typography variant="h4">용경환, 김은희</Typography>
        </li>
        <li className="mgl10">
          <Typography variant="body1">의 장녀</Typography>
        </li>
        <li className={bride}>
          <Typography variant="h4">희원</Typography>
        </li>
      </ul>
    </Box>
  )
}
