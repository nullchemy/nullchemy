import React, { Fragment, useRef } from 'react'
import '../styles/css/smoothslider.css'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../assets/svg/arrow-left.svg'
import { useSlider } from '../utils/UseSlider'

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  useSlider({
    selector: 'slider-container',
    wrapper: 'slider-wrapper',
    scroll: 'slider-scroll',
    scrollIndecator: 'slider-indicator',
    speed: 2, // slider speed
    prevControl: '#prevButton',
    nextControl: '#nextButton',
  })

  return (
    <Fragment>
      <div className="smslidparent">
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-wrapper">
            <div className="slider-scroll">
              <div className="slidercard slidercardone">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">Unleashing Agile Potential</h2>
                  <p className="crdslpar">
                    Maximize Agile's power for global expansion. Our exceptional
                    teams deliver results with speed and flexibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-scroll">
              <div className="slidercard">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">
                    Efficiency through Collaboration
                  </h2>
                  <p className="crdslpar">
                    Boost efficiency with collaborative Agile teams. Seamless
                    communication, rapid decisions, and accelerated delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-scroll">
              <div className="slidercard">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">Scalability without Compromise</h2>
                  <p className="crdslpar">
                    Scale without sacrificing quality. Our Agile teams manage
                    complexity and maintain high standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-scroll">
              <div className="slidercard">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">
                    Adaptability in a Changing Landscape
                  </h2>
                  <p className="crdslpar">
                    Stay agile in a dynamic market. Quickly respond, incorporate
                    new requirements, and seize opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-scroll">
              <div className="slidercard">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">Global Reach, Local Expertise</h2>
                  <p className="crdslpar">
                    Tap into global markets with local expertise. Diverse talent
                    and cross-cultural competency for optimal outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-scroll">
              <div className="slidercard">
                <div className="slcardIc"></div>
                <div className="slcardtexts">
                  <h2 className="crdslTitle">
                    Continuous Improvement for Sustainable Success
                  </h2>
                  <p className="crdslpar">
                    Drive sustainable success through continuous improvement.
                    Iterative cycles, value delivery, and innovation culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sliderLine"></div>
        <div className="slider-indicator" style={{ left: '0px' }}>
          <div className="indicator-inner" style={{ left: '0px' }}></div>
        </div>

        <div className="Slidercontrols">
          <ArrowLeft id="prevButton" />
          <ArrowRight id="nextButton" />
        </div>
      </div>
    </Fragment>
  )
}

export default Slider
