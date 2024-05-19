import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useAnalyticsEventTracker from '../components/useAnalyticsEventTracker'
import { ReactComponent as Envelop } from '../assets/svg/envelope.svg'
import { ReactComponent as Phone } from '../assets/svg/phone.svg'
import { ReactComponent as Location } from '../assets/svg/location.svg'
import Newsletter from '../components/Newsletter'
import api from '../api/axios'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us')
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [status, setStatus] = useState('send')
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const contact = async (e: any) => {
    e.preventDefault()
    setStatus('sending...')
    const res = await api('POST', 'contact', data)
    setStatus('sent')
    if (res.status === 200) {
      toast('', { type: 'error' })
    }
    gaEventTracker('contact')
    // clear the form
    setData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setTimeout(() => {
      setStatus('send')
    }, 2000)
  }
  return (
    <Fragment>
      <Helmet>
        <title>Contact Us | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/contact" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="contact">
        <div className="contactContainer">
          <div className="contactWrapper">
            <h2 className="contHeader">love to hear from you,</h2>
            <h2 className="contHeader">get in touch</h2>
            <div className="contform">
              <form
                className="contactForm"
                onSubmit={(e) => {
                  contact(e)
                }}
              >
                <div className="contflex">
                  <div className="contformgroup">
                    <label htmlFor="your name">
                      Your Name <span>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="continput"
                      name="name"
                      value={data.name}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                  </div>
                  <div className="contformgroup">
                    <label htmlFor="your name">
                      Your Email <span>*</span>
                    </label>
                    <br />
                    <input
                      type="email"
                      className="continput"
                      name="email"
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                    />
                  </div>
                </div>
                <div className="contformgroup">
                  <label htmlFor="your name">
                    Subject <span>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="continput"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
                  />
                </div>
                <div className="contformgroup">
                  <label htmlFor="your name">
                    Message <span>*</span>
                  </label>
                  <br />
                  <textarea
                    className="conttextarea"
                    name="message"
                    value={data.message}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value })
                    }}
                  ></textarea>
                </div>
                <button type="submit" className="contsendbutton">
                  {status}
                </button>
              </form>
              <div className="contInfoBox">
                <h3>contact information</h3>
                <div className="continfodirect">
                  <div className="continfoTouch">
                    <Phone className="contInfoIc" />
                    <span>+254798116710</span>
                  </div>
                  <div className="continfoTouch">
                    <Envelop className="contInfoIc" />
                    <span>contact@nullchemy.com</span>
                  </div>
                  <div className="continfoTouch">
                    <Location className="contInfoIc" />
                    <span>102 Street Nairobi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Contact
