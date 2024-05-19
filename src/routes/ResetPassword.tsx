import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import session from '../utils/session'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const ConfirmEmail = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [data, setData] = useState({
    email: '',
  })
  const [code, setCode] = useState('')
  const [reset, setReset] = useState({
    password: '',
    confirm_password: '',
  })
  const [isLoading, setIsLoading] = useState({
    email: false,
    reset: false,
  })
  const [response, setResponse] = useState({
    message: '',
    status: false,
  })
  const [tab, setTab] = useState('email')
  const navigate = useNavigate()

  const handleRequest = async (e: any) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, email: true })
    const res = await api('POST', 'auth/client/req-password-reset', data)
    setIsLoading({ ...isLoading, email: false })
    if (res.status === 200) {
      setResponse({ ...res.data, status: false })
      setTab('confirm')
    } else {
      setResponse({ ...res.data, status: true })
    }
  }

  const handleConfirmCode = async (e: any) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, email: true })
    const res = await api('POST', 'auth/client/confirmresetcode', {
      code: code,
      email: data.email,
    })
    setResponse(res.data)
    setIsLoading({ ...isLoading, email: false })
    if (res.status === 200) {
      setTab('reset')
    }
  }

  const handleReset = async (e: any) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, reset: true })
    const res = await api('POST', 'auth/client/resetpassword', {
      ...reset,
      email: data.email,
    })
    setResponse(res.data)
    setIsLoading({ ...isLoading, reset: false })
    if (res.status === 200) {
      session.save(res.headers.authtoken, res.headers.refreshtoken)
      setResponse({ message: 'Redirecting...', status: true })
      setTab('email')
      navigate('/')
    }
    setTimeout(() => {
      setResponse({ message: '', status: false })
    }, 2000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Reset Your Password | nullchemy</title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
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
                    {response.message !== '' ? (
                      <p
                        style={
                          response.status
                            ? {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'red',
                                color: '#fff',
                              }
                            : {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'green',
                                color: '#fff',
                              }
                        }
                      >
                        {response.message}
                      </p>
                    ) : null}
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
                    {isLoading.email ? (
                      <div className="dot-flashing"></div>
                    ) : (
                      'request'
                    )}
                  </button>
                </form>
              </div>
            ) : tab === 'confirm' ? (
              <div className="signupform">
                <form
                  className="sform"
                  autoComplete="off"
                  onSubmit={(e) => {
                    handleConfirmCode(e)
                  }}
                >
                  <div className="sgninfo">
                    {response.message !== '' ? (
                      <p
                        style={
                          response.status
                            ? {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'red',
                                color: '#fff',
                              }
                            : {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'green',
                                color: '#fff',
                              }
                        }
                      >
                        {response.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="signgroup">
                    <input
                      type="number"
                      className="signinput"
                      autoComplete="new-password"
                      name="code"
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value)
                      }}
                    />
                    <span className="sgnplholder">
                      Code <span>*</span>
                    </span>
                  </div>
                  <p className="termsofengagement">
                    Enter the code that was sent to your Email
                  </p>
                  <button className="signupbtn" type="submit">
                    {isLoading.email ? (
                      <div className="dot-flashing"></div>
                    ) : (
                      'confirm'
                    )}
                  </button>
                </form>
              </div>
            ) : tab === 'reset' ? (
              <div className="signupform">
                <form
                  className="sform"
                  autoComplete="off"
                  onSubmit={(e) => {
                    handleReset(e)
                  }}
                >
                  <div className="sgninfo">
                    {response.message !== '' ? (
                      <p
                        style={
                          response.status
                            ? {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'red',
                                color: '#fff',
                              }
                            : {
                                padding: '5px 10px',
                                borderRadius: '5px',
                                backgroundColor: 'green',
                                color: '#fff',
                              }
                        }
                      >
                        {response.message}
                      </p>
                    ) : null}
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
                      password <span>*</span>
                    </span>
                  </div>
                  <div className="signgroup">
                    <input
                      type="password"
                      className="signinput"
                      autoComplete="new-password"
                      name="confirm_password"
                      value={reset.confirm_password}
                      onChange={(e) => {
                        setReset({ ...reset, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">
                      Confirm password <span>*</span>
                    </span>
                  </div>
                  <button className="signupbtn" type="submit">
                    {isLoading.reset ? (
                      <div className="dot-flashing"></div>
                    ) : (
                      'reset password'
                    )}
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ConfirmEmail
