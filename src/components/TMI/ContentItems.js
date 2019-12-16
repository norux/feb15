import Typography from '@material-ui/core/Typography'
import React from 'react'

export const ContentItems = ({ answers }) => {
  return answers.map(({ name, answer }, index) => {
    return (
      <li key={index} className={name}>
        <Typography variant="body2">{answer}</Typography>
      </li>
    )
  })
}
