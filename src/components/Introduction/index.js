import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { DisplayAnimation } from '~/components/common/DisplayAnimation'
import { Date } from '~/components/Introduction/Date'
import { Photo } from '~/components/Introduction/Photo'
import { Title } from '~/components/Introduction/Title'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF',
    paddingTop: '60px',
  },
  divider: {
    marginTop: '20px',
    alignSelf: 'center',
    width: '1px',
    height: '80px',
  },
}))

export const Introduction = () => {
  const { root, divider } = useStyles()

  return (
    <DisplayAnimation>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" className={root}>
        <Title />
        <Photo />
        <Divider orientation="vertical" className={divider} />
        <Date />
      </Box>
    </DisplayAnimation>
  )
}