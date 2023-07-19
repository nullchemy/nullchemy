import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/join.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useAnalyticsEventTracker from '../components/useAnalyticsEventTracker'
import api from '../api/axios'
import { Store } from 'react-notifications-component'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const Join = () => {
  const gaEventTracker = useAnalyticsEventTracker('Github Join Request')
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [status, setStatus] = useState('Request')
  const [data, setData] = useState({
    username: '',
  })

  const gitjoin = async (e: any) => {
    e.preventDefault()
    setStatus('Requesting...')
    const res = await api('POST', 'github', data)
    console.log(res)
    setStatus('requested')
    Store.addNotification({
      title: 'Contact Success!',
      message:
        'your request was received successfully. you should get a response within a day or two',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    })
    gaEventTracker('github request')
    // clear the form
    setData({
      username: '',
    })
    setTimeout(() => {
      setStatus('Request')
    }, 2000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Join Us | nullchemy</title>
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
      <div className="joingithub">
        <div className="jgcontainer">
          <div className="jgwrapper">
            <h2 className="jgTitle">Join us on Github</h2>
            <form className="jgform" onSubmit={(e) => gitjoin(e)}>
              <div className="jgformGroup">
                <label htmlFor="username">
                  Your Github username <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="jginputTextInput"
                  name="username"
                  value={data.username}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value })
                  }}
                />
              </div>
              <button type="submit" className="jgRequestBtn">
                {status}
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
