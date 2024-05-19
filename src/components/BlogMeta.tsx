import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'

interface props {
  blog: Array<{ title: string; summary: string }>
  error: boolean
}

const BlogMeta = ({ blog, error }: props) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          {!error && blog.length !== 0 ? blog[0].title : 'Blog'} | nullchemy
        </title>
        <link
          rel="canonical"
          href={
            window.location.href +
            window.location.pathname +
            window.location.search
          }
        />

        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>

        <meta name="keywords" content="nullchemy, Dennis Kibet" />
        <meta
          name="description"
          content="at nullchemy, we turn your business dreams into a digital reality, creating everything from cool apps to mind-blowing AI solutions. Our top-notch team manages it all while providing expert guidance."
        />
        <meta
          name="subject"
          content="transforming ideas into a digital reality"
        />
        <meta name="copyright" content="nullchemy" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index, follow" />
        <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
        <meta name="abstract" content="" />
        <meta
          name="topic"
          content={
            !error && blog.length !== 0
              ? blog[0].title + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta
          name="summary"
          content={
            !error && blog.length !== 0
              ? blog[0].summary + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta name="Classification" content="IT, technology, Business" />
        <meta name="author" content="Dennis kibet, dennisrkibet@gmail.com" />
        <meta name="designer" content="Dennis Kibet" />
        <meta name="reply-to" content="dennisrkibet@gmail.com" />
        <meta name="owner" content="Dennis Kibet" />
        <meta name="url" content="https://nullchemy.com" />
        <meta name="identifier-URL" content="https://nullchemy.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="IT, Technology, Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache" />

        <meta name="robots" content="index" />
        <link rel="author" href="humans.txt" />

        <meta
          property="og:url"
          content={
            window.location.href +
            window.location.pathname +
            window.location.search
          }
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content={
            !error && blog.length !== 0
              ? blog[0].title + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta
          property="og:description"
          content={
            !error && blog.length !== 0
              ? blog[0].summary + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta property="og:image" content={PlaceHolder} />

        <meta
          name="twitter:card"
          content={
            !error && blog.length !== 0
              ? blog[0].summary + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta
          name="twitter:url"
          content={
            window.location.href +
            window.location.pathname +
            window.location.search
          }
        />
        <meta
          name="twitter:title"
          content={
            !error && blog.length !== 0
              ? blog[0].title + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
        <meta
          name="twitter:description"
          content={
            !error && blog.length !== 0
              ? blog[0].summary + '| nullchemy'
              : 'Blog | nullchemy'
          }
        />
      </Helmet>
    </Fragment>
  )
}

export default BlogMeta
