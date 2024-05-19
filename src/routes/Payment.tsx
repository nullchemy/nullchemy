import React, { Fragment } from 'react'
import '../styles/css/paymentMethods.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Payment = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Payment Methods | nullchemy</title>
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
      <div className="payment">
        <div className="paymentContainer">
          <div className="paymentWrapper">
            <h1 className="paymentTitle">Our Payment Methods</h1>
            <div className="paymentContent">
              <div className="paymentMethod" id="cash">
                <h1>Cash Payment</h1>
                <p className="payment_method_expl">
                  At checkout, select the "Cash Payment" option, and you can
                  settle your payment in cash upon receiving your order. Our
                  delivery team will collect the payment when they hand over
                  your items at your doorstep. This method is ideal for those
                  who prefer the security of inspecting their purchase before
                  payment, making it a reliable and straightforward choice.
                </p>
              </div>
              <div className="paymentMethod" id="visa">
                <h1>Visa Payment</h1>
                <p className="payment_method_expl">
                  Conveniently pay for your purchases using your Visa credit or
                  debit card. During the checkout process, input your card
                  details, and our secure payment gateway will process the
                  transaction. Visa cards are globally recognized, offering you
                  a wide range of payment options, including credit rewards and
                  cashback benefits.
                </p>
                <p className="payment_method_expl">
                  <h2>Steps to Pay using a Visa Card</h2>
                  <br />
                  <ul>
                    <li>
                      <span>1. </span>Checkout: Click on the "Checkout" or
                      "Proceed to Checkout" button. This will take you to the
                      checkout page where you'll provide your shipping and
                      billing information.
                    </li>
                    <li>
                      <span>2. </span>Shipping Information: Enter your shipping
                      address, including your name, shipping address, and
                      contact information. Ensure that the shipping details are
                      accurate, as this is where your order will be delivered.
                    </li>
                    <li>
                      <span>3. </span>Billing Information: Select Visa card as
                      your payment method. You'll then be prompted to enter your
                      billing information, which includes your name as it
                      appears on the card, the Visa card number, the expiration
                      date, and the CVV (Card Verification Value) code,
                      typically located on the back of the card.
                    </li>
                    <li>
                      <span>4. </span>Review Order: Before finalizing the
                      payment, review your order one more time to make sure that
                      the items, quantities, and prices are correct.
                    </li>
                    <li>
                      <span>5. </span>Promo Codes or Discounts: If you have a
                      promo code or discount, there may be a field to enter it
                      at this stage to apply any applicable savings.
                    </li>
                    <li>
                      <span>6. </span>Place Order: Click the "Place Order" or
                      "Pay Now" button to initiate the payment process. Your
                      Visa card will be charged for the total order amount.
                    </li>
                    <li>
                      <span>7. </span>Authentication: Depending on the website
                      and your bank's security measures, you may be asked to
                      enter a one-time code sent to your mobile phone or email
                      for additional security.
                    </li>
                    <li>
                      <span>8. </span>Authentication: Depending on the website
                      and your bank's security measures, you may be asked to
                      enter a one-time code sent to your mobile phone or email
                      for additional security.
                    </li>
                    <li>
                      <span>9. </span>Confirmation: Once the payment is
                      successfully processed, you'll receive an order
                      confirmation page. You should also receive an email
                      confirmation with details of your order.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="paymentMethod" id="m-pesa">
                <h1>M-Pesa Payment</h1>
                <p className="payment_method_expl">
                  If you're located in a region where M-Pesa is accessible,
                  select this payment method. You'll be directed to the M-Pesa
                  platform, where you can finalize your payment via your mobile
                  phone and a registered M-Pesa account. This method is
                  particularly popular for its ease of use and is an excellent
                  choice for customers without traditional bank accounts.
                </p>
              </div>
              <div className="paymentMethod" id="master-card">
                <h1>Master Card Payment</h1>
                <p className="payment_method_expl">
                  Securely and seamlessly complete your online transactions
                  using your MasterCard credit or debit card. Provide your card
                  information during checkout, and our trusted payment gateway
                  will ensure your payment is processed smoothly. MasterCard is
                  recognized globally, offering security features and potential
                  card-specific advantages.
                </p>
              </div>
              <div className="paymentMethod" id="gift-card">
                <h1>Gift Card Payment</h1>
                <p className="payment_method_expl">
                  If you have a gift card, redeem it by entering the card
                  details or codes during the checkout process. Our website will
                  validate and deduct the purchase amount from your gift card's
                  balance, allowing you to take advantage of your chosen
                  products or services without any complications. Gift cards are
                  a convenient and versatile payment option, making them perfect
                  for recipients of gift cards and rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Payment
