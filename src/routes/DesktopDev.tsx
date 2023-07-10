import React, { Fragment } from 'react'
import '../styles/css/solutions.css'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const DesktopDev: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className="solutions">
        <div className="solutionsContainer">
          <div className="solutionsWrapper">
            <h1 className="solutionsHeader">Desktop Application Development</h1>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default DesktopDev
