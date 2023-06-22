import React, { Fragment } from 'react'
import '../styles/css/howwegetitdone.css'
import { ReactComponent as Circle } from '../assets/svg/circle.svg'
import { ReactComponent as PathOne } from '../assets/svg/pathone.svg'
import { ReactComponent as PathTwo } from '../assets/svg/pathtwo.svg'

const HowWeGetItDone = () => {
  return (
    <Fragment>
      <div className="hwgitdone">
        <div className="hwgiContainer">
          <div className="hwgitWrapper">
            <PathOne className="pathone" />
            <PathTwo className="pathtwo" />
            <h1 className="hwgitTitle">How we get it done</h1>
            <div className="hwgitsec">
              <div className="hwgitflxone" style={{ order: '1' }}>
                <h2 className="hwgitsectitle">
                  Discovery & Requirements gathering
                </h2>
                <p className="hwgitPar">
                  Collaborate closely with our team to understand your business
                  objectives, target audience, and functional requirements.
                </p>
              </div>
              <div className="hwgitflxtwo" style={{ order: '2' }}>
                <div className="hwgitflxtwoWrapper">
                  <Circle className="hwgitcircle" />
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone" style={{ order: '2' }}>
                <h2 className="hwgitsectitle">Wireframing and Prototyping</h2>
                <p className="hwgitPar">
                  We create wireframes and interactive prototypes to visualize
                  the layout, navigation, and user flow of the web application.
                  Gather feedback and iterate on the designs in collaboration
                  with you to ensure optimal usability and user experience
                </p>
              </div>
              <div className="hwgitflxtwo" style={{ order: '1' }}>
                <div className="hwgitflxtwoWrapper">
                  <Circle className="hwgitcircle" />
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone" style={{ order: '1' }}>
                <h2 className="hwgitsectitle">User Interface (UI) Design</h2>
                <p className="hwgitPar">
                  Our talented designers craft visually appealing designs that
                  align with your brand identity and provide a seamless user
                  interface
                </p>
              </div>
              <div className="hwgitflxtwo" style={{ order: '2' }}>
                <div className="hwgitflxtwoWrapper">
                  <Circle className="hwgitcircle" />
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HowWeGetItDone
