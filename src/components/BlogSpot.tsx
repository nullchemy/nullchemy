import React, { useState, useEffect } from 'react'
import agility from '../assets/images/agility.png'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import Err500 from '../assets/images/500-error.png'
import { Link } from 'react-router-dom'

const SpotBlog = ({ blogs }: { blogs: any }) => {
  const [spotBlog, setSpotBlog] = useState(0)

  useEffect(() => {
    // Generate a random index when blogs or blogs.data change
    const randomIndex = Math.floor(Math.random() * blogs.data.length)
    setSpotBlog(randomIndex)
  }, [blogs])

  if (blogs.state === 'loading') {
    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <div
            className="c-skeleton-square"
            style={{ height: '100%', width: '100%', borderRadius: '12px' }}
          ></div>
        </div>
        <div style={{ width: '50%' }}>
          <div
            className="c-skeleton-square"
            style={{
              height: '50px',
              width: '100%',
              borderRadius: '12px',
            }}
          ></div>
          <div
            className="c-skeleton-square"
            style={{
              height: '160px',
              width: '100%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
          <div
            className="c-skeleton-square"
            style={{
              height: '30px',
              width: '30%',
              borderRadius: '12px',
              marginTop: '10px',
            }}
          ></div>
        </div>
      </div>
    )
  }

  if (
    blogs.state === 'success' &&
    Array.isArray(blogs.data) &&
    blogs.data.length > 0
  ) {
    const blog = blogs.data[spotBlog]

    return (
      <Link to={`/read/${blog.slug}`} className="spot-blog">
        <div className="spot-image">
          <img
            id="blgImage"
            src={blog.assets.length !== 0 ? blog.assets[0] : PlaceHolder}
            alt=""
          />
        </div>
        <div className="spot-texts">
          <span className="spot-category">Web Development</span>{' '}
          <span className="spot-date">
            {new Date(blog.createdAt).toLocaleString('en-US', {
              month: 'long',
              day: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}{' '}
            . {blog.length} min read
          </span>
          <h2>
            <Link
              to={`/read/${blog.slug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {blog.title}
            </Link>
          </h2>
          <p>
            <Link
              to={`/read/${blog.slug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {blog.summary}
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
      </Link>
    )
  }

  if (blogs.state !== 'success') {
    return (
      <div className="spot-blog-error">
        <img src={Err500} alt="" />
        <h1>
          <span>500</span> <br />
          Internal server error
        </h1>
        <p>We are currently trying to fix the problem.</p>
      </div>
    )
  }

  return (
    <div className="spot_blog_no_blogs" style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>There are no blogs currently!</h1>
      <p style={{ textAlign: 'center' }}>
        revisit this page later for new blogs
      </p>
    </div>
  )
}

export default SpotBlog
