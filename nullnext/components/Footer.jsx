import React, { Fragment } from 'react'
import styles from '../styles/css/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.fcontainer}>
            <div className={styles.fdet}>
                <div className={styles.fdetflex}>
                    <div className={styles.fflexsecs}>
                        <div className={styles.flogo}>
                            <img src="./assets/icons/favicon-32x32.png" alt="" />
                            <h3>nullchemy</h3>
                        </div>
                        {/* <div className={styles.fsocials}>
                            <i className={styles.fa fa-facebook}></i>
                            <i className={styles.fa fa-twitter}></i>
                            <i className={styles.fa fa-linkedin}></i>
                            <i className={styles.fa fa-youtube}></i>
                        </div> */}
                        <div className={styles.siteProtection}>
                            <img src="./assets/img/google-page-speed.png" alt="Google lite speed badge" />
                            <img src="./assets/img/dmca-badge.png" alt="DMCA badge" />
                        </div>
                    </div>
                    <div className={styles.fflexsecs}>
                        <h2>Resources</h2>
                        <ul>
                            <li><Link href="./blog.html">Blog</Link></li>
                            <li><Link href="./privacy.html">Privacy</Link></li>
                            <li><Link href="./tos.html">Terms</Link></li>
                            <li><Link href="./cookies.html">Cookies</Link></li>
                        </ul>
                    </div>
                    <div className={styles.fflexsecs}>
                        <h2>Company</h2>
                        <ul>
                            <li><Link href="./about.html">About US</Link></li>
                            <li><Link href="./contact.html">Contact Us</Link></li>
                            <li><Link href="./events.html">Events</Link></li>
                        </ul>
                    </div>
                    <div className={styles.fflexsecs}>
                        <h2>Services</h2>
                        <ul>
                            <li><Link href="./apis.html">APIs</Link></li>
                            <li><Link href="./support.html">Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.fcopyright}>
            <p>Copyright &copy; {new Date().getFullYear()} | built by <Link title="Developer" target="blank" href="https://denniskibet.com">DennisRono</Link> <Link href="https://github.com/DennisRono" title="Github">github</Link></p>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer