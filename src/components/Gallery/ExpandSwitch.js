import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  root: {},
  icon: {
    fontSize: '2rem',
  }
}))

export const ExpandSwitch = ({ onClick }) => {
  const { root, icon } = useStyles()

  return (
    <Button className={root} onClick={onClick}>
      <p>
        펼쳐보기
        <ExpandMoreIcon className={icon} />
      </p>
    </Button>
  )
}
