import React, { Fragment } from 'react'
import '../styles/css/wwd.css'
import SmoothSlider from './SmoothSlider'

const WhatWeDo: React.FC = () => {
  return (
    <Fragment>
      <div className="whatwedo">
        <div className="wwdContainer">
          <div className="wwdWrapper">
            <h1 className="wwdTitle">
              Exceptional agile teams for scaling your business globally.
            </h1>
            <SmoothSlider />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default WhatWeDo
