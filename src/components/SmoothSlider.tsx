import React, { Fragment, useState, useEffect } from 'react'
import '../styles/css/smoothslider.css'
import { useSpring, animated } from 'react-spring'

const SmoothSlider = () => {
  const [hovered, setHovered] = useState({ state: false, sec: '' })
  const [trs, setTrs] = useState('0%')

  useEffect(() => {
    hovered.sec !== ''
      ? hovered.state
        ? hovered.sec === 'right'
          ? setTrs('-50%')
          : hovered.sec === 'left'
          ? setTrs('50%')
          : setTrs('0%')
        : setTrs('0%')
      : setTrs('0%')
    if (parseInt(trs.replace('%', '')) > 20) {
      setHovered({ state: false, sec: '' })
    }
  }, [hovered.sec, hovered.state, trs])
  const { transform } = useSpring({
    transform: `translateX(${
      hovered.sec === 'left' && trs === '0%' ? '0%' : trs
    })`,
    config: { tension: 600, friction: 500 },
  })
  return (
    <Fragment>
      <div className="smslider">
        <div className="smsliderContainer">
          <div className="smSliderWrapper">
            <div
              className="smWrapOverlayLeft"
              onMouseEnter={() => setHovered({ state: true, sec: 'left' })}
            ></div>
            <div
              className="smWrapOverlayRight"
              onMouseEnter={() => {
                setHovered({ state: true, sec: 'right' })
              }}
            ></div>
            <animated.div
              className="smSliderMain"
              style={{
                transform,
              }}
            >
              <div className="smCard">
                <p>One</p>
              </div>
              <div className="smCard">
                <p>Two</p>
              </div>
              <div className="smCard">
                <p>Three</p>
              </div>
              <div className="smCard">
                <p>Four</p>
              </div>
              <div className="smCard">
                <p>Five</p>
              </div>
              <div className="smCard">
                <p>Six</p>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SmoothSlider
