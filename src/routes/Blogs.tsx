import React, { Fragment, useState, useEffect } from 'react'
import '../styles/css/blog.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactComponent as Filter } from '../assets/svg/filter.svg'
import { useNavigate } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import api from '../api/axios'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import { backend } from '../utils/backend'
import SpotBlog from '../components/BlogSpot'

const Blogs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  let navigate = useNavigate()
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: Array<[]>,
  })
  const [placeholderStatus, setPlaceholderStatus] = useState<{
    [key: string]: boolean
  }>({})
  const imageFormats: string[] = ['.png', '.jpg', '.jpeg', '.gif']

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await api('GET', 'blog/all', {})
      if (res.data.type !== 'error') {
        setBlogs({ ...res.data, state: 'success' })
      } else {
        setBlogs({ data: Array<[]>, state: 'error' })
      }
    }
    fetchBlog()
  }, [blogs.data.length])
  const fetchBlog = async () => {
    setBlogs({ data: Array<[]>, state: 'loading' })
    const res = await api('GET', 'blog/all', {})
    if (res.data.type !== 'error') {
      setBlogs({ ...res.data, state: 'success' })
    } else {
      setBlogs({ data: Array<[]>, state: 'error' })
    }
  }

  //handle blog click
  const handleBlogRed = (blogid: string, blogslug: string) => {
    window.sessionStorage.setItem('blogid', blogid)
    navigate('/read/' + blogslug)
    window.scrollTo(0, 0)
  }

  const handleImageError = (blogID: string) => {
    setPlaceholderStatus((prevStatus) => ({
      ...prevStatus,
      [blogID]: true,
    }))
  }

  return (
    <Fragment>
      <Helmet>
        <title>Our Blogs | nullchemy</title>
        <link rel="canonical" href="http://nullchemy.com/blogs" />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
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
            <SpotBlog blogs={blogs} imageFormats={imageFormats} />
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
              <div className="BloghlgloadingAnim">
                <div className="blog-item loading">
                  <div className="blog-preview-image"></div>
                  <div className="blog-details">
                    <div className="blog-title"></div>
                    <div className="blog-preview-text"></div>
                  </div>
                  <div className="blog-date"></div>
                </div>
                <div className="blog-item loading">
                  <div className="blog-preview-image"></div>
                  <div className="blog-details">
                    <div className="blog-title"></div>
                    <div className="blog-preview-text"></div>
                  </div>
                  <div className="blog-date"></div>
                </div>
                <div className="blog-item loading">
                  <div className="blog-preview-image"></div>
                  <div className="blog-details">
                    <div className="blog-title"></div>
                    <div className="blog-preview-text"></div>
                  </div>
                  <div className="blog-date"></div>
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
                  const isPlaceholder = placeholderStatus[i.BlogID]
                  return (
                    <div
                      className="highblogcard"
                      onClick={() => {
                        handleBlogRed(i.BlogID, i.BlogSlug)
                      }}
                      key={i.BlogID}
                    >
                      <div className="bloghighImage">
                        {isPlaceholder ? (
                          <img src={PlaceHolder} alt="" />
                        ) : JSON.parse(i.PreviewImage).assets.length !== 0 &&
                          previmage ? (
                          <img
                            id="blgImage"
                            src={backend() + 'uploads/' + previmage}
                            onError={() => handleImageError(i.BlogID)}
                            alt=""
                          />
                        ) : (
                          <img src={PlaceHolder} alt="" />
                        )}
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
                <p>
                  Could'nt get blogs!{' '}
                  <span
                    onClick={() => {
                      fetchBlog()
                    }}
                  >
                    retry
                  </span>
                </p>
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
