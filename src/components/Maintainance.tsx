import React, { Fragment } from 'react'
import '../styles/css/maintainance.css'
import MadDesigner from '../assets/images/mad-designer.png'

const Maintainance = () => {
  return (
    <Fragment>
        <div className="maintainance">
            <div className="maintcontainer">
                <div className="maintwrap">
                    <div className="madmaintimage">
                        <img src={MadDesigner} alt="" />
                    </div>
                    <div className="madmainttexts">
                        <h2>This Page is under Construction</h2>
                        <p>This page is undergoing a scheduled maintainace, check back here after some time.</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Maintainance