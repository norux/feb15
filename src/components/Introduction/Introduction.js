import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { DisplayAnimation } from '~/components/common/DisplayAnimation'
import { Date } from '~/components/Introduction/Date'
import { Photo } from '~/components/Introduction/Photo'
import { Title } from '~/components/Introduction/Title'
import Divider from '@material-ui/core/Divider'
import { Invitation } from '~/components/Introduction/Invitation'
import { DDay } from '~/components/Introduction/DDay'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF',
    paddingTop: '50px',
  },
  divider: {
    marginTop: '20px',
    alignSelf: 'center',
    width: '1px',
    height: '70px',
  },
}))

export const Introduction = () => {
  const { root, divider } = useStyles()

  return (
    <DisplayAnimation>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" className={root}>
        <Title />
        <Photo />
        <Invitation />
        <Divider orientation="vertical" className={divider} />
        <DDay />
        <Date />
      </Box>
    </DisplayAnimation>
  )
}
