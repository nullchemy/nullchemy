import React, { Fragment } from 'react'
import '../styles/css/testimonials.css'
import { Link } from 'react-router-dom'
import testimonial from '../assets/images/unsplash/jason-goodman.jpg'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_kenya_shield.svg'

const Testimonials = () => {
  return (
    <Fragment>
      <div className="testimonials">
        <div className="testimonialsContainer">
          <div className="testimonialWrapper">
            <h1 className="testimonialTitle">Don't take our word for it</h1>
            <h3 className="testimonialsSubTitle">testimonials</h3>
            <div className="testimonialsContent">
              <div className="tstmlscards">
                <div className="tstmlsleft">
                  <div className="tstmlsleftimgWrap">
                    <img src={testimonial} alt="" />
                  </div>
                </div>
                <div className="tstmlsright">
                  <Wenotify className="tstmlsrIC" />
                  <h1 className="tstmlTitle">
                    “Now, our employees have instant, year-round access to their
                    goals in NBS Pro..."
                  </h1>
                  <p className="tstmlPar">
                    As an employee-centric HR tool, NBS Pro helped the Miami
                    Dolphins improve employee engagement with a trackable,
                    transparent goal-setting process.
                  </p>
                  <Link to="/" className="tstmlreadMore">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Testimonials
