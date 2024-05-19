import React, { Fragment, useEffect, useState } from 'react'
import '../styles/css/read.css'
import Header from '../components/Header'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg'
import Footer from '../components/Footer'
import api from '../api/axios'
import { AxiosError } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import ReactGA from 'react-ga'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import Comments from '../components/Comments'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodeCopyBtn from '../components/codeCopyBtn'
import BlogMeta from '../components/BlogMeta'
import { toast } from 'react-toastify'

const Read = () => {
  let navigate = useNavigate()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const { slug } = useParams()
  const [blog, setBlog] = useState<any[]>([])
  const [error, setError] = useState(false)

  function replaceWithPlaceholder(): void {
    const image = document.getElementById('blgImage') as HTMLImageElement
    //image.src = backend() + 'nullchemy_placeholder.jpg'
    image.src = PlaceHolder
    image.onerror = null // To prevent an infinite loop in case the placeholder image is also missing
  }

  useEffect(() => {
    let retryCount = 0
    const maxRetries = 3
    const fetchBlog = async () => {
      try {
        const res = await api('GET', `blog/get/${slug}`, {})
        console.log(res)
        if (res.status === 200) {
          setBlog([...blog, res.data.data])
        } else {
          toast('Error fetching the blog', { type: 'error' })
        }
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
  }, [navigate, slug])

  const Pre = ({ children }: any) => (
    <pre className="blog-pre">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  )

  function CustomHeadingRenderer(props: any) {
    const children = React.Children.toArray(props.children)
    const text: any = children.reduce((acc, child) => {
      return typeof child === 'string' ? acc + child : acc
    }, '')

    const slug = text.toLowerCase().replace(/\W/g, '-')

    return React.createElement(
      `h${props.level}`,
      { id: slug, className: 'your-heading-class' },
      props.children
    )
  }

  function scrollWithOffset(event: any, id: string) {
    event.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const yCoordinate = target.getBoundingClientRect().top + window.scrollY
      const yOffset = -100
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }
  }

  return (
    <Fragment>
      <BlogMeta blog={blog} error={error} />
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
                  <span>{blog[0].title}</span>
                </div>
                <h1 className="readtitle">{blog[0].title}</h1>
                <div className="readImageContainer">
                  <img
                    id="blgImage"
                    className="readImage"
                    src={
                      blog[0].assets.length !== 0 &&
                      Array.isArray(blog[0].assets)
                        ? blog[0].assets[0]
                        : PlaceHolder
                    }
                    onError={replaceWithPlaceholder}
                    alt=""
                  />
                </div>
                <div className="readblgcontmd readContentInner">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      pre: Pre,
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, '')}
                            style={dracula}
                            language={match[1]}
                            PreTag="div"
                          />
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        )
                      },
                      h1: CustomHeadingRenderer,
                      h2: CustomHeadingRenderer,
                      h3: CustomHeadingRenderer,
                      h4: CustomHeadingRenderer,
                    }}
                  >
                    {blog[0].content === '' ? 'loading' : blog[0].content}
                  </ReactMarkdown>
                </div>
                <div className="r_blg_body_comments">
                  <Comments />
                </div>
              </div>
            )}
            <div className="readSidebarRight">
              <div className="ritemsStick">
                <div className="readTableofContents">
                  <h2>Table of contents</h2>
                  <ul>
                    {Array.isArray(blog) &&
                      blog.length !== 0 &&
                      Array.isArray(blog[0].toc) &&
                      blog[0].toc.map((item: any) => {
                        return (
                          <li key={item.id}>
                            <a
                              href={`#${item.title
                                .toLowerCase()
                                .replace(/\W/g, '-')}`}
                              onClick={(e) => {
                                scrollWithOffset(
                                  e,
                                  item.title.toLowerCase().replace(/\W/g, '-')
                                )
                              }}
                            >
                              {item.title}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                  {/* <div dangerouslySetInnerHTML={{ __html: tocLinks }}></div> */}
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
