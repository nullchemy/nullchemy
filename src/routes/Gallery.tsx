import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Gallery = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Gallery | nullchemy</title>
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
      <div className="gallery">
        <div className="galleryContainer">
          <div className="galleryWrapper">
            <h1 className="galleryTitle">Our Gallery</h1>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Gallery
