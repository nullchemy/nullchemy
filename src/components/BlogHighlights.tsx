import React, { Fragment } from 'react'
import '../styles/css/bloghighlights.css'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'

const BlogHighlights = () => {
  return (
    <Fragment>
      <div className="blgHighlights">
        <div className="blghlgContainer">
          <div className="blghlgWrapper">
            <div className="blghlgTop">
              <h1 className="blghlgTitle">Highlights from our Blog</h1>
              <ArrowRight className="blgHighArrRight" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BlogHighlights
