import React, { Fragment, useEffect } from 'react'
import '../styles/css/ourcases.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_kenya_shield.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SplashOne from '../assets/images/wenotify/splash_one.png'
import SplashTwo from '../assets/images/wenotify/spalsh_two.png'
import { Link } from 'react-router-dom'

const Cases: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Our Cases | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/our-cases" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="ourcases">
        <div className="ourcasesContainer">
          <div className="ourcasesWrapper">
            <h1 className="ourcasesHeader">Our Cases</h1>
            <div className="caseWenotify">
              <div className="caseWenLeft">
                <h2 className="caseWenSubTitle">
                  we developed an application that can be used by the general
                  public to report crimes and record realtime incidences
                </h2>
                <div className="caseKeywords">
                  <span>security</span>
                  <span>evidence</span>
                  <span>police</span>
                </div>
                <div className="caseBranding">
                  <Wenotify className="caseBrandLogo" />
                  <h1 className="caseBrandName">WenotiFy</h1>
                </div>
                <p className="caseExpPar">
                  This Case study examines the challenges faced by the society
                  and the police in crime reporting and real-time evidence
                  taking. We developed an application that would support
                  intelligence collection and real-time reporting of ongoing
                  crimes. Our project addresses crime reporting challenges with
                  a web-based and a mobile system. Our mobile application offers
                  real-time reporting, anonymous interaction, and quick access
                  to evidence collection. Witness safety, distance barriers, and
                  manual record-keeping issues were resolved. Join us in
                  creating a safer community through technology!
                </p>
              </div>
              <div className="caseWenRight">
                <LazyLoadImage
                  className="caseWenSplashScreenOne"
                  alt=""
                  src={SplashOne} // use normal <img> attributes as props
                />
                <LazyLoadImage
                  className="caseWenSplashScreenTwo"
                  alt=""
                  src={SplashTwo} // use normal <img> attributes as props
                />
                <Link
                  to="/our-cases/wenotify"
                  className="wenCaseLearnMore"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Learn More
                </Link>
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

export default Cases
