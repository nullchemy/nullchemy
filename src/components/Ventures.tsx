import React, { Fragment, useState } from 'react'
import '../styles/css/ventures.css'
import { ReactComponent as Healthcare } from '../assets/svg/health.svg'
import { ReactComponent as Technology } from '../assets/svg/technology.svg'
import { ReactComponent as Finance } from '../assets/svg/coins.svg'
import { ReactComponent as Security } from '../assets/svg/security.svg'
import { ReactComponent as Cart } from '../assets/svg/cart.svg'
import { ReactComponent as Business } from '../assets/svg/business.svg'
import { ReactComponent as Construction } from '../assets/svg/construction.svg'
import venture from '../data/ventures.json'

const Ventures = () => {
  const [active, setActive] = useState('healthcare')
  return (
    <Fragment>
      <div className="ventures">
        <div className="venturesContainer">
          <div className="venturesWrapper">
            <div className="venturesLeft">
              <span>ventures</span>
              <h1 className="venturesTitle">What we venture into</h1>
              <p className="ventIntroPar">
                Explore the industies that nullchemy venture into and the custom
                tailormade software solutions that we offer
              </p>
              <div className="venturesList">
                <li
                  className={
                    active === 'healthcare'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('healthcare')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Healthcare className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Healthcare</h2>
                      <p
                        className={
                          active === 'healthcare'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'technology'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('technology')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Technology className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Technology</h2>
                      <p
                        className={
                          active === 'technology'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        The technology sector is increasingly vital for driving
                        innovation, productivity, and research progress.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'finance'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('finance')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Finance className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Finance</h2>
                      <p
                        className={
                          active === 'finance'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        The finance industry relies heavily on technology to
                        enhance security, streamline transactions, and foster
                        financial growth.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'security'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('security')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Security className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Security</h2>
                      <p
                        className={
                          active === 'security'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        The security sector increasingly leans on technology to
                        safeguard assets, monitor threats, and ensure public
                        safety.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'retail'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('retail')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Cart className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Retail & E-Commerce</h2>
                      <p
                        className={
                          active === 'retail'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        In retail and e-commerce, technology plays a pivotal
                        role in optimizing customer experiences, managing
                        inventory, and boosting sales.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'business'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('business')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Business className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Business Services</h2>
                      <p
                        className={
                          active === 'business'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        Technology empowers the business services sector to
                        offer efficient solutions, improve customer
                        satisfaction, and achieve organizational goals.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    active === 'construction'
                      ? 'ventLiIts ventLiItsActive'
                      : 'ventLiIts'
                  }
                  onClick={() => {
                    setActive('construction')
                  }}
                >
                  <div className="ventliItemWrapper">
                    <Construction className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Construction and Infrastructure</h2>
                      <p
                        className={
                          active === 'construction'
                            ? 'vantItPartext vantItPartextActive'
                            : 'vantItPartext'
                        }
                      >
                        The construction and infrastructure domain leverages
                        technology for project management, precision
                        engineering, and infrastructure development, ensuring
                        progress and sustainability.
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <div className="venturesRight">
              <div className="venturesRightWrapper">
                <div className="venturesRightContent">
                  {active === 'healthcare'
                    ? venture.healthcare.map((i) => {
                        return (
                          <div className="venturesRightItem" key={i.title}>
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'technology'
                    ? venture.technology.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'finance'
                    ? venture.finance.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'security'
                    ? venture.security.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'retail'
                    ? venture.retail.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'business'
                    ? venture.business.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : active === 'construction'
                    ? venture.construction.map((i) => {
                        return (
                          <div className="venturesRightItem">
                            <h1 className="vrItemTitle">{i.title}</h1>
                            <p className="vrItemPar">{i.preview}</p>
                          </div>
                        )
                      })
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Ventures
