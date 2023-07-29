import React, { Fragment } from 'react'
import Home from '../modules/workspace/routes/Home'
import { Helmet } from 'react-helmet'

const ClientDashboard: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>workspace | nullchemy</title>
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
      <Home />
    </Fragment>
  )
}

export default ClientDashboard
