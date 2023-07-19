import React, { Fragment, useEffect } from 'react'
import '../styles/css/about.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OurTeam from '../components/OurTeam'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>About Us | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/about" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
      <Header />
      <div className="aboutus">
        <section className="about-header">
          <div className="about-header-wrapper">
            <h2>About Us</h2>
          </div>
        </section>
        <section className="mission">
          <div className="mission-wrapper">
            <div className="mission-images">
              <div className="miss-image-wrapper">
                {/* <img src={agility} alt="" /> */}
                <div className="missGridWrapper">
                  <div className="gridImgWrapItem"></div>
                  <div className="gridImgWrapItem"></div>
                  <div className="gridImgWrapItem"></div>
                  <div className="gridImgWrapItem"></div>
                </div>
              </div>
            </div>
            <div className="mission-texts">
              <span className="sec-text">our mission</span>
              <h1>
                Our mission is to build the best developer experience across the
                development process
              </h1>
              <p>
                our mission is to provide the best developer experience across
                the development process, building highly efficient and
                performant software for our diverse customers. We prioritize
                user experience, focus on performance, and offer the tools,
                documentation, and collaboration opportunities that developers
                need to succeed. We are dedicated to continuous improvement and
                innovation in delivering a high-quality developer experience.
              </p>
            </div>
          </div>
        </section>
        <OurTeam />
        <section className="faqmainSection">
          <div className="faqsection">
            <div className="faqcontainer">
              <div className="faqwrapper">
                <div className="faqflex">
                  <h1 className="faqtitle">faq</h1>
                  <div className="faqdrop">
                    <div className="faqdroptitle">
                      <h2 className="faqText">
                        How do you get started with nullAPI?
                      </h2>
                      <i className="fa-solid fa-angle-right faqangleright"></i>
                    </div>
                    <div className="faqdropcontents">
                      <p className="faqdroptexts">
                        We are on the mission of building an interoperable and
                        open metaverse made of thousands of virtual worlds. We
                        strongly believe in NFTs as one of key technologies that
                        enable interoperability. We want to give users of Ready
                        Player Me a way to buy and access NFTs compatible with
                        our and other platforms.
                      </p>
                      <p className="faqdroptexts">
                        We share the revenue from sales of the NFTs with our
                        partner apps and worlds, helping them monetize and build
                        better experiences. Partners don’t need to implement
                        blockchain tech into our products – everything is
                        integrated directly into Ready Player Me.
                      </p>
                    </div>
                    <div className="faqdroptitle">
                      <h2 className="faqText">
                        How do I get my API key for nullAPI?
                      </h2>
                      <i className="fa-solid fa-angle-right faqangleright"></i>
                    </div>
                    <div className="faqdropcontents">
                      <p className="faqdroptexts">
                        We are on the mission of building an interoperable and
                        open metaverse made of thousands of virtual worlds. We
                        strongly believe in NFTs as one of key technologies that
                        enable interoperability. We want to give users of Ready
                        Player Me a way to buy and access NFTs compatible with
                        our and other platforms.
                      </p>
                      <p className="faqdroptexts">
                        We share the revenue from sales of the NFTs with our
                        partner apps and worlds, helping them monetize and build
                        better experiences. Partners don’t need to implement
                        blockchain tech into our products – everything is
                        integrated directly into Ready Player Me.
                      </p>
                    </div>
                    <div className="faqdroptitle">
                      <h2 className="faqText">
                        Which endpoints do I authenticate my requests?
                      </h2>
                      <i className="fa-solid fa-angle-right faqangleright"></i>
                    </div>
                    <div className="faqdropcontents">
                      <p className="faqdroptexts">
                        We are on the mission of building an interoperable and
                        open metaverse made of thousands of virtual worlds. We
                        strongly believe in NFTs as one of key technologies that
                        enable interoperability. We want to give users of Ready
                        Player Me a way to buy and access NFTs compatible with
                        our and other platforms.
                      </p>
                      <p className="faqdroptexts">
                        We share the revenue from sales of the NFTs with our
                        partner apps and worlds, helping them monetize and build
                        better experiences. Partners don’t need to implement
                        blockchain tech into our products – everything is
                        integrated directly into Ready Player Me.
                      </p>
                    </div>
                    <div className="faqdroptitle">
                      <h2 className="faqText">
                        Which authentication technique does nullAPI supports
                        (Sessions or JWT)?
                      </h2>
                      <i className="fa-solid fa-angle-right faqangleright"></i>
                    </div>
                    <div className="faqdropcontents">
                      <p className="faqdroptexts">
                        We are on the mission of building an interoperable and
                        open metaverse made of thousands of virtual worlds. We
                        strongly believe in NFTs as one of key technologies that
                        enable interoperability. We want to give users of Ready
                        Player Me a way to buy and access NFTs compatible with
                        our and other platforms.
                      </p>
                      <p className="faqdroptexts">
                        We share the revenue from sales of the NFTs with our
                        partner apps and worlds, helping them monetize and build
                        better experiences. Partners don’t need to implement
                        blockchain tech into our products – everything is
                        integrated directly into Ready Player Me.
                      </p>
                    </div>
                    <div className="faqdroptitle">
                      <h2 className="faqText">
                        How do you get started with nullAPI?
                      </h2>
                      <i className="fa-solid fa-angle-right faqangleright"></i>
                    </div>
                    <div className="faqdropcontents">
                      <p className="faqdroptexts">
                        We are on the mission of building an interoperable and
                        open metaverse made of thousands of virtual worlds. We
                        strongly believe in NFTs as one of key technologies that
                        enable interoperability. We want to give users of Ready
                        Player Me a way to buy and access NFTs compatible with
                        our and other platforms.
                      </p>
                      <p className="faqdroptexts">
                        We share the revenue from sales of the NFTs with our
                        partner apps and worlds, helping them monetize and build
                        better experiences. Partners don’t need to implement
                        blockchain tech into our products – everything is
                        integrated directly into Ready Player Me.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="secNewsletter" id="newsletter">
          <div className="newsletter">
            <div className="newslettercontainer">
              <div className="subnewsletter">
                <div className="subnewsFlex">
                  <div className="subNewstexts">
                    <h3 className="subNewstitle">
                      Subscribe to our newsletter
                    </h3>
                    <p className="subNewsTextsp">
                      stay upto date with our latest blogs and news updates
                    </p>
                  </div>
                  <div className="subnewsform">
                    <form action="" className="subNewsFormf">
                      <div className="subinputsFlex">
                        <input
                          type="text"
                          className="subnewsinput"
                          placeholder="your e-mail address"
                        />
                        <input
                          type="submit"
                          value="Subscribe"
                          className="subnewsButton"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  )
}

export default About
