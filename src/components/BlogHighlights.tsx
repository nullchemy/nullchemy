import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/bloghighlights.css'
import ScrollReveal from 'scrollreveal'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'

const BlogHighlights = () => {
  ScrollReveal().reveal('.blghlgCardItem', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
  })
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
        console.log(res.data)
      } else {
        setBlogs({ data: [], state: 'error' })
      }
    }
    fetchBlog()
  }, [])

  const backend = (): string => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return 'http://localhost:8000/'
    } else {
      return 'https://nullchemy-api.onrender.com/'
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
              <h1 className="blghlgTitle">Highlights from our Blog</h1>
              <ArrowRight className="blgHighArrRight" />
            </div>
            <div className="blghlgBtm">
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
                  <p>Something Wrong Happened!</p>
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
