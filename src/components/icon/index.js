import React from 'react'

const Icon = ({ icon, style }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 1024 1024"
    style={style}
  >
    <path d={icon} />
  </svg>
)

export default Icon