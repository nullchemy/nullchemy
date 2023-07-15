import React, { Fragment, useState, useEffect } from 'react'
import '../styles/css/blog.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import agility from '../assets/images/agility.png'
import { ReactComponent as Filter } from '../assets/svg/filter.svg'
import { useNavigate } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import api from '../api/axios'
import ReactGA from 'react-ga'

const Blogs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  let navigate = useNavigate()
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: [],
  })
  const imageFormats: string[] = ['.png', '.jpg', '.jpeg', '.gif']
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await api('GET', 'blog/all', {})
      if (res.data.type !== 'error') {
        setBlogs({ ...res.data, state: 'success' })
        console.log(res.data)
      } else {
        setBlogs({ data: [], state: 'error' })
      }
    }
    fetchBlog()
  }, [])
  console.log(blogs)

  const backend = (): string => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return 'http://localhost:8000/'
    } else {
      return 'https://api.nullchemy.com/'
    }
  }

  function replaceWithPlaceholder(): void {
    const image = document.getElementById('blgImage') as HTMLImageElement
    image.src = backend() + 'nullchemy_placeholder.jpg'
    image.onerror = null // To prevent an infinite loop in case the placeholder image is also missing
  }

  //handle blog click
  const handleBlogRed = (blogid: string, blogslug: string) => {
    window.sessionStorage.setItem('blogid', blogid)
    navigate('/read/' + blogslug)
    window.scrollTo(0, 0)
  }

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
            {blogs.state === 'loading' ? (
              <div className="loadingAnim">
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : blogs.state === 'success' && Array.isArray(blogs.data) ? (
              blogs.data.map((i: any) => {
                if (blogs.data.length !== 0) {
                  const previmage: string | undefined = JSON.parse(
                    i.PreviewImage
                  ).assets.find((element: string) => {
                    return imageFormats.some((format: string) =>
                      element.endsWith(format)
                    )
                  })
                  return (
                    <div
                      className="highblogcard"
                      onClick={() => {
                        handleBlogRed(i.BlogID, i.BlogSlug)
                      }}
                      key={i.BlogID}
                    >
                      <div className="bloghighImage">
                        {JSON.parse(i.PreviewImage).assets.length !== 0 &&
                        previmage ? (
                          <img
                            id="blgImage"
                            src={backend() + 'uploads/' + previmage}
                            onError={replaceWithPlaceholder}
                            alt=""
                          />
                        ) : null}
                      </div>
                      <div className="bloghighTitle">
                        <h2>{i.Title}</h2>
                        <p>{i.Summary}</p>
                      </div>
                      <div className="bloghighInfo">
                        <p>
                          {i.TimeStamp} . {i.ReadLength}min read
                        </p>
                      </div>
                    </div>
                  )
                }
                return ''
              })
            ) : (
              <div className="errFetchBlogs">
                <p>Something Wrong Happened!</p>
              </div>
            )}
          </div>
        </section>
        <Newsletter />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Blogs
