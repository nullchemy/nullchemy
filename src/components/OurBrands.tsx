import React, { Fragment } from 'react'
import '../styles/css/ourbrands.css'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_solutions_black_shield.svg'
import santos from '../assets/images/santos_all_stars.png'

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
                  <h1>Wenotify Solutions</h1>
                  <p>Security Agency</p>
                </div>
              </div>
              <div className="ourbrandsCards">
                <div className="ourBrandImageWrapper">
                  <img className="orbrancIcImage" src={santos} alt="" />
                </div>
                <div className="ourbrandTxts">
                  <h1>Santos All Stars</h1>
                  <p>Football club in Kenya</p>
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
