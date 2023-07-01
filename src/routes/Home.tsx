import React, { Fragment, useEffect } from 'react'
import { setIsLogged } from '../state/actions/loggedAction'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import WhatWeDo from '../components/WhatWeDo'
import HowWeGetItDone from '../components/HowWeGetItDone'
import session from '../utils/session'
import api from '../api/axios'
import { useAppDispatch } from '../state/hooks'
import OurPrinciples from '../components/OurPrinciples'

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log('ran')

    const checkauth = async () => {
      if (!session.get().authToken || session.get().authToken === undefined) {
        // No token found, redirect to login page
        console.log('not logged in (token not found)')
        dispatch(setIsLogged(false))
      } else {
        const token = session.get().authToken
        const res = await api('POST', 'auth/verify', { token })
        if (res.data.type === 'success') {
          console.log('authenticated successfully')
          dispatch(setIsLogged(true))
        } else {
          console.log(res.data, token)
        }
      }
    }
    checkauth()
  }, [dispatch])
  return (
    <Fragment>
      <div className="homepage">
        <Landing />
      </div>
      <WhatWeDo />
      <OurPrinciples />
      <HowWeGetItDone />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Home
