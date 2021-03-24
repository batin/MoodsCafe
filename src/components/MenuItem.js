import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';

const MenuItem = ({ imageUrl }) => {
  return (
    <InnerImageZoom className="menu-image" src={imageUrl} zoomSrc={imageUrl} />
  )
}

export default MenuItem