import React, { Fragment, useState } from 'react'
import '../styles/css/signup.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

const ConfirmEmail = () => {
  const [data, setData] = useState({
    code: '',
  })
  const [response, setResponse] = useState({
    message: '',
  })
  const navigate = useNavigate()

  const handleSignin = async (e: any) => {
    e.preventDefault()
    const res = await api('POST', 'auth/client/confirmemail', data)
    setResponse(res.data)
    if (res.data.type === 'success') {
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
                  confirm email
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
