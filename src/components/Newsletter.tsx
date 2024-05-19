import React, { useState } from 'react'
import '../styles/css/newsletter.css'
import api from '../api/axios'
import { Store } from 'react-notifications-component'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isloading, setIsLoading] = useState(false)

  const subscribe = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await api('POST', 'subscribe', { email })
    if (res.status === 200) {
      setIsLoading(false)
      Store.addNotification({
        title: 'Subscribed Successfully!',
        message: res.data.message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      })
    } else {
      setIsLoading(false)
      Store.addNotification({
        title: 'Subscription Error!',
        message: res.data.message,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      })
    }
  }
  return (
    <>
      <section className="secNewsletter" id="newsletter">
        <div className="newsletter">
          <div className="newslettercontainer">
            <div className="subnewsletter">
              <div className="subnewsFlex">
                <div className="subNewstexts">
                  <h3 className="subNewstitle">Subscribe to our newsletter</h3>
                  <p className="subNewsTextsp">
                    stay upto date with our latest blogs and news updates
                  </p>
                </div>
                <div className="subnewsform">
                  <form
                    className="subNewsFormf"
                    onSubmit={(e) => {
                      subscribe(e)
                    }}
                  >
                    <div className="subinputsFlex">
                      <input
                        type="text"
                        className="subnewsinput"
                        placeholder="your e-mail address"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                      <button type="submit" className="subnewsButton">
                        {isloading ? (
                          <div
                            className="loadingAnim"
                            style={{ width: '67px' }}
                          >
                            <div className="lds-ellipsis dot-flashing">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        ) : (
                          'subscribe'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
