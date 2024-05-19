import React, { Fragment } from 'react'
import '../styles/css/ourbrands.css'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_solutions_black_shield.svg'
import { ReactComponent as TenAfric } from '../assets/svg/tenafric.svg'
import { ReactComponent as MedAndGromart } from '../assets/svg/med-and-gromart.svg'
import santos from '../assets/images/santos_all_stars.png'

const OurBrands = () => {
  const gotobrand = (i: string) => {
    window.open(i, '_blank')
  }
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
              </div>
              <div
                className="ourbrandsCards"
                onClick={() => {
                  gotobrand('https://nullcommerce.pages.dev')
                }}
              >
                <div className="ourBrandImageWrapper">
                  <MedAndGromart className="orbrancIc tenafricIcsvg medgromartIcsvg" />
                </div>
              </div>
              <div className="ourbrandsCards">
                <div className="ourBrandImageWrapper">
                  <div className="orbrancIcImage">
                    <TenAfric className="orbrancIc tenafricIcsvg" />
                  </div>
                </div>
              </div>
              <div className="ourbrandsCards">
                <div className="ourBrandImageWrapper">
                  <div className="orbrancIcImage">
                    <img className="" src={santos} alt="" />
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

export default OurBrands
