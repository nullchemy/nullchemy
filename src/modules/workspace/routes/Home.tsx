import React, { Fragment, useEffect } from 'react'
import ReactGA from 'react-ga'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Playarea from '../components/Playarea'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <div className="wsHome">
        <Layout
          children={{
            header: <Header />,
            sidebar: <Sidebar />,
            playarea: <Playarea />,
            footer: <Footer />,
          }}
        />
      </div>
    </Fragment>
  )
}

export default Home
