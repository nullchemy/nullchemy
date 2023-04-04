import React, { Fragment, useState } from 'react'
import '../styles/css/footer.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Language} from '../assets/svg/language.svg'
import {ReactComponent as Dollar} from '../assets/svg/dollar.svg'
import {ReactComponent as Globe} from '../assets/svg/globe.svg'
import {ReactComponent as PaymentOnDelivery} from '../assets/svg/payment-delivery.svg'
import {ReactComponent as Visa} from '../assets/svg/visa.svg'
import {ReactComponent as Mpesa} from '../assets/svg/mpesa.svg'
import {ReactComponent as MasterCard} from '../assets/svg/mastercard.svg'
import {ReactComponent as AngleDown} from '../assets/svg/angle-down.svg'

const Footer = () => {
  const [fsubdrop, setFsubdrop] = useState('')

  return (
    <Fragment>
        <div className={(fsubdrop!=='')?"footer fbtmcystomize":"footer"}>
          <div className="fBackToTop" onClick={()=>{window.scrollTo(0, 0)}}>
            <p>back to top</p>
          </div>
          <div className="fontainer">
            <div className="fmiddle">
              <div className="fmidWrapper">
                <div className="fnavigation">
                  <div className="fnavTitle" onClick={()=>{setFsubdrop((fsubdrop==='help')?'':'help')}}>
                    <h2>let us help you</h2>
                    <AngleDown className="ftrangledown"/>
                  </div>
                  <ul className={(fsubdrop==='help')?"fnav":"fnav fnavhide"}>
                    <li className="fnavLink">
                      <Link to="/help-center" className="fnavLnk">Help Center</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/contact-us" className="fnavLnk">Contact Us</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/shipping-and-delivery" className="fnavLnk">Shipping and Delivery</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/return-policy" className="fnavLnk">Return Policy</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/dispute-resoution-center" className="fnavLnk">Dispute Resolution Center</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/report-product" className="fnavLnk">Report a Product</Link>
                    </li>
                  </ul>
                </div>
                <div className="fnavigation">
                  <div className="fnavTitle" onClick={()=>{setFsubdrop((fsubdrop==='company')?'':'company')}}>
                    <h2>company</h2>
                    <AngleDown className="ftrangledown"/>
                  </div>
                  <ul className={(fsubdrop==='company')?"fnav":"fnav fnavhide"}>
                    <li className="fnavLink">
                      <Link to="/about-us" className="fnavLnk">About Us</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/blog" className="fnavLnk">Blog</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/careers" className="fnavLnk">Careers</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/terms-and-conditions" className="fnavLnk">Terms and Conditions</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/privacy-policy" className="fnavLnk">Privacy Policy</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/cookie-policy" className="fnavLnk">Cookie Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="fnavigation">
                  <div className="fnavTitle" onClick={()=>{setFsubdrop((fsubdrop==='money')?'':'money')}}>
                    <h2>make money with us</h2>
                    <AngleDown className="ftrangledown"/>
                  </div>
                  <ul className={(fsubdrop==='money')?"fnav":"fnav fnavhide"}>
                    <li className="fnavLink">
                      <Link to="/sell" className="fnavLnk">sell products with us</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/advertise-with-us" className="fnavLnk">Advertise your Products</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/feedback" className="fnavLnk">Share improvement ideas</Link>
                    </li>
                  </ul>
                </div>
                <div className="fnavigation">
                  <div className="fnavTitle" onClick={()=>{setFsubdrop((fsubdrop==='payment')?'':'payment')}}>
                    <h2>our payment products</h2>
                    <AngleDown className="ftrangledown"/>
                  </div>
                  <ul className={(fsubdrop==='payment')?"fnav":"fnav fnavhide"}>
                    <li className="fnavLink">
                      <Link to="/gift-cards" className="fnavLnk">Gift Cards</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/vouchers-and-promotions" className="fnavLnk">Vouchers and Promo Codes</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/my-points" className="fnavLnk">Shop with Points</Link>
                    </li>
                    <li className="fnavLink">
                      <Link to="/currency-converter" className="fnavLnk">Currency Coverter</Link>
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
                    <input type="email" placeholder="Email address" name="email" />
                    <button className="fsubbtn">subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
            <div className="fBottom">
              <div className="fBrand">
                <h3>nullchemy</h3>
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