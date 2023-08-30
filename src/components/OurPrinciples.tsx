import React, { Fragment, useState } from 'react'
import '../styles/css/ourprinciples.css'
import { ReactComponent as Plus } from '../assets/svg/plus-solid.svg'
import { ReactComponent as Minus } from '../assets/svg/minus.svg'
import LadiesWorking from '../assets/images/unsplash/ladies-working.jpg'

interface Active {
  miss: boolean
  vis: boolean
  slog: boolean
}

const OurPrinciples: React.FC = () => {
  const [active, setActive] = useState<Active>({
    miss: true,
    vis: false,
    slog: false,
  })
  const showPrinciple = (param: Active) => {
    setActive(param)
  }
  return (
    <Fragment>
      <div className="ourprinciples">
        <div className="opcontainer">
          <div className="opwrapper">
            <div className="opleft">
              <img src={LadiesWorking} alt="" />
            </div>
            <div className="opright">
              <h1 className="opCardsTitle">Our Principles</h1>
              <div
                className={active.miss ? 'opcards opcardmaxheight' : 'opcards'}
                onClick={() => {
                  showPrinciple({ vis: false, slog: false, miss: !active.miss })
                }}
              >
                <div className="opitwrapHeader">
                  <span>Our Mission</span>
                  {active.miss ? (
                    <Minus className="opCardPlusIc" />
                  ) : (
                    <Plus className="opCardPlusIc" />
                  )}
                </div>
                <div className="opitwrap">
                  <p>
                    Our mission is to build the best developer experience across
                    the development process
                  </p>
                </div>
              </div>
              <div
                className={active.vis ? 'opcards opcardmaxheight' : 'opcards'}
                onClick={() => {
                  showPrinciple({
                    miss: false,
                    slog: false,
                    vis: !active.vis,
                  })
                }}
              >
                <div className="opitwrapHeader">
                  <span>Our Vision</span>
                  {active.vis ? (
                    <Minus className="opCardPlusIc" />
                  ) : (
                    <Plus className="opCardPlusIc" />
                  )}
                </div>
                <div className="opitwrap">
                  <p>
                    committed to creating a holistic ecosystem of software
                    solutions that cater to diverse needs, putting the customer
                    at the heart of everything we do
                  </p>
                </div>
              </div>
              <div
                className={active.slog ? 'opcards opcardmaxheight' : 'opcards'}
                onClick={() => {
                  showPrinciple({
                    miss: false,
                    vis: false,
                    slog: !active.slog,
                  })
                }}
              >
                <div className="opitwrapHeader">
                  <span>Our Slogan</span>
                  {active.slog ? (
                    <Minus className="opCardPlusIc" />
                  ) : (
                    <Plus className="opCardPlusIc" />
                  )}
                </div>
                <div className="opitwrap">
                  <p>transforming your ideas into a digital reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default OurPrinciples
