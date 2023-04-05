import React, { Fragment } from 'react'
import '../styles/css/blog.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import agility from '../assets/images/agility.png'

const Blogs = () => {
  return (
    <Fragment>
      <Header />
      <div className="blog">
        <section className="blog-sec-top">
          <h1>Our Blog</h1>
          <p>
            In a software-defined world, the Simform Blog is your place to
            navigate through the renaissance in technology. Our publication aims
            to provide you the full scoop on the groundbreaking research,
            thought-leadership, and perspective on tech innovation in the world
            of software development, with a deep context to help tech leaders
            make intelligent decisions.
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
                  <a href="read.html">
                    7 Frontend JavaScript Frameworks Loved by Developers in 2022
                  </a>
                </h2>
                <p>
                  <a href="read.html">
                    is undoubtedly quite popular in building interactive and
                    multimedia content. In 2021, it completed the ninth year in
                    a row as the most commonly used programming language. A
                    JavaScript frontend framework is a collection of JavaScript
                    code libraries that helps developers with standard
                    programming features and tasks. In addition, it offers
                    reusable code components, a universal development
                    environment, compilers, toolsets, code libraries, APIs,
                    etc., to facilitate the app.
                  </a>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"></path>
              </svg>
            </div>
          </div>
          <div className="highflex">
            <div className="highblogcard">
              <div className="bloghighImage">
                <img src={agility} alt="" />
              </div>
              <div className="bloghighTitle">
                <a href="read.html">
                  <h2>
                    Wolf3D & Rovio Talking About 3D Avatars and Virtual
                    Identities in Games and Metaverses
                  </h2>
                </a>
                <a href="read.html">
                  <p>
                    Building your business’s web presence has become a mandate
                    in today’s world of scrolling social media and often landing
                    straight on a shopping website. A professional web
                    application helps your business achieve industry standards
                    and engage your customers with the company’s offerings.
                  </p>
                </a>
              </div>
              <div className="bloghighInfo">
                <p>April 15, 2022 . 5min read</p>
              </div>
            </div>
          </div>
        </section>

        <section className="secNewsletter" id="newsletter">
          <div className="newsletter">
            <div className="newslettercontainer">
              <div className="subnewsletter">
                <div className="subnewsFlex">
                  <div className="subNewstexts">
                    <h3 className="subNewstitle">Subscribe to my newsletter</h3>
                    <p className="subNewsTextsp">
                      stay upto date with my latest blogs and news updates
                    </p>
                  </div>
                  <div className="subnewsform">
                    <form action="" className="subNewsFormf">
                      <div className="subinputsFlex">
                        <input
                          type="text"
                          className="subnewsinput"
                          placeholder="your e-mail address"
                        />
                        <input
                          type="submit"
                          value="Subscribe"
                          className="subnewsButton"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Blogs
