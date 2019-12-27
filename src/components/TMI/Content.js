import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { ContentItems } from '~/components/TMI/ContentItems'

const useStyles = makeStyles(() => ({
  root: {
    margin: '30px 30px 0',
  },
  content: {
    marginTop: '20px',
    '& ul': {
      listStylePosition: 'inside',
      listStyleType: 'decimal',
      textIndent: '-50px',
      paddingLeft: '50px',
      wordBreak: 'keep-all',
      '&> li': {
        '&.heebum': {
          '&>.MuiTypography-body2': {
            marginTop: '1px',
            '&::before': {
              content: '"🤵희범: "',
            },
          },
        },
        '&.heewon': {
          '&>.MuiTypography-body2': {
            marginTop: '1px',
            '&::before': {
              content: '"👰희원: "',
            },
          },
        },
      },
    },
  },
}))

export const Content = ({ sections }) => {
  const { root, content } = useStyles()
  return sections.map(({ question, answers }, index) => {
    return (
      <Box
        key={index}
        className={root}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column">
        <Box>
          <Typography variant="h4">{question}</Typography>
        </Box>
        <Box className={content}>
          <ul>
            <ContentItems answers={answers} />
          </ul>
        </Box>
      </Box>
    )
  })
}
