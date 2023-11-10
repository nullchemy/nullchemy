import React, { Fragment } from 'react'
import '../styles/css/modservices.css'
import NodeJs from '../assets/images/node.js.png'
import Java from '../assets/images/java.png'
import Php from '../assets/images/php.png'
import Python from '../assets/images/python.png'
import Ruby from '../assets/images/ruby.png'
import Scala from '../assets/images/scala.png'

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
              <div className="ms_serv_item">
                <img src={NodeJs} alt="" />
              </div>
              <div className="ms_serv_item">
                <img src={Java} alt="" />
              </div>
              <div className="ms_serv_item">
                <img src={Php} className="runtime_php" alt="" />
              </div>
              <div className="ms_serv_item">
                <img src={Python} alt="" />
              </div>
              <div className="ms_serv_item">
                <img src={Ruby} alt="" />
              </div>
              <div className="ms_serv_item">
                <img src={Scala} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Services
