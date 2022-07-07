import React, { Fragment, useState } from 'react'
import styles from '../styles/css/Header.module.css'
import Image from 'next/image'
import Logo from '../public/icons/android-chrome-192x192.png'

const header = () => {
    const[search, setSearch] = useState('')
    const handleReadOnly = () => {
        document.getElementById('navigationSearch').removeAttribute('readOnly')
    }
  return (
    <Fragment>
        <header className={styles.header}>
            <div className={styles.headercontainer}>
                <div className={styles.headerflex}>
                    <div className={styles.headerleft}>
                        <div className={styles.headerleftflex}>
                            <div className={styles.headerlefttop}>
                                <div className={styles.headerbrand}>
                                    <h1>nullchemy</h1>&nbsp;
                                    <Image className={styles.logoImage} src={Logo} alt="nullchemy" width={35} height={35}/>
                                </div>
                                <div className={styles.headerbrandtexts}>
                                    <p>Essays, opinions, and advice on the act of computer programming from Stack Overflow.</p>
                                </div>
                            </div>
                            <div className={styles.headerleftbottom}>
                                <nav className={styles.headernav}>
                                    <ul>
                                        <li className={styles.headernavlinks}><a className={styles.selected} href="index.html">Home</a></li>
                                        <li className={styles.headernavlinks}><a href="blog.html">Blog</a></li>
                                        <li className={styles.headernavlinks}><a href="about.html">About</a></li>
                                        <li className={styles.headernavlinks}><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerright}>
                        <div className={styles.headerrightflex}>
                            <div className={styles.headersearch}>
                                <form className={styles.headersearchform}>
                                    <svg className={styles.headersearchicon} width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                                    <input className={styles.headersearchinput} id="navigationSearch" type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)} autoComplete="off" readOnly onFocus={()=>{handleReadOnly()}}/>
                                    <span className={styles.searchinputplaceholder}>search for something</span>
                                </form>
                            </div>
                            <div className={styles.headerrightlinks}>
                                <a href="#newsletter" title="Subscribe to our newsletter">
                                    <svg className={styles.headermailicon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                                </a>
                                <div className={styles.themecontrols}>
                                    <svg title="Change to light theme" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" x2="12" y1="1" y2="3"/><line x1="12" x2="12" y1="21" y2="23"/><line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/><line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/><line x1="1" x2="3" y1="12" y2="12"/><line x1="21" x2="23" y1="12" y2="12"/><line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/><line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/></svg>
                                    <div className={styles.themeToggle}>
                                        <span className={styles.toggleButton}></span>
                                    </div>
                                    <svg title="Change to dark theme" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </Fragment>
  )
}

export default header