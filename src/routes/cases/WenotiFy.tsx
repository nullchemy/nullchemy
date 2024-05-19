import React, { Fragment } from 'react'
import '../../styles/css/wenotify.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import PoliceScene from '../../assets/images/unsplash/wenotify_police_car.jpg'
import { Helmet } from 'react-helmet'

const WenotiFy = () => {
  return (
    <Fragment>
      <Helmet>
        <title>WenotiFy Kenya | nullchemy</title>
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
      <div className="wenotify">
        <div className="wenotifyContainer">
          <div className="wenotifyWrapper">
            <div className="wenotifyLandingWrapper">
              <LazyLoadImage
                className="wenpoliceSceneBack"
                alt=""
                src={PoliceScene} // use normal <img> attributes as props
              />
              <div className="wenotifyLanding">
                <div className="wenLndCenterWrap">
                  <div className="wenotifyTitle">WenotiFy Kenya</div>
                  <div className="wenProdType">
                    <h3 className="wenSubTitle">Mobile App</h3>
                    <span>|</span>
                    <h3 className="wenSubTitle">Web App</h3>
                  </div>
                  <h3 className="wenAppTagline">
                    Report incidences and crimes on the fly as they happen
                  </h3>
                </div>
              </div>
            </div>
            <div className="wenotifyContent"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default WenotiFy
