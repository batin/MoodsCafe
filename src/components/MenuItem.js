import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import Img from "gatsby-image"
import 'react-medium-image-zoom/dist/styles.css'

const MyComponent = ({ imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false)
 
  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])
 
  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img className="menu-image" src={imageUrl} />
    </ControlledZoom>
  )
}
 
export default MyComponent