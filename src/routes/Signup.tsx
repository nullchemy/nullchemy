import React, { Fragment } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Fragment>
      <Header />
      <div className="signup">
        <div className="signupcontainer">
          <div className="signupwrapper">
            <div className="signupred">
              <p>already have an account?</p>
              <Link className="lnktosignin" to="signin">
                sign in
              </Link>
            </div>
            <div className="signupform">
              <form className="sform" autoComplete="off">
                <div className="signgroupflex">
                  <div className="signgroup">
                    <input
                      type="text"
                      className="signinput"
                      autoComplete="new-password"
                      placeholder=""
                    />
                    <span className="sgnplholder">First Name</span>
                  </div>
                  <div className="signgroup">
                    <input
                      type="text"
                      className="signinput"
                      autoComplete="new-password"
                      placeholder=""
                    />
                    <span className="sgnplholder">Last Name</span>
                  </div>
                </div>
                <div className="signgroup">
                  <input
                    type="text"
                    className="signinput"
                    autoComplete="new-password"
                    placeholder=""
                  />
                  <span className="sgnplholder">
                    Prefered username (optional)
                  </span>
                </div>
                <div className="signgroup">
                  <input
                    type="email"
                    className="signinput"
                    autoComplete="new-password"
                    placeholder=""
                  />
                  <span className="sgnplholder">
                    Email <span>*</span>
                  </span>
                </div>
                <div className="signgroup">
                  <input
                    type="password"
                    className="signinput"
                    autoComplete="new-password"
                    placeholder=""
                  />
                  <span className="sgnplholder">
                    password <span>*</span>
                  </span>
                </div>
                <div className="signgroup">
                  <input
                    type="password"
                    className="signinput"
                    autoComplete="new-password"
                    placeholder=""
                  />
                  <span className="sgnplholder">
                    confirm password <span>*</span>
                  </span>
                </div>
                <p className="termsofengagement">
                  By clicking "Sign up", you agree to our Terms of Use and
                  acknowledge receipt of our Privacy Policy.
                </p>
                <button className="signupbtn">sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup
