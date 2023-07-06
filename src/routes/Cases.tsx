import React, { Fragment } from 'react'
import '../styles/css/ourcases.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Cases: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className="ourcases">
        <div className="ourcasesContainer">
          <div className="ourcasesWrapper">
            <h1 className="ourcasesHeader">Our Cases</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Cases
