import React, { Fragment, useEffect } from 'react'
import ReactGA from 'react-ga'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Playarea from '../components/Playarea'
import { Helmet } from 'react-helmet'

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Workspace | nullchemy</title>
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
      <div className="wsHome">
        <Layout
          children={{
            header: <Header />,
            sidebar: <Sidebar />,
            playarea: <Playarea />,
          }}
        />
      </div>
    </Fragment>
  )
}

export default Home
