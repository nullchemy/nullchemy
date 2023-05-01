import React from 'react'
import '../styles/css/newsletter.css'

const Newsletter = () => {
  return (
    <>
      <section className="secNewsletter" id="newsletter">
        <div className="newsletter">
          <div className="newslettercontainer">
            <div className="subnewsletter">
              <div className="subnewsFlex">
                <div className="subNewstexts">
                  <h3 className="subNewstitle">Subscribe to my newsletter</h3>
                  <p className="subNewsTextsp">
                    stay upto date with my latest blogs and news updates
                  </p>
                </div>
                <div className="subnewsform">
                  <form action="" className="subNewsFormf">
                    <div className="subinputsFlex">
                      <input
                        type="text"
                        className="subnewsinput"
                        placeholder="your e-mail address"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="subnewsButton"
                      />
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
