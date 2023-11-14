import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/bloghighlights.css'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import { backend } from '../utils/backend'

const BlogHighlights = () => {
  let navigate = useNavigate()
  const [blogs, setBlogs] = useState({
    state: 'loading',
    data: [],
  })
  const [placeholder, setPlaceholder] = useState(false)
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
  const fetchBlog = async () => {
    setBlogs({ data: [], state: 'loading' })
    const res = await api('GET', 'blog/all', {})
    if (res.data.type !== 'error') {
      setBlogs({ ...res.data, state: 'success' })
    } else {
      setBlogs({ data: [], state: 'error' })
    }
  }

  //handle blog click
  const handleBlogRed = (blogid: string, blogslug: string) => {
    window.sessionStorage.setItem('blogid', blogid)
    navigate('/read/' + blogslug)
    window.scrollTo(0, 0)
  }
  return (
    <Fragment>
      <div className="blgHighlights">
        <div className="blghlgContainer">
          <div className="blghlgWrapper">
            <div className="blghlgTop">
              <h1 className="blghlgTitle">Stay connected with us</h1>
              <ArrowRight className="blgHighArrRight" />
            </div>
            <div className="blghlgBtm">
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
                    return (
                      <div
                        className="blghlgCardItem"
                        onClick={() => {
                          handleBlogRed(i.BlogID, i.BlogSlug)
                        }}
                        key={i.BlogID}
                      >
                        <div className="blghlgCardItemTop">
                          {placeholder ? (
                            <img src={PlaceHolder} alt="" />
                          ) : JSON.parse(i.PreviewImage).assets.length !== 0 &&
                            previmage ? (
                            <img
                              id="blgImage"
                              src={backend() + 'uploads/' + previmage}
                              onError={() => {
                                setPlaceholder(true)
                              }}
                              alt=""
                            />
                          ) : (
                            <img src={PlaceHolder} alt="" />
                          )}
                        </div>
                        <div className="blghlgCardItemBtm">
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
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BlogHighlights
