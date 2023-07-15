import React, { Fragment } from 'react'
import '../styles/css/bloghighlights.css'
import ScrollReveal from 'scrollreveal'
import agility from '../assets/images/agility.png'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'

const BlogHighlights = () => {
  ScrollReveal().reveal('.blghlgCardItem', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
  })
  return (
    <Fragment>
      <div className="blgHighlights">
        <div className="blghlgContainer">
          <div className="blghlgWrapper">
            <div className="blghlgTop">
              <h1 className="blghlgTitle">Highlights from our Blog</h1>
              <ArrowRight className="blgHighArrRight" />
            </div>
            <div className="blghlgBtm">
              <div className="blghlgCardItem">
                <div className="blghlgCardItemTop">
                  <img src={agility} alt="" />
                </div>
                <div className="blghlgCardItemBtm">
                  <div className="bloghighTitle">
                    <h2>
                      Our Sample Blog Summary from highlight lorem ispum dolor
                      sit amet consectuer
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto vero inventore est odit enim nulla. Qui quisquam
                      sequi aliquam? Alias soluta doloribus eos quos placeat?
                    </p>
                  </div>
                  <div className="bloghighInfo">
                    <p>23 Jan 2023 . 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BlogHighlights
