import React, { Fragment } from 'react'
import '../styles/css/blog.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import agility from '../assets/images/agility.png'
import { ReactComponent as Filter } from '../assets/svg/filter.svg'
import Newsletter from '../components/Newsletter'

const Blogs = () => {
  return (
    <Fragment>
      <Header />
      <div className="blog">
        <section className="blog-sec-top">
          <h1>Our Blog</h1>
          <p>
            welcome to the nullchemy Tech Blog - your go-to source for
            insightful articles on the latest trends and innovations in the
            ever-evolving world of technology. Stay up-to-date with our in-depth
            analyses and expert opinions.
          </p>
        </section>
        <section className="blog-landing">
          <div className="blog-landing-wrapper">
            <div className="spot-blog">
              <div className="spot-image">
                <img src={agility} alt="" />
              </div>
              <div className="spot-texts">
                <span className="spot-category">Web Development</span>{' '}
                <span className="spot-date">june 22 2022</span>
                <h2>
                  <Link
                    to="/read"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    7 Frontend JavaScript Frameworks Loved by Developers in 2022
                  </Link>
                </h2>
                <p>
                  <Link
                    to="/read"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    is undoubtedly quite popular in building interactive and
                    multimedia content. In 2021, it completed the ninth year in
                    a row as the most commonly used programming language. A
                    JavaScript frontend framework is a collection of JavaScript
                    code libraries that helps developers with standard
                    programming features and tasks. In addition, it offers
                    reusable code components, a universal development
                    environment, compilers, toolsets, code libraries, APIs,
                    etc., to facilitate the app.
                  </Link>
                </p>
                <div className="spot-author">
                  <img src={agility} alt="" />
                  <div className="spot-author-name">
                    <h4>Dennis Kibet</h4>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blogs-showcase">
          <div className="bloghighHeader">
            <div className="blogsFileters">
              <div className="filter activeFilter">
                <p>All</p>
              </div>
              <div className="filter">
                <p>nullAPI</p>
              </div>
              <div className="filter">
                <p>Nodejs</p>
              </div>
              <div className="filter">
                <p>php</p>
              </div>
              <div className="filter">
                <p>Python</p>
              </div>
              <div className="filter">
                <p>Ruby</p>
              </div>
            </div>
            <div className="viewIcon">
              <Filter className="bgfilterIc" />
            </div>
          </div>
          <div className="highflex">
            <div className="highblogcard">
              <div className="bloghighImage">
                <img src={agility} alt="" />
              </div>
              <div className="bloghighTitle">
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <h2>
                    Wolf3D & Rovio Talking About 3D Avatars and Virtual
                    Identities in Games and Metaverses
                  </h2>
                </Link>
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <p>
                    Building your business’s web presence has become a mandate
                    in today’s world of scrolling social media and often landing
                    straight on a shopping website. A professional web
                    application helps your business achieve industry standards
                    and engage your customers with the company’s offerings.
                  </p>
                </Link>
              </div>
              <div className="bloghighInfo">
                <p>April 15, 2022 . 5min read</p>
              </div>
            </div>
            <div className="highblogcard">
              <div className="bloghighImage">
                <img src={agility} alt="" />
              </div>
              <div className="bloghighTitle">
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <h2>
                    Wolf3D & Rovio Talking About 3D Avatars and Virtual
                    Identities in Games and Metaverses
                  </h2>
                </Link>
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <p>
                    Building your business’s web presence has become a mandate
                    in today’s world of scrolling social media and often landing
                    straight on a shopping website. A professional web
                    application helps your business achieve industry standards
                    and engage your customers with the company’s offerings.
                  </p>
                </Link>
              </div>
              <div className="bloghighInfo">
                <p>April 15, 2022 . 5min read</p>
              </div>
            </div>
            <div className="highblogcard">
              <div className="bloghighImage">
                <img src={agility} alt="" />
              </div>
              <div className="bloghighTitle">
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <h2>
                    Wolf3D & Rovio Talking About 3D Avatars and Virtual
                    Identities in Games and Metaverses
                  </h2>
                </Link>
                <Link
                  to="/read"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <p>
                    Building your business’s web presence has become a mandate
                    in today’s world of scrolling social media and often landing
                    straight on a shopping website. A professional web
                    application helps your business achieve industry standards
                    and engage your customers with the company’s offerings.
                  </p>
                </Link>
              </div>
              <div className="bloghighInfo">
                <p>April 15, 2022 . 5min read</p>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Blogs
