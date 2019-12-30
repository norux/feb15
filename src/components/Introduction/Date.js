import React, { useMemo } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { addToCalendar } from '~/utils'
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation'

const useStyles = makeStyles(() => ({
  root: {
    padding: '15px 0 50px',
  },
  date: {
    fontSize: '1.7rem',
    fontWeight: '600',
  },
  location: {
    marginTop: '2pt',
    fontWeight: '600',
  },
  calendarLink: {
    marginTop: '10px',
    fontSize: '1.3rem',

    '& svg': {
      verticalAlign: 'bottom',
      marginRight: '2px',
    },
  },
}))

export const Date = ({ count }) => {
  const { root, date, location, calendarLink } = useStyles()
  const calendarContent = useMemo(
    () =>
      addToCalendar(
        '곽희범 ♥ 용희원 결혼식',
        '신랑: 곽윤호/한용래의 장남 희범\\n신부: 용경환/김은희의 장녀 희원\\n\\n결혼식에 초대합니다.',
        '네이버 그린팩토리 2층 커넥트홀',
        '2020-02-15T13:00:00',
        '2020-02-15T15:00:00',
      ),
    [],
  )
  return (
    <Box className={root}>
      <Typography variant="body1" className={date} align="center">
        {count < 17 ? '2020년 2월 15일 토요일 오후 1시' : '2017년 6월 17일 토요일부터 :)'}
      </Typography>
      <Typography variant="body1" className={location} align="center">
        <span className="naver-color">네이버</span> 그린팩토리
      </Typography>
      <Link href={calendarContent} download="feb15" align="center" color="inherit">
        <Typography variant="body2" className={calendarLink} align="center">
          <InsertInvitationIcon />
          캘린더에 등록하기
        </Typography>
      </Link>
    </Box>
  )
}
