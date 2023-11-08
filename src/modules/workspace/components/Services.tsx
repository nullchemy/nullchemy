import React, { Fragment } from 'react'
import '../styles/css/modservices.css'

const Services = () => {
  return (
    <Fragment>
      <div className="mod_services">
        <div className="ms_wrapper">
          <div className="ms_wrap_inner_contr">
            <h2>Our Services</h2>
            <div className="ms_wrap_flex_row">
              <div className="ms_serv_item">
                <h1>Database Hosting</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, in? Quas obcaecati, quidem atque debitis natus libero
                  deleniti quis doloribus architecto illo. Vel, voluptates
                  vitae?
                </p>
              </div>
              <div className="ms_serv_item">
                <h1>Node.js Application Hosting</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, in? Quas obcaecati, quidem atque debitis natus libero
                  deleniti quis doloribus architecto illo. Vel, voluptates
                  vitae?
                </p>
              </div>
              <div className="ms_serv_item">
                <h1>Ruby Application Hosting</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, in? Quas obcaecati, quidem atque debitis natus libero
                  deleniti quis doloribus architecto illo. Vel, voluptates
                  vitae?
                </p>
              </div>
              <div className="ms_serv_item">
                <h1>Python Applications Hosting</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, in? Quas obcaecati, quidem atque debitis natus libero
                  deleniti quis doloribus architecto illo. Vel, voluptates
                  vitae?
                </p>
              </div>
              <div className="ms_serv_item">
                <h1>Shared Hosting (CPanel)</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, in? Quas obcaecati, quidem atque debitis natus libero
                  deleniti quis doloribus architecto illo. Vel, voluptates
                  vitae?
                </p>
              </div>
            </div>
          </div>
          <div className="ms_wrap_inner_contr">
            <h2>Supported Runtimes</h2>
            <div className="ms_wrap_flex_runtimes">
              <div className="ms_serv_item"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Services
