import React, { Fragment } from 'react'
import '../styles/css/ourbrands.css'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_kenya_shield.svg'

const OurBrands = () => {
  return (
    <Fragment>
      <div className="ourbrands">
        <div className="ourbrandsContainer">
          <div className="ourbrandsWrapper">
            <h1 className="ourbrandstitle">Our Brands</h1>
            <div className="ourbrandsFlex">
              <div className="ourbrandsCards">
                <div className="ourBrandImageWrapper">
                  <Wenotify className="orbrancIc" />
                </div>
                <div className="ourbrandTxts">
                  <h1>Wenotify Kenya</h1>
                  <p>Security Agency in Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default OurBrands
