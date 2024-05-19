import React, { Fragment, useEffect } from 'react'
import '../styles/css/services.css'
import { ReactComponent as CellPhone } from '../assets/svg/android-phone.svg'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import HowWeGetItDone from '../components/HowWeGetItDone'

const Services: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Our Services | nullchemy</title>
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
      <div className="services">
        <div className="servicesContainer">
          <div className="servicesWrapper">
            <h1 className="servicesHeader">Our Services</h1>
            <div className="serviceIntrowrapper">
              <p className="serviceIntro">
                at nullchemy, we turn your business dreams into a digital
                reality, creating everything from cool apps to mind-blowing AI
                solutions. Our top-notch team manages it all while providing
                expert guidance.
              </p>
            </div>
            <div className="servCardsFlex">
              <div className="servCard">
                <h2>
                  Full - Project <br />
                  Development
                </h2>
                <p>
                  Hire a team of dedicated professionals necessary to design,
                  develop and launch your project.
                </p>
                <button>learn more</button>
              </div>
              <div className="servCard">
                <h2>
                  Team <br />
                  augmentation
                </h2>
                <p>
                  Hire an individual or a custom group of professionals that
                  will be formed by us and will become a dedicated part of your
                  team.
                </p>
                <button>learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="srvfllprojDevelopment" id="full-project-development">
          <div className="srvfllprojDevBgImage"></div>
          <div className="srvfllprojDevWrp">
            <h1>Full - Project Development</h1>
            <p>
              Hire a team of dedicated professionals necessary to design,
              develop and launch your project.
            </p>
            <div className="fldevcardFlexWrap">
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">mobile development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">Back-End development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">Front-End development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="srvfllprojDevelopment" id="team-argumentation">
          <div className="srvteamArgumentationBgImage"></div>
          <div className="srvfllprojDevWrp">
            <h1>Team Argumentation</h1>
            <p>
              Hire an individual or a custom group of professionals that will be
              formed by us and will become a dedicated part of your team.
            </p>
            <div className="fldevcardFlexWrap">
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">mobile development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">Back-End development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
              <div className="srvfldcards">
                <div className="srvlfdleft">
                  <CellPhone className="srcfldIc" />
                </div>
                <div className="srvlfdright">
                  <h2 className="srvlfdrighth2">Front-End development</h2>
                  <p className="srvlfdrightp">
                    We specialize in mobile applications native iOS and Android
                    development. Our mobile development team is fluent with the
                    platforms guidelines, UI rules and standards, while an
                    extensive experience allows us to keep attention on tiny
                    peculiarities to deliver powerful, user-friendly and amazing
                    apps.
                  </p>
                  <br />
                  <span>swift</span>
                  <span>java</span>
                  <span>kotlin</span>
                  <br />
                  <button className="srvfldcrdbtn">learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowWeGetItDone />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Services
