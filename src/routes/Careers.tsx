import React, { Fragment, useEffect } from 'react'
import '../styles/css/careers.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'

const Careers = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const navigate = useNavigate()
  return (
    <Fragment>
      <Helmet>
        <title>Careers | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/careers" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="careers">
        <div className="careersContainer">
          <div className="careersWrapper">
            <h1 className="careersHeader">Careers</h1>
            <span className="crshring">we're hiring</span>
            <h2 className="crslndTitle">Be part of our mission</h2>
            <p className="crslndpar">
              We're looking for passionate people to join us on our mission. we
              value flat hierarchies, clear communication, full ownership and
              responsibility.
            </p>
            <div className="crsjbcats">
              <span>view all</span>
              <span>Development</span>
              <span>Design</span>
              <span>marketting</span>
              <span>Customer Service</span>
              <span>Operations</span>
              <span>Finance</span>
              <span>Management</span>
            </div>
            <div className="careers_content">
              <div
                className="career_item"
                onClick={() => {
                  navigate('/career/senior-full-stack-developer-remote')
                }}
              >
                <h1>Senior Full-Stack Developer</h1>
                <p>
                  We are looking for a Full-Time Senior Full-Stack Developer
                </p>
                <div className="career_item_bottom">
                  <div className="career_item_left">
                    <span>100% Remote</span>
                    <span>Full-Time</span>
                  </div>
                  <div className="career_item_right">
                    <Link
                      to="/career/senior-full-stack-developer-remote"
                      className="career_link_apply"
                    >
                      <span>Apply</span>
                      <ArrowRight className="career_item_Ic" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="career_item"
                onClick={() => {
                  navigate('/career/senior-full-stack-developer-remote')
                }}
              >
                <h1>Senior Full-Stack Developer</h1>
                <p>
                  We are looking for a Full-Time Senior Full-Stack Developer
                </p>
                <div className="career_item_bottom">
                  <div className="career_item_left">
                    <span>100% Remote</span>
                    <span>Full-Time</span>
                  </div>
                  <div className="career_item_right">
                    <Link
                      to="/career/senior-full-stack-developer-remote"
                      className="career_link_apply"
                    >
                      <span>Apply</span>
                      <ArrowRight className="career_item_Ic" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="career_item"
                onClick={() => {
                  navigate('/career/senior-full-stack-developer-remote')
                }}
              >
                <h1>Senior Full-Stack Developer</h1>
                <p>
                  We are looking for a Full-Time Senior Full-Stack Developer
                </p>
                <div className="career_item_bottom">
                  <div className="career_item_left">
                    <span>100% Remote</span>
                    <span>Full-Time</span>
                  </div>
                  <div className="career_item_right">
                    <Link
                      to="/career/senior-full-stack-developer-remote"
                      className="career_link_apply"
                    >
                      <span>Apply</span>
                      <ArrowRight className="career_item_Ic" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Careers
