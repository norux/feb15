import React, { useCallback } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    marginTop: '20px',
  },
  lock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '32px',
    zIndex: 10,
  },
}))

export const Map = ({ locked }) => {
  const { root, lock } = useStyle()
  const mapRef = useCallback(node => {
    if (node && node.children.length === 0) {
      new window.daum.roughmap.Lander({
        timestamp: '1575166699314',
        key: 'w356',
        mapHeight: '360',
      }).render()
    }
  }, [])

  return (
    <div className={root}>
      <div
        ref={mapRef}
        id="daumRoughmapContainer1575166699314"
        className="root_daum_roughmap root_daum_roughmap_landing"
        style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}
      />
      {locked && <div className={lock} />}
    </div>
  )
}
