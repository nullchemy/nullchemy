import React, { Fragment } from 'react'
import '../styles/css/join.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Join = () => {
  return (
    <Fragment>
      <Header />
      <div className="joingithub">
        <div className="jgcontainer">
          <div className="jgwrapper">
            <h2 className="jgTitle">Join us on Github</h2>
            <form className="jgform">
              <div className="jgformGroup">
                <label htmlFor="username">
                  Your Github username <span>*</span>
                </label>
                <br />
                <input type="text" className="jginputTextInput" />
              </div>
              <button type="submit" className="jgRequestBtn">
                Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Join
