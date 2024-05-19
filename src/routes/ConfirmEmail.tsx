import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { setEmail } from '../state/actions/registerEmailTmp'
import { setIsLogged } from '../state/actions/loggedAction'

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
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.register_email_tmp)

  const handleSignin = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await api('POST', 'auth/client/confirmemail', {
      ...data,
      email: email,
    })
    console.log(res.data)
    setResponse(res.data)
    setIsLoading(false)
    if (res.status === 200) {
      setResponse({ message: 'Redirecting...' })
      dispatch(setEmail(''))
      dispatch(setIsLogged(true))
      navigate('/')
    }
    setTimeout(() => {
      setResponse({ message: '' })
    }, 9000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Confirm Your Email | nullchemy</title>
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
            <div className="signupform">
              <form
                className="sform"
                autoComplete="off"
                onSubmit={(e) => {
                  handleSignin(e)
                }}
              >
                <div className="sgninfo">
                  <p
                    style={
                      response.message !== ''
                        ? {
                            padding: '5px 10px',
                            borderRadius: '5px',
                            backgroundColor: 'red',
                            color: '#fff',
                          }
                        : {}
                    }
                  >
                    {response.message}
                  </p>
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
