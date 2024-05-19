import React, { Fragment, useEffect } from 'react'
import '../styles/css/ourcases.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { ReactComponent as Wenotify } from '../assets/svg/wenotify_kenya_shield.svg'
import { ReactComponent as RedirectLink } from '../assets/svg/arrow-right-from-square.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SplashOne from '../assets/images/wenotify/splash_one.png'
import SplashTwo from '../assets/images/wenotify/spalsh_two.png'
import { Link, useNavigate } from 'react-router-dom'

const Cases: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const navigate = useNavigate()
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
            <div className="caseWenotify wencase">
              <div className="case_lean_more">
                <button
                  onClick={() => {
                    navigate('/our-cases/wenotify')
                    window.scrollTo(0, 0)
                  }}
                  className="learn_more_btn"
                >
                  learn more
                </button>
                <a
                  href="https://wenotify.nullchemy.com"
                  target="_blank"
                  className="learn_more_btn"
                  rel="noreferrer"
                >
                  <span>wenotify.nullchemy.com</span>
                  <RedirectLink className="goto_case_ic" />
                </a>
              </div>
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
                  src={SplashOne}
                />
                <LazyLoadImage
                  className="caseWenSplashScreenTwo"
                  alt=""
                  src={SplashTwo}
                />
              </div>
            </div>
            <div className="caseWenotify wecarecase">
              <div className="caseWenLeft">
                <h2 className="caseWenSubTitle">
                  we developed an application that can detect suicidal
                  intentions and deploy preventive advice and assistance by the
                  use ML & AI
                </h2>
                <div className="caseKeywords">
                  <span>suicide</span>
                  <span>healthcare</span>
                  <span>public</span>
                </div>
                <div className="caseBranding">
                  {/* <Wenotify className="caseBrandLogo" /> */}
                  <h1 className="caseBrandName">WeCare</h1>
                </div>
                <p className="caseExpPar">
                  This case study delves into the arising issue of depression
                  and suicidal thoughts, exploring the challenges individuals
                  face when seeking help and support. In response, we have
                  designed a pioneering AI and ML-driven application dedicated
                  to preventing and addressing suicidal ideation. Our
                  application offers a comprehensive platform that aids in
                  recognizing signs of distress, providing timely intervention,
                  and fostering a supportive environment. Our mobile app enables
                  users to connect anonymously with empathetic responders,
                  ensuring immediate assistance during moments of crisis.
                </p>
              </div>
              <div className="caseWenRight">
                <LazyLoadImage
                  className="caseWenSplashScreenOne"
                  alt=""
                  src={SplashOne}
                />
                <LazyLoadImage
                  className="caseWenSplashScreenTwo"
                  alt=""
                  src={SplashTwo}
                />
                <Link
                  to="/our-cases/wecare"
                  className="wenCaseLearnMore"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="caseWenotify eoprediction">
              <div className="ourcase_item_overlay"></div>
              <div className="caseWenLeft">
                <h2 className="caseWenSubTitle">
                  we developed an application that analyzes health data and
                  social trends to predict and prevent potential epidemic
                  outbreaks.
                </h2>
                <div className="caseKeywords">
                  <span>epidemic</span>
                  <span>healthcare</span>
                  <span>analysis</span>
                  <span>prediction</span>
                </div>
                <div className="caseBranding">
                  {/* <Wenotify className="caseBrandLogo" /> */}
                  <h1 className="caseBrandName">E-O Prediction</h1>
                </div>
                <p className="caseExpPar">
                  In this case study, we delve into the pressing issue of
                  potential epidemic outbreaks and the intricate challenges
                  faced in predicting and preventing them. In response, we have
                  crafted an innovative AI and ML-driven application dedicated
                  to analyzing health data and social trends, aiming to foresee
                  and thwart potential outbreaks. Our application serves as a
                  comprehensive platform that aids in early detection, offering
                  timely intervention measures while fostering a vigilant and
                  proactive environment. Our mobile app allows users to access
                  real-time insights anonymously, ensuring swift responses to
                  mitigate emerging health crises.
                </p>
              </div>
              <div className="caseWenRight">
                <LazyLoadImage
                  className="caseWenSplashScreenOne"
                  alt=""
                  src={SplashOne}
                />
                <LazyLoadImage
                  className="caseWenSplashScreenTwo"
                  alt=""
                  src={SplashTwo}
                />
                <Link
                  to="/our-cases/eo-prediction"
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
