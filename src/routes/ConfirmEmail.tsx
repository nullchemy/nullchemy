import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import session from '../utils/session'
import ReactGA from 'react-ga'

const ConfirmEmail = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [data, setData] = useState({
    code: '',
  })
  const [response, setResponse] = useState({
    message: '',
  })
  const email = session.getem()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignin = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await api('POST', 'auth/client/confirmemail', {
      ...data,
      email: email.email,
    })
    console.log(res.data)
    setResponse(res.data)
    setIsLoading(false)
    if (res.data.type === 'success') {
      session.save(res.headers.authtoken, res.headers.refreshtoken)
      setResponse({ message: 'Redirecting...' })
      navigate('/')
    }
    setTimeout(() => {
      setResponse({ message: '' })
    }, 2000)
  }
  return (
    <Fragment>
      <Header />
      <div className="signup">
        <div className="signupcontainer">
          <div
            className="signupwrapper"
            style={{ marginTop: '60px', paddingBottom: '300px' }}
          >
            <div className="signupred">
              <p>don't have an account?</p>
              <Link className="lnktosignin" to="/signup">
                sign up
              </Link>
            </div>
            <div className="signupform">
              <form
                className="sform"
                autoComplete="off"
                onSubmit={(e) => {
                  handleSignin(e)
                }}
              >
                <div className="sgninfo">
                  <p>{response.message}</p>
                </div>
                <div className="signgroup">
                  <input
                    type="number"
                    className="signinput"
                    autoComplete="new-password"
                    name="code"
                    value={data.code}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
                  />
                  <span className="sgnplholder">
                    code <span>*</span>
                  </span>
                </div>
                <p className="sgnforgotpassword" style={{ cursor: 'pointer' }}>
                  resend
                </p>
                <p className="termsofengagement">
                  Enter the code sent to your email on sign up
                </p>
                <button className="signupbtn" type="submit">
                  {isLoading ? (
                    <div className="dot-flashing"></div>
                  ) : (
                    'confirm email'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ConfirmEmail
