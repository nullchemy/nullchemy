import React, { Fragment } from 'react'
import '../styles/css/search.css'
import { ReactComponent as Lens } from '../assets/svg/lens.svg'
import Header from './Header'
import Footer from './Footer'

const Search = () => {
  return (
    <Fragment>
      <Header />
      <div className="search">
        <div className="serContainer">
          <div className="serWrapper">
            <form className="serForm">
              <div className="serFormGroup">
                <input
                  type="text"
                  className="serInput"
                  placeholder="Search..."
                />
                <Lens className="serFLensIc" />
              </div>
            </form>
            <div className="serResults"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Search
