import React, { Fragment } from 'react'
import { QRCode } from 'react-qrcode-logo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import nullchemyLogo from '../assets/images/nullchemy_new_logo_3d.png'

const Qrcode = () => {
  return (
    <Fragment>
      <Header />
      <div
        className="qrcode"
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '5rem',
        }}
      >
        <QRCode
          value="https://github.com/gcoro/react-qrcode-logo"
          bgColor="#fff"
          logoImage={nullchemyLogo}
          logoWidth={35}
          logoHeight={35}
          logoPadding={1}
          removeQrCodeBehindLogo={true}
        />
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Qrcode
