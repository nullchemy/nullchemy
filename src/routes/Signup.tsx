import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Eye } from '../assets/svg/eye.svg'
import { ReactComponent as EyeSlash } from '../assets/svg/eyeslash.svg'
import api from '../api/axios'
import session from '../utils/session'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const Signup = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [data, setData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    cpassword: '',
  })
  const [visi, setVisi] = useState(false)
  const [response, setResponse] = useState({
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignup = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const res: any = await api('POST', 'auth/client/signup', data)
    setResponse(res.data)
    console.log(res.data)
    setIsLoading(false)
    if (res.data.type === 'success') {
      session.saveem(res.headers.email)
      navigate('/confirm-email')
    }
    setTimeout(() => {
      setResponse({
        message: '',
      })
    }, 3000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Sign Up | nullchemy</title>
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
          <div className="signupwrapper" style={{ paddingBottom: '100px' }}>
            <div className="signupred">
              <p>already have an account?</p>
              <Link className="lnktosignin" to="/signin">
                sign in
              </Link>
            </div>
            <div className="signupform">
              <form
                className="sform"
                autoComplete="off"
                onSubmit={(e) => {
                  handleSignup(e)
                }}
              >
                <div className="sgninfo">
                  <p>{response.message}</p>
                </div>
                <div className="signgroupflex">
                  <div className="signgroup">
                    <input
                      type="text"
                      className="signinput"
                      autoComplete="new-password"
                      name="fname"
                      value={data.fname}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">First Name</span>
                  </div>
                  <div className="signgroup">
                    <input
                      type="text"
                      className="signinput"
                      autoComplete="new-password"
                      name="lname"
                      value={data.lname}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                    <span className="sgnplholder">Last Name</span>
                  </div>
                </div>
                <div className="signgroup">
                  <input
                    type="text"
                    className="signinput"
                    autoComplete="new-password"
                    name="username"
                    value={data.username}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
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
                    autoComplete="new-password"
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
                <div className="signgroup">
                  <input
                    type={visi ? 'text' : 'password'}
                    className="signinput"
                    autoComplete="new-password"
                    name="cpassword"
                    value={data.cpassword}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
                  />
                  <span className="sgnplholder">
                    confirm password <span>*</span>
                  </span>
                </div>
                <p className="termsofengagement">
                  By clicking "Sign up", you agree to our Terms of Use and
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
