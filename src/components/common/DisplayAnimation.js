import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useVisibilitySensor from '@rooks/use-visibility-sensor'

const useStyles = makeStyles(() => ({
  animation: {
    transition: 'transform 0.7s, opacity 1.4s',
    transitionTimingFunction: 'easy-in-out',
  },
}))

export const DisplayAnimation = props => {
  const node = useRef(null)
  const { animation } = useStyles()
  const { children } = props
  const [style, setStyle] = useState({
    transform: 'translate3d(0, 50px, 0)',
    opacity: 0,
  })

  const { isVisible } = useVisibilitySensor(node, {
    scrollCheck: true,
    partialVisibility: true,
    scrollDebounce: 0,
  });

  useEffect(() => {
    if (isVisible) {
      setStyle({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      })
    }
  },  [ isVisible ])

  return (
    <div className={animation} style={style} ref={node}>
      {children}
    </div>
  )
}

DisplayAnimation.propTypes = {
  children: PropTypes.element.isRequired,
}
