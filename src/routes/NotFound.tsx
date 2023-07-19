import React, { Fragment, useEffect } from 'react'
import '../styles/css/notfound.css'
import { ReactComponent as NotFImage } from '../assets/svg/notfound.svg'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  try {
    useEffect(() => {
      gsap.set('svg', { visibility: 'visible' })
      gsap.to('#headStripe', {
        y: 0.5,
        rotation: 1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        duration: 1,
      })

      gsap.to('#spaceman', {
        y: 0.5,
        rotation: 1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        duration: 1,
      })

      gsap.to('#craterSmall', {
        x: -3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
      })

      gsap.to('#craterBig', {
        x: 3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
      })

      gsap.to('#planet', {
        rotation: -2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%',
      })

      gsap.to('#starsBig g', {
        rotation: 'random(-30,30)',
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '#starsSmall g',
        { scale: 0, transformOrigin: '50% 50%' },
        {
          scale: 1,
          transformOrigin: '50% 50%',
          yoyo: true,
          repeat: -1,
          stagger: 0.1,
        }
      )

      gsap.to('#circlesSmall circle', {
        y: -4,
        yoyo: true,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
      })

      gsap.to('#circlesBig circle', {
        y: -2,
        yoyo: true,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
      })

      gsap.set('#glassShine', { x: -68 })

      gsap.to('#glassShine', {
        x: 80,
        duration: 2,
        rotation: -30,
        ease: 'expo.inOut',
        transformOrigin: '50% 50%',
        repeat: -1,
        repeatDelay: 8,
        delay: 2,
      })
    }, [])
  } catch (error) {
    console.log(error)
  }
  return (
    <Fragment>
      <Helmet>
        <title>(404) Page Not Found | nullchemy</title>
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
      <div className="notfoundcontainer">
        <div className="notfoundwrapper">
          <div className="notfoundleft">
            <NotFImage className="nfimager" />
          </div>
          <div className="notfoundright">
            <div className="nfrwrapper">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>
                We're fairly sure that page used to be here, but seems to have
                gone missing. How you got here is a mystery. But you can click
                the button below to go back to the homepage.
              </p>
              <br />
              <br />
              <Link to="/" className="nfbackhome nfbackgreen">
                home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NotFound
