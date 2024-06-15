import React, { Fragment, useState, useEffect } from 'react'
import '../styles/css/blog.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactComponent as Filter } from '../assets/svg/filter.svg'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import api from '../api/axios'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import SpotBlog from '../components/BlogSpot'
import BlogsLoading from '../components/BlogsLoading'

const Blogs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: Array<[]>,
  })

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await api('GET', 'blog/all', { no: 10 })
      console.log(res)

      if (res.status === 200) {
        setBlogs({ ...res.data, state: 'success' })
      } else {
        setBlogs({ data: Array<[]>, state: 'error' })
      }
    }
    fetchBlog()
  }, [])

  const fetchBlog = async () => {
    setBlogs({ data: Array<[]>, state: 'loading' })
    const res = await api('GET', 'blog/all', { no: 10 })
    if (res.status === 200) {
      setBlogs({ ...res.data, state: 'success' })
    } else {
      setBlogs({ data: Array<[]>, state: 'error' })
    }
  }

  console.log(blogs)

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
            <SpotBlog blogs={blogs} />
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
              <BlogsLoading />
            ) : blogs.state === 'success' && Array.isArray(blogs.data) ? (
              blogs.data.map((i: any) => {
                if (blogs.data.length !== 0) {
                  return (
                    <Link
                      to={`/read/${i.slug}`}
                      className="highblogcard"
                      key={i._id}
                    >
                      <div className="bloghighImage">
                        <img
                          src={
                            i.assets.length !== 0 ? i.assets[0] : PlaceHolder
                          }
                          alt=""
                          id="blgImage"
                        />
                      </div>
                      <div className="bloghighTitle">
                        <h2>{i.title}</h2>
                        <p>{i.summary}</p>
                      </div>
                      <div className="bloghighInfo">
                        <p>
                          {new Date(i.createdAt).toLocaleString('en-US', {
                            month: 'long',
                            day: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })}{' '}
                          . {i.length}min read
                        </p>
                      </div>
                    </Link>
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
