import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'
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
  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    setCount(count + 1)
  })

  const dDayString = useMemo(() => {
    if (count >= 17) {
      const dDay = differenceInCalendarDays(new Date(), new Date('2017-06-17')) + 1
      return `+ ${dDay}일`
    }

    const dDay = differenceInCalendarDays(new Date(), new Date('2020-02-15'))
    if (dDay < 0) {
      return `- ${Math.abs(dDay)}`
    }

    if (dDay === 0) {
      return `- Day`
    }

    return `+ ${dDay}`
  }, [count])

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={root}>
      <ul className={typographyList} onClick={onClick}>
        <li>
          <Typography variant="h3" align="center">
            {count < 17 ? 'D' : '❤️' }
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
