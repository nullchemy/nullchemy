import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Eye } from '../assets/svg/eye.svg'
import { ReactComponent as EyeSlash } from '../assets/svg/eyeslash.svg'
import api from '../api/axios'
import { setIsLogged } from '../state/actions/loggedAction'
import { useAppDispatch } from '../state/hooks'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const Signup = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [visi, setVisi] = useState(false)
  const [response, setResponse] = useState({
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  let location = useLocation()
  const dispatch = useAppDispatch()

  const handleSignin = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    let from = location.state?.from?.pathname || '/workspace'
    const res = await api('POST', 'auth/client/signin', data)
    setResponse(res.data)
    console.log(res.data)
    setIsLoading(false)
    if (res.status === 200) {
      dispatch(setIsLogged(true))
      setResponse({ message: 'Redirecting...' })
      navigate(from, { replace: true })
    }
    setTimeout(() => {
      setResponse({ message: '' })
    }, 9000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Sign in | nullchemy</title>
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
                    type="email"
                    className="signinput"
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
                <div className="signgroup">
                  <input
                    type={visi ? 'text' : 'password'}
                    className="signinput"
                    name="password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
                  />
                  <span className="sgnplholder">
                    password <span>*</span>
                  </span>
                  {visi ? (
                    <EyeSlash
                      className="sgnpassvisibility"
                      onClick={() => setVisi(false)}
                    />
                  ) : (
                    <Eye
                      className="sgnpassvisibility"
                      onClick={() => setVisi(true)}
                    />
                  )}
                </div>
                <Link to="/reset-password" className="sgnforgotpassword">
                  forgot password?
                </Link>
                <p className="termsofengagement">
                  By clicking "Sign in", you agree to our Terms of Use and
                  acknowledge receipt of our Privacy Policy.
                </p>
                <button className="signupbtn" type="submit">
                  {isLoading ? <div className="dot-flashing"></div> : 'sign in'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup
