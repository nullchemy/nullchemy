import React, { Fragment, useEffect } from 'react'
import '../styles/css/terms.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

const Terms = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>Terms and Conditions | nullchemy</title>
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
      <div className="content-terms">
        <div className="terms">
          <h1 className="title">Privacy policy</h1>
          <p>
            Your privacy is important to us. It is nullchemy's policy to respect
            your privacy and comply with any applicable law and regulation
            regarding any personal information we may collect about you,
            including across our website, https://nullchemy.com, and other sites
            we own and operate.
          </p>
          <p>
            This policy is effective as of 6 May 2023 and was last updated on 6
            May 2023.
          </p>
          <h2 className="title">Information We Collect</h2>
          <p>
            When you visit the Site, I automatically collect certain information
            about your device, including information about your web browser, IP
            address, time zone, and some of the cookies that are installed on
            your device. Additionally, as you browse the Site, I collect
            information about the individual web pages or products that you
            view, what websites or search terms referred you to the Site, and
            information about how you interact with the Site. I refer to this
            automatically-collected information as “Device Information.”
            <br />
            I collect Device Information using the following technologies:
            <br />- <strong>“Cookies”</strong> are data files that are placed on
            your device or computer and often include an anonymous unique
            identifier. For more information about cookies, and how to disable
            cookies, visit http://www.allaboutcookies.org.
            <br />- <strong>Log Data</strong> When you visit our website, our
            servers may automatically log the standard data provided by your web
            browser. It may include your device’s Internet Protocol (IP)
            address, your browser type and version, the pages you visit, the
            time and date of your visit, the time spent on each page, other
            details about your visit, and technical details that occur in
            conjunction with any errors you may encounter. <br />-{' '}
            <strong>“Web beacons,” “tags,” and “pixels”</strong> are electronic
            files used to record information about how you browse the Site.
            <br />
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, I collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers), email address, and phone number. I
            refer to this information as “Order Information.”
            <br />
            When I talk about “Personal Information” in this Privacy Policy, I
            am talking both about Device Information and Order Information.
            <br />
          </p>
          <p>
            Please be aware that while this information may not be personally
            identifying by itself, it may be possible to combine it with other
            data to personally identify individual persons.
          </p>
          <h1 className="title">how do we use your personal information?</h1>
          <p>
            I use the Order Information that I collect generally to fulfill any
            orders placed through the Site (including processing your payment
            information, arranging for shipping, and providing you with invoices
            and/or order confirmations). Additionally, I use this Order
            Information to:
            <br />
            Communicate with you;
            <br />
            Screen my orders for potential risk or fraud; and
            <br />
            When in line with the preferences you have shared with me, provide
            you with information or advertising relating to my products or
            services.
            <br />
            I use the Device Information that I collect to help me screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize my Site (for example, by
            generating analytics about how my customers browse and interact with
            the Site, and to assess the success of my marketing and advertising
            campaigns).
            <br />
          </p>
          <h1 className="title">
            Legitimate Reasons for Processing Your Personal Information
          </h1>
          <p>
            We only collect and use your personal information when we have a
            legitimate reason for doing so. In which instance, we only collect
            personal information that is reasonably necessary to provide our
            services to you.
          </p>
          <h1 className="title">sharing your personal information</h1>
          <p>
            I share your Personal Information with third parties to help me use
            your Personal Information, as described above. For example, I use
            Google Analytics to help me understand how my customers use the
            Site--you can read more about how Google uses your Personal
            Information here: https://www.google.com/intl/en/policies/privacy/.
            You can also opt-out of Google Analytics here:
            https://tools.google.com/dlpage/gaoptout.
            <br />
            Finally, I may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information I receive, or to
            otherwise protect my rights.
            <br />
          </p>
          <h1 className="title">behavioural advertising</h1>
          <p>
            As described above, I use your Personal Information to provide you
            with targeted advertisements or marketing communications I believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative’s (“NAI”) educational page at
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            <br />
            You can opt out of targeted advertising by:
            <br />
            FACEBOOK - https://www.facebook.com/settings/?tab=ads
            <br />
            GOOGLE - https://www.google.com/settings/ads/anonymous
            <br />
            BING -
            https://advertise.bingads.microsoft.com/en-me/resources/policies/personalized-ads
            <br />
            Additionally, you can opt out of some of these services by visiting
            the Digital Advertising Alliance’s opt-out portal at:
            http://optout.aboutads.info/.
            <br />
          </p>
          <h1 className="title">Security of Your Personal Information</h1>
          <p>
            When we collect and process personal information, and while we
            retain this information, we will protect it within commercially
            acceptable means to prevent loss and theft, as well as unauthorized
            access, disclosure, copying, use, or modification.
            <br />
            Although we will do our best to protect the personal information you
            provide to us, we advise that no method of electronic transmission
            or storage is 100% secure, and no one can guarantee absolute data
            security. We will comply with laws applicable to us in respect of
            any data breach.
            <br />
            You are responsible for selecting any password and its overall
            security strength, ensuring the security of your own information
            within the bounds of our services.
          </p>
          <h1 className="title">do not track</h1>
          <p>
            Please note that I do not alter my Site’s data collection and use
            practices when I see a Do Not Track signal from your browser.
            <br />
          </p>
          <h1 className="title">your rights</h1>
          <p>
            If you are a European resident, you have the right to access
            personal information I hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact me through the contact
            information below.
            <br />
            Additionally, if you are a European resident I note that I am
            processing your information in order to fulfill contracts I might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue my legitimate business interests listed
            above. Additionally, please note that your information will be
            transferred outside of Europe, including to Canada and the United
            States.
            <br />
            The personal information we collect is stored and/or processed where
            we or our partners, affiliates, and third-party providers maintain
            facilities. Please be aware that the locations to which we store,
            process, or transfer your personal information may not have the same
            data protection laws as the country in which you initially provided
            the information. If we transfer your personal information to third
            parties in other countries: (i) we will perform those transfers in
            accordance with the requirements of applicable law; and (ii) we will
            protect the transferred personal information in accordance with this
            privacy policy.
            <br />
            <strong>
              Your Rights and Controlling Your Personal Information
            </strong>
            <br />
            You always retain the right to withhold personal information from
            us, with the understanding that your experience of our website may
            be affected. We will not discriminate against you for exercising any
            of your rights over your personal information. If you do provide us
            with personal information you understand that we will collect, hold,
            use and disclose it in accordance with this privacy policy. You
            retain the right to request details of any personal information we
            hold about you.
            <br />
            If we receive personal information about you from a third party, we
            will protect it as set out in this privacy policy. If you are a
            third party providing personal information about somebody else, you
            represent and warrant that you have such person’s consent to provide
            the personal information to us.
            <br />
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time.
            We will provide you with the ability to unsubscribe from our
            email-database or opt out of communications. Please be aware we may
            need to request specific information from you to help us confirm
            your identity.
            <br />
            If you believe that any information we hold about you is inaccurate,
            out of date, incomplete, irrelevant, or misleading, please contact
            us using the details provided in this privacy policy. We will take
            reasonable steps to correct any information found to be inaccurate,
            incomplete, misleading, or out of date.
            <br />
            If you believe that we have breached a relevant data protection law
            and wish to make a complaint, please contact us using the details
            below and provide us with full details of the alleged breach. We
            will promptly investigate your complaint and respond to you, in
            writing, setting out the outcome of our investigation and the steps
            we will take to deal with your complaint. You also have the right to
            contact a regulatory body or data protection authority in relation
            to your complaint.
          </p>
          <h1 className="title">
            How Long We Keep Your Personal Information (data retention)
          </h1>
          <p>
            When you place an order through the Site, I will maintain your Order
            Information for my records unless and until you ask me to delete
            this information.
            <br />
            We keep your personal information only for as long as we need to.
            This time period may depend on what we are using your information
            for, in accordance with this privacy policy. If your personal
            information is no longer required, we will delete it or make it
            anonymous by removing all details that identify you.
            <br />
            However, if necessary, we may retain your personal information for
            our compliance with a legal, accounting, or reporting obligation or
            for archiving purposes in the public interest, scientific, or
            historical research purposes or statistical purposes.
          </p>
          <h1 className="title">Children’s Privacy</h1>
          <p>
            We do not aim any of our products or services directly at children
            under the age of 13, and we do not knowingly collect personal
            information about children under 13.
          </p>
          <h1 className="title">Limits of Our Policy</h1>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            policies of those sites, and cannot accept responsibility or
            liability for their respective privacy practices.
          </p>
          <h1 className="title">Changes to This Policy</h1>
          <p>
            At our discretion, we may change our privacy policy to reflect
            updates to our business processes, current acceptable practices, or
            legislative or regulatory changes. If we decide to change this
            privacy policy, we will post the changes here at the same link by
            which you are accessing this privacy policy.
            <br />
            <br />
            If required by law, we will get your permission or give you the
            opportunity to opt in to or opt out of, as applicable, any new uses
            of your personal information.
          </p>
          <h1 className="title">contact us</h1>
          <p>
            For more information about my privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at{' '}
            <a href="mailto:contact@nullchemy.com">contact@nullchemy.com</a>
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Terms
