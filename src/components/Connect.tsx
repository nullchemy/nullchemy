import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/connect.css'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import agility from '../assets/images/agility.png'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import { backend } from '../utils/backend'

const Connect = () => {
  let navigate = useNavigate()
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: [],
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
        setBlogs({ data: [], state: 'error' })
      }
    }
    fetchBlog()
  }, [])

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

  const spotblog: { Title: string; Summary: string } =
    blogs.data[Math.floor(Math.random() * blogs.data.length)]

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
              <div className="connect-highlight">
                <div className="connect-high-image-wrapper">
                  <img className="connect-high-image" src={agility} alt="" />
                </div>
                <h1 className="connect-high-title">{spotblog.Title}</h1>
                <p className="connect-high-par">{spotblog.Summary}</p>
              </div>
              <div className="connect-blg-items">
                {blogs.data.map((blog: any) => {
                  const previmage = JSON.parse(blog.PreviewImage).assets.find(
                    (element: string) =>
                      imageFormats.some((format: string) =>
                        element.endsWith(format)
                      )
                  )
                  const isPlaceholder = placeholderStatus[blog.BlogID]
                  return (
                    <div
                      className="conn-blg-item"
                      onClick={() => {
                        handleBlogRed(blog.BlogID, blog.BlogSlug)
                      }}
                      key={blog.BlogID}
                    >
                      <div className="conn-item-texts">
                        <h1 className="conn-blg-item-title">{blog.Title}</h1>
                        <p className="conn-blg-item-par">{blog.Summary}</p>
                      </div>
                      <div className="conn-item-image">
                        {isPlaceholder ? (
                          <img src={PlaceHolder} alt="" />
                        ) : (
                          <img
                            src={backend() + 'uploads/' + previmage}
                            onError={() => handleImageError(blog.BlogID)}
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
                <Link className="conn-read-more" to="/blogs">
                  read more
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
