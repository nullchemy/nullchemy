import React, { Fragment } from 'react'
import styles from '../styles/css/Landing.module.css'
import Link from 'next/link'

const Landing = () => {
  return (
    <Fragment>
        <div className={styles.landing}>
            <div className={styles.landcontainer}>
                <div className={styles.landflex}>
                    <div className={styles.landtexts}>
                        <h1>Connect with customers. Drive <span>revenue. Smarter. Faster.</span></h1>
                        <p>
                            Consumers seek out authentic usergenerated content (UGC) to make informed purchasing decisions. Our shopper engagement platform gives you total control to collect, display, and distribute UGC at a global scale. Inspire confident purchases with Ratings & Reviews, Q&As, Visual & Social Content, and more.
                        </p>
                        <Link href="">learn more</Link>
                    </div>
                    <div className={styles.landingright}>
                        <div className={styles.landingblogs}>
                            <div className={styles.landingblog}>
                                <img src="./assets/img/agility.png" alt=""/>
                                <div className={styles.blogmeta}>
                                    <span className={styles.category}>Software</span>
                                    <span>june 14 2022</span>
                                </div>
                                <h2>Agility starts with trust</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ducimus doloribus perferendis sapiente.</p>
                                <div className={styles.authorblog}>
                                    <div className={styles.bogauthorimage}>
                                        <img src="" alt=""/>
                                    </div>
                                    <p className={styles.authorname}>Dennis Kibet</p>
                                </div>
                            </div>
                            <div className={styles.landingblog}>
                                <img src="./assets/img/ceoupdate.png" alt=""/>
                                <div className={styles.blogmeta}>
                                    <span className={styles.category}>Software</span>
                                    <span>june 14 2022</span>
                                </div>
                                <h2>Agility starts with trust</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ducimus doloribus perferendis sapiente.</p>
                                <div className={styles.authorblog}>
                                    <div className={styles.bogauthorimage}>
                                        <img src="" alt=""/>
                                    </div>
                                    <p className={styles.authorname}>Dennis Kibet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Landing