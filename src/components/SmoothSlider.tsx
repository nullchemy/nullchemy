import React, { Fragment, useRef } from 'react'
import '../styles/css/smoothslider.css'
import { useSlider } from '../utils/UseSlider' // Update the path if necessary

interface SliderProps {
  // Define any additional props for your slider component
}

const Slider: React.FC<SliderProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Call the useSlider hook within your component
  useSlider({
    selector: 'slider-container', // Update with your own class name or selector
    wrapper: 'slider-wrapper', // Update with your own class name or selector
    scroll: 'slider-scroll', // Update with your own class name or selector
    scrollIndecator: 'slider-indicator', // Update with your own class name or selector
    speed: 2, // Optional: Adjust the scrolling speed if needed
  })

  // Additional component logic, rendering, and JSX

  return (
    <Fragment>
      <div className="slider-container" ref={sliderRef}>
        <div className="slider-wrapper">
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
          <div className="slider-scroll">
            <div className="slidercard"></div>
          </div>
        </div>
      </div>
      <div className="slider-indicator" style={{ left: '0px' }}>
        <div className="indicator-inner" style={{ left: '0px' }}></div>
      </div>
    </Fragment>
  )
}

export default Slider
