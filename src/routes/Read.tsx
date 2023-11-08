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
import { Helmet } from 'react-helmet'
import PlaceHolder from '../assets/images/nullchemy_placeholder.jpg'
import Comments from '../components/Comments'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodeCopyBtn from '../components/codeCopyBtn'
import { backend } from '../utils/backend'

const Read = () => {
  let navigate = useNavigate()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const { slug } = useParams()
  const [blog, setBlog] = useState<any[]>([])
  const [error, setError] = useState(false)
  const blogid = window.sessionStorage.getItem('blogid')

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
  const imageFormats: string[] = ['.png', '.jpg', '.jpeg', '.gif']
  const previmage: string | undefined =
    blog.length !== 0
      ? JSON.parse(blog[0].PreviewImage).assets.find((element: string) => {
          return imageFormats.some((format: string) => element.endsWith(format))
        })
      : ''

  // toc
  const [tocLinks, setTocLinks] = useState<any>(null)
  function generateLinkMarkup(contentElement: any) {
    const headings = [
      ...contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6'),
    ]
    const parsedHeadings = headings.map((heading) => {
      return {
        title: heading.innerText,
        depth: heading.nodeName.replace(/\D/g, ''),
        id: heading.getAttribute('id'),
      }
    })
    const htmlMarkup = parsedHeadings.map(
      (h) => `
        <li class="${h.depth > 1 ? 'pl-4' : ''}">
          <a href="#${h.id}"  onclick="scrollWithOffset(event, '${h.id}')">${
        h.title
      }</a>
        </li>
      `
    )
    const finalMarkup = `<ul>${htmlMarkup.join('')}</ul>`
    return finalMarkup
  }

  async function init() {
    const main = document.querySelector('.readContentInner')
    const linkHtml = generateLinkMarkup(main)
    console.log(linkHtml)
    setTocLinks(linkHtml)
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog])

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

  return (
    <Fragment>
      <Helmet>
        <title>
          {!error && blog.length !== 0 ? blog[0].Title : 'Blog'} | nullchemy
        </title>
        <link
          rel="canonical"
          href={window.location.pathname + window.location.search}
        />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'G-JXF0YL9XMJ');
        </script>
      </Helmet>
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
                  {blog.length !== 0 ? (
                    JSON.parse(blog[0].PreviewImage).assets.length !== 0 &&
                    previmage ? (
                      <img
                        id="blgImage"
                        className="readImage"
                        src={backend() + 'uploads/' + previmage}
                        onError={replaceWithPlaceholder}
                        alt=""
                      />
                    ) : null
                  ) : null}
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
                    {blog[0].Content === '' ? 'loading' : blog[0].Content}
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
                  <div dangerouslySetInnerHTML={{ __html: tocLinks }}></div>
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
