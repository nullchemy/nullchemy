import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/read.css'
import Header from '../components/Header'
import agility from '../assets/images/agility.png'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import Footer from '../components/Footer'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

const Read = () => {
  let navigate = useNavigate()
  const [blog, setBlog] = useState({
    Author: '',
    BlogID: '',
    Content: '',
    ID: 1,
    ReadLength: 5,
    TimeStamp: '',
    Title: '',
  })
  const blogid = window.sessionStorage.getItem('blogid')
  console.log(blogid)
  useEffect(() => {
    const fetchBlog = async () => {
      if (blogid !== '' || blogid !== undefined) {
        const res = await api('POST', 'blog/get', {
          blogid: blogid,
        })
        setBlog(res.data.data)
      } else {
        navigate('/blogs')
      }
    }
    fetchBlog()
  }, [blogid, navigate])
  return (
    <Fragment>
      <Header />
      <div className="read">
        <div className="readContainer">
          <div className="readWrapper">
            <div className="readSidebarLeft"></div>
            {blog.BlogID === '' ? (
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
                  <span>{blog.Title}</span>
                </div>
                <h1 className="readtitle">{blog.Title}</h1>
                <div className="readImageContainer">
                  <img className="readImage" src={agility} alt="" />
                </div>
                <div
                  className="readContentInner"
                  dangerouslySetInnerHTML={{ __html: blog.Content }}
                ></div>
              </div>
            )}
            <div className="readSidebarRight"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Read
