import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'
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
  calendarWarn: {
    marginTop: '4px',
    fontSize: '1.1rem',
    color: '#ff1400',
  },
}))

export const Date = ({ count }) => {
  const { root, date, location, calendarLink, calendarWarn } = useStyles()
  const [displayWebviewWarn, setDisplayWebviewWarn] = useState(false)
  const calendarContent = useMemo(
    () =>
      addToCalendar(
        '곽희범 ♥ 용희원 결혼식',
        '신랑: 곽윤호/한용래의 장남 희범\\n신부: 용경환/김은희의 장녀 희원\\n\\n결혼식에 초대합니다.',
        '네이버 그린팩토리 2층 커넥트홀',
        '2020-02-15T13:00:00Z',
        '2020-02-15T15:00:00Z',
      ),
    [],
  )

  const isWebview = useMemo(
    () => /(\s(KAKAOTALK|FBAN|FBIOS|Line|Twitter|Instagram)|(;\s?wv)|(IAB))/i.test(navigator.userAgent),
    [],
  )
  const onClick = useCallback(() => {
    if (isWebview) {
      setDisplayWebviewWarn(true)
    }

  }, [])

  const currentBrowser = useMemo(() => {
    if (/KAKAOTALK/.test(navigator.userAgent)) {
      return '카카오톡 IAB'
    }

    if (/\sLine/.test(navigator.userAgent)) {
      return 'LINE IAB'
    }

    if (/\sFBAN|FBIOS/.test(navigator.userAgent)) {
      return 'Facebook IAB'
    }

    if (/\sTwitter/.test(navigator.userAgent)) {
      return 'Twitter IAB'
    }

    if (/\sInstagram/.test(navigator.userAgent)) {
      return 'Instagram IAB'
    }
    return null
  })

  return (
    <Box className={root} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="body1" className={date} align="center">
        {count < 17 ? '2020년 2월 15일 토요일 오후 1시' : '2017년 6월 17일 토요일부터 :)'}
      </Typography>
      <Typography variant="body1" className={location} align="center">
        <span className="naver-color">네이버</span> 그린팩토리
      </Typography>
      <Link href={calendarContent} download="feb15.ics" onClick={onClick} color="inherit">
        <Typography variant="body2" className={calendarLink} align="center">
          <InsertInvitationIcon />
          캘린더에 등록하기
        </Typography>
      </Link>
      {displayWebviewWarn && (
        <Typography variant="body2" className={calendarWarn} align="center">
          캘린더를 등록하려면
          <br />
          외부 브라우저에서 열어주세요.
          <br />
          (현재 브라우저: {currentBrowser})
        </Typography>
      )}
    </Box>
  )
}
