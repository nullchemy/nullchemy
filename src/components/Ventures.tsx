import React, { Fragment } from 'react'
import '../styles/css/ventures.css'
import { ReactComponent as Healthcare } from '../assets/svg/health.svg'
import { ReactComponent as Technology } from '../assets/svg/technology.svg'
import { ReactComponent as Finance } from '../assets/svg/coins.svg'
import { ReactComponent as Security } from '../assets/svg/security.svg'
import { ReactComponent as Cart } from '../assets/svg/cart.svg'
import { ReactComponent as Business } from '../assets/svg/business.svg'
import { ReactComponent as Construction } from '../assets/svg/construction.svg'

const Ventures = () => {
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
                <li className="ventLiIts ventLiItsActive">
                  <div className="ventliItemWrapper">
                    <Healthcare className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Healthcare</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Technology className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Technology</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Finance className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Finance</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Security className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Security</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Cart className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Retail & E-Commerce</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Business className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Business Services</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="ventLiIts">
                  <div className="ventliItemWrapper">
                    <Construction className="vantiWIc" />
                    <div className="ventiItWTexts">
                      <h2>Construction and Infrastructure</h2>
                      <p>
                        The Healthcare industry is increasingly dependent on
                        technology for improving patient care, operational
                        efficiency, and research advancements.
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <div className="venturesRight">
              <div className="venturesRightWrapper">
                <div className="venturesRightContent">
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
                  </div>
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
                  </div>
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
                  </div>
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
                  </div>
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
                  </div>
                  <div className="venturesRightItem">
                    <h1 className="vrItemTitle">
                      Electronic Health Records (EHR):
                    </h1>
                    <p className="vrItemPar">
                      Develop secure, interoperable systems for managing patient
                      records, including medical history, prescriptions, and lab
                      results.
                    </p>
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

export default Ventures
