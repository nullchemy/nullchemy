import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/read.css'
import Header from '../components/Header'
import agility from '../assets/images/agility.png'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg'
import Footer from '../components/Footer'
import api from '../api/axios'
import { AxiosError } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

const Read = () => {
  let navigate = useNavigate()
  const { slug } = useParams()
  const [blog, setBlog] = useState<any[]>([])
  const [error, setError] = useState(false)
  const blogid = window.sessionStorage.getItem('blogid')
  useEffect(() => {
    let retryCount = 0
    const maxRetries = 3
    const fetchBlog = async () => {
      try {
        const res = await api('POST', 'blog/get', {
          slug: slug,
          blogid: blogid,
        })
        setBlog([...blog, res.data.data])
      } catch (error) {
        const axiosError = error as AxiosError
        if (axiosError.code === 'ECONNABORTED') {
          // Request timed out
          if (retryCount < maxRetries) {
            // Retry the request
            retryCount++
            setTimeout(fetchBlog, 3000) // Retry after 3 seconds
          } else {
            // Maximum retries reached
            setError(true)
          }
        } else {
          // Other error occurred
          setError(true)
        }
      }
    }
    fetchBlog()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogid, navigate, slug])
  return (
    <Fragment>
      <Header />
      <div className="read">
        <div className="readContainer">
          <div className="readWrapper">
            {error ? (
              <div className="errCouldnotFetchBlog">
                <p>Could not fetch blog!</p>
              </div>
            ) : blog.length === 0 ? (
              <div className="readContent">
                <div className="loadingAnim">
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="readContent">
                <div className="readBreadCrumb">
                  <span>Home</span>
                  <ArrowRight className="arrowright" />
                  <span>Blog</span>
                  <ArrowRight className="arrowright" />
                  <span>{blog[0].Title}</span>
                </div>
                <h1 className="readtitle">{blog[0].Title}</h1>
                <div className="readImageContainer">
                  <img className="readImage" src={agility} alt="" />
                </div>
                <div
                  className="readContentInner"
                  dangerouslySetInnerHTML={{ __html: blog[0].Content }}
                ></div>
              </div>
            )}
            <div className="readSidebarRight">
              <div className="ritemsStick">
                <div className="readTableofContents">
                  <h2>Table of contents</h2>
                  <ul>
                    <li>
                      <a href="#t">What is Angular?</a>
                    </li>
                    <li>
                      <a href="#t">Advantages of Angular</a>
                    </li>
                    <li>
                      <a href="#t">What is React?</a>
                    </li>
                    <li>
                      <a href="#t">Advantages of React</a>
                    </li>
                    <li>
                      <a href="#t">Angular vs React: A quick comparison</a>
                    </li>
                    <li>
                      <a href="#t">Detailed Comparison: React vs Angular</a>
                    </li>
                    <li>
                      <a href="#t">Angular vs. React: When to choose which?</a>
                    </li>
                  </ul>
                </div>
                <div className="readSocialIcons">
                  <a
                    href="https://web.facebook.com/profile.php?id=100066602095876"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="rsocIc" />
                  </a>
                  <a
                    href="https://twitter.com/nullchemy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="rsocIc" />
                  </a>
                  <a
                    href="https://www.instagram.com/_nullchemy_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="rsocIc" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Read
