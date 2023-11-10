import React, { useState, useEffect } from 'react'
import agility from '../assets/images/agility.png'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import Err500 from '../assets/images/500-error.png'
import { Link } from 'react-router-dom'
import { backend } from '../utils/backend'

const SpotBlog = ({ blogs, imageFormats }) => {
  const [spotBlog, setSpotBlog] = useState(0)
  const [placeholder, setPlaceholder] = useState(false)

  useEffect(() => {
    // Generate a random index when blogs or blogs.data change
    const randomIndex = Math.floor(Math.random() * blogs.data.length)
    setSpotBlog(randomIndex)
  }, [blogs])

  if (blogs.state === 'loading') {
    return <p>Loading Spot Blog</p>
  }

  if (
    blogs.state === 'success' &&
    Array.isArray(blogs.data) &&
    blogs.data.length > 0
  ) {
    const blog = blogs.data[spotBlog]
    const previewImage = JSON.parse(blog.PreviewImage)
    const imageAssets = previewImage.assets
    const hasValidImage =
      imageAssets &&
      imageAssets.length !== 0 &&
      imageAssets.some((element) =>
        imageFormats.some((format) => element.endsWith(format))
      )

    const imageUrl = placeholder
      ? PlaceHolder
      : hasValidImage
      ? backend() +
        'uploads/' +
        imageAssets.find((element) =>
          imageFormats.some((format) => element.endsWith(format))
        )
      : PlaceHolder

    return (
      <div className="spot-blog">
        <div className="spot-image">
          <img
            id="blgImage"
            src={imageUrl}
            onError={() => setPlaceholder(true)}
            alt=""
          />
        </div>
        <div className="spot-texts">
          <span className="spot-category">Web Development</span>{' '}
          <span className="spot-date">June 22, 2022</span>
          <h2>
            <Link
              to={`/read/${blog.BlogSlug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {blog.Title}
            </Link>
          </h2>
          <p>
            <Link
              to={`/read/${blog.BlogSlug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {blog.Summary}
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
    )
  }

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

export default SpotBlog
