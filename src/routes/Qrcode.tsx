import React, { Fragment } from 'react'
import { QRCode } from 'react-qrcode-logo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

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
          value="https://denniskibet.netlify.app"
          bgColor="transparent"
          removeQrCodeBehindLogo={true}
          size={350}
          eyeRadius={20}
        />
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Qrcode
