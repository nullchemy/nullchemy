import React, { Fragment, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

const ConfirmEmail = () => {
  const [data, setData] = useState({
    email: '',
  })
  const [reset, setReset] = useState({
    password: '',
    cpassword: '',
  })
  const [isLoading, setIsLoading] = useState({
    email: false,
    reset: false,
  })
  const [response, setResponse] = useState({
    message: '',
  })
  const [tab, setTab] = useState('email')
  const navigate = useNavigate()

  const handleRequest = async (e: any) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, email: true })
    const res = await api('POST', 'auth/client/requestpasswordreset', data)
    setResponse(res.data)
    setIsLoading({ ...isLoading, email: false })
    if (res.data.type === 'success') {
      setTab('reset')
      navigate('/')
    }
  }
  const handleReset = async (e: any) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, reset: true })
    const res = await api('POST', 'auth/client/resetpassword', data)
    setResponse(res.data)
    setIsLoading({ ...isLoading, reset: false })
    if (res.data.type === 'success') {
      setTab('reset')
      navigate('/')
    }
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
            {tab === 'email' ? (
              <div className="signupform">
                <form
                  className="sform"
                  autoComplete="off"
                  onSubmit={(e) => {
                    handleRequest(e)
                  }}
                >
                  <div className="sgninfo">
                    <p>{response.message}</p>
                  </div>
                  <div className="signgroup">
                    <input
                      type="email"
                      className="signinput"
                      autoComplete="new-password"
                      name="email"
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">
                      Email <span>*</span>
                    </span>
                  </div>
                  <p className="termsofengagement">
                    Enter your email for the reset code to be sent to you
                  </p>
                  <button className="signupbtn" type="submit">
                    {isLoading.email ? 'requesting...' : 'request'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="signupform">
                <form
                  className="sform"
                  autoComplete="off"
                  onSubmit={(e) => {
                    handleReset(e)
                  }}
                >
                  <div className="sgninfo">
                    <p>{response.message}</p>
                  </div>
                  <div className="signgroup">
                    <input
                      type="password"
                      className="signinput"
                      autoComplete="new-password"
                      name="password"
                      value={reset.password}
                      onChange={(e) => {
                        setReset({ ...reset, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">
                      code <span>*</span>
                    </span>
                  </div>
                  <div className="signgroup">
                    <input
                      type="password"
                      className="signinput"
                      autoComplete="new-password"
                      name="cpassword"
                      value={reset.cpassword}
                      onChange={(e) => {
                        setReset({ ...reset, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">
                      code <span>*</span>
                    </span>
                  </div>
                  <button className="signupbtn" type="submit">
                    {isLoading.email ? 'resetting...' : 'reset password'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ConfirmEmail
