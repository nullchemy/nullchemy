import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/connect.css'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { Link } from 'react-router-dom'
import api from '../api/axios'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'

const Connect = () => {
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: [],
  })
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await api('GET', 'blog/all', {})
      if (res.status === 200) {
        setBlogs({ ...res.data, state: 'success' })
      } else {
        setBlogs({ data: [], state: 'error' })
      }
    }
    fetchBlog()
  }, [])

  const spotblog: {
    title: string
    summary: string
    slug: string
    assets: Array<string>
  } = blogs.data[Math.floor(Math.random() * blogs.data.length)]

  if (blogs.state === 'loading') {
    return (
      <Fragment>
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
      </Fragment>
    )
  } else if (
    blogs.state === 'success' &&
    Array.isArray(blogs.data) &&
    blogs.data.length !== 0
  ) {
    return (
      <Fragment>
        <div className="connect-with-us">
          <div className="connect-wrapper">
            <div className="connect-header">
              <h1 className="connect-title">Stay connected with us</h1>
              <ArrowRight className="connectArrRight" />
            </div>
            <div className="connect-body">
              <Link to={`/read/${spotblog.slug}`} className="connect-highlight">
                <div className="connect-high-image-wrapper">
                  <img
                    className="connect-high-image"
                    src={
                      spotblog.assets.length !== 0
                        ? spotblog.assets[0]
                        : PlaceHolder
                    }
                    alt=""
                  />
                </div>
                <h1 className="connect-high-title">{spotblog.title}</h1>
                <p className="connect-high-par">{spotblog.summary}</p>
              </Link>
              <div className="connect-blg-items">
                {blogs.data.map((blog: any) => {
                  return (
                    <Link
                      to={`/read/${blog.slug}`}
                      className="conn-blg-item"
                      key={blog._id}
                    >
                      <div className="conn-item-texts">
                        <h1 className="conn-blg-item-title">{blog.title}</h1>
                        <p className="conn-blg-item-par">{blog.summary}</p>
                      </div>
                      <div className="conn-item-image">
                        <img
                          src={
                            blog.assets.length !== 0
                              ? blog.assets[0]
                              : PlaceHolder
                          }
                          alt=""
                          id="blgImage"
                        />
                      </div>
                    </Link>
                  )
                })}
                <Link className="conn-read-more" to="/blogs">
                  more blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  } else {
    return <Fragment></Fragment>
  }
}

export default Connect
