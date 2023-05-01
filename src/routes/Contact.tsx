import React, { Fragment } from 'react'
import '../styles/css/contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <div className="contact">
        <div className="contactContainer">
          <div className="contactWrapper">
            <h2 className="contHeader">love to hear from you,</h2>
            <h2 className="contHeader">get in touch</h2>
            <div className="contform">
              <form className="contactForm">
                <div className="contflex">
                  <div className="contformgroup">
                    <label htmlFor="your name">
                      Your Name <span>*</span>
                    </label>
                    <br />
                    <input type="text" className="continput" />
                  </div>
                  <div className="contformgroup">
                    <label htmlFor="your name">
                      Your Email <span>*</span>
                    </label>
                    <br />
                    <input type="email" className="continput" />
                  </div>
                </div>
                <div className="contformgroup">
                  <label htmlFor="your name">
                    Message <span>*</span>
                  </label>
                  <br />
                  <textarea className="conttextarea"></textarea>
                </div>
                <button type="submit" className="contsendbutton">
                  send
                </button>
              </form>
              <div className="contInfoBox"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Contact
