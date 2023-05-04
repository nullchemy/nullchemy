import React, { Fragment, useState } from 'react'
import '../styles/css/footer.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Language } from '../assets/svg/language.svg'
import { ReactComponent as Dollar } from '../assets/svg/dollar.svg'
import { ReactComponent as Globe } from '../assets/svg/globe.svg'
import { ReactComponent as PaymentOnDelivery } from '../assets/svg/payment-delivery.svg'
import { ReactComponent as Visa } from '../assets/svg/visa.svg'
import { ReactComponent as Mpesa } from '../assets/svg/mpesa.svg'
import { ReactComponent as MasterCard } from '../assets/svg/mastercard.svg'
import { ReactComponent as AngleDown } from '../assets/svg/angle-down.svg'

const Footer = () => {
  const [fsubdrop, setFsubdrop] = useState('')

  return (
    <Fragment>
      <div className={fsubdrop !== '' ? 'footer fbtmcystomize' : 'footer'}>
        <div
          className="fBackToTop"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <p>back to top</p>
        </div>
        <div className="fontainer">
          <div className="fmiddle">
            <div className="fmidWrapper">
              <div className="fnavigation">
                <div
                  className="fnavTitle"
                  onClick={() => {
                    setFsubdrop(fsubdrop === 'help' ? '' : 'help')
                  }}
                >
                  <h2>let us help you</h2>
                  <AngleDown className="ftrangledown" />
                </div>
                <ul className={fsubdrop === 'help' ? 'fnav' : 'fnav fnavhide'}>
                  <li className="fnavLink">
                    <Link to="/help-center" className="fnavLnk">
                      Help Center
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/contact-us" className="fnavLnk">
                      Contact Us
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/shipping-and-delivery" className="fnavLnk">
                      Deployment and Launch
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/return-policy" className="fnavLnk">
                      Refund Policy
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/dispute-resoution-center" className="fnavLnk">
                      Dispute Resolution Center
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/report-product" className="fnavLnk">
                      Report a Product/service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fnavigation">
                <div
                  className="fnavTitle"
                  onClick={() => {
                    setFsubdrop(fsubdrop === 'company' ? '' : 'company')
                  }}
                >
                  <h2>company</h2>
                  <AngleDown className="ftrangledown" />
                </div>
                <ul
                  className={fsubdrop === 'company' ? 'fnav' : 'fnav fnavhide'}
                >
                  <li className="fnavLink">
                    <Link to="/about-us" className="fnavLnk">
                      About Us
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/blog" className="fnavLnk">
                      Blog
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/careers" className="fnavLnk">
                      Careers
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/terms-and-conditions" className="fnavLnk">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/privacy-policy" className="fnavLnk">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/cookie-policy" className="fnavLnk">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fnavigation">
                <div
                  className="fnavTitle"
                  onClick={() => {
                    setFsubdrop(fsubdrop === 'money' ? '' : 'money')
                  }}
                >
                  <h2>Quick links</h2>
                  <AngleDown className="ftrangledown" />
                </div>
                <ul className={fsubdrop === 'money' ? 'fnav' : 'fnav fnavhide'}>
                  <li className="fnavLink">
                    <Link to="/sell" className="fnavLnk">
                      Web Design & Development
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/advertise-with-us" className="fnavLnk">
                      Mobile Application Development
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/feedback" className="fnavLnk">
                      Desktop Application Development
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/feedback" className="fnavLnk">
                      API dev
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/feedback" className="fnavLnk">
                      Graphic Design
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fnavigation">
                <div
                  className="fnavTitle"
                  onClick={() => {
                    setFsubdrop(fsubdrop === 'payment' ? '' : 'payment')
                  }}
                >
                  <h2>Get in Touch</h2>
                  <AngleDown className="ftrangledown" />
                </div>
                <ul
                  className={fsubdrop === 'payment' ? 'fnav' : 'fnav fnavhide'}
                >
                  <li className="fnavLink">
                    <Link to="/gift-cards" className="fnavLnk">
                      1st Floor, nullchemy building, <br />
                      Parklands Road, <br />
                      P.O Box 10065 - 00400, Nairobi.
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/vouchers-and-promotions" className="fnavLnk">
                      +254798116710
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/my-points" className="fnavLnk">
                      contact@nullchemy.com
                    </Link>
                  </li>
                  <li className="fnavLink">
                    <Link to="/currency-converter" className="fnavLnk">
                      Currency Coverter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fcenter">
            <div className="paymentMethods">
              <h2>our payment methods</h2>
              <div className="paymentMethods">
                <Link to="/payment" className="lnktoDeliv">
                  <PaymentOnDelivery className="PaymentOnDelivery" />
                </Link>
                <Link to="/payment" className="lnktoDeliv">
                  <Visa className="PaymentOnDelivery visa" />
                </Link>
                <Link to="/payment" className="lnktoDeliv">
                  <Mpesa className="PaymentOnDelivery mpesaIc" />
                </Link>
                <Link to="/payment" className="lnktoDeliv">
                  <MasterCard className="PaymentOnDelivery mastercardIc" />
                </Link>
              </div>
            </div>
            <div className="fnewsletter">
              <h2>subcribe to our newsletter</h2>
              <p>stay up to date with latest offers and insights</p>
              <form className="fnewsletterform">
                <div className="subformgroup">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                  <button className="fsubbtn">subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="fBottom">
          <div className="fBrand">
            <h3>
              &copy; {new Date().getFullYear()} nullchemy Inc. All rights
              reserved
            </h3>
          </div>
          <div className="flanguage">
            <Language className="fLangIc" />
            <p>English</p>
          </div>
          <div className="fCurrency">
            <Dollar className="fLangIc" />
            <p>Ksh</p>
          </div>
          <div className="fcountry">
            <Globe className="fLangIc" />
            <p>Kenya</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
