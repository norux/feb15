import React, { useMemo } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    padding: '27px 0 0',
  },
  typographyList: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export const DDay = () => {
  const { root, typographyList } = useStyles()

  const dDayString = useMemo(() => {
    const dDay = differenceInCalendarDays(new Date(), new Date('2020-02-15'))
    if (dDay < 0) {
      return `- ${Math.abs(dDay)}`
    }

    if (dDay === 0) {
      return `- Day`
    }

    return `+ ${dDay}`
  })

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={root}>
      <ul className={typographyList}>
        <li>
          <Typography variant="h3" align="center">
            D
          </Typography>
        </li>
        <li className="mgl10">
          <Typography variant="h3" align="center">
            {dDayString}
          </Typography>
        </li>
      </ul>
    </Box>
  )
}
