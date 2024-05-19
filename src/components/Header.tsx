import React, { Fragment, useState } from 'react'
import '../styles/css/header.css'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { setTheme } from '../state/actions/themeAction'
import Logo from '../assets/images/nullchemy_new_logo_3d.png'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Github } from '../assets/svg/github.svg'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'
import { ReactComponent as Times } from '../assets/svg/x-mark.svg'
import { ReactComponent as Lens } from '../assets/svg/lens.svg'
import { ReactComponent as User } from '../assets/svg/user.svg'
import session from '../utils/session'
import { setIsLogged } from '../state/actions/loggedAction'

const Header = () => {
  const SCROLL_OFFSET: number = 100

  const [mobi, setMobi] = useState('')
  const [stick, setStick] = useState(false)
  const navigate = useNavigate()
  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_OFFSET) {
      if (window.innerWidth >= 480) {
        setStick(true)
      }
    } else {
      setStick(false)
    }
  })

  //theme
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme)
  const islogged = useAppSelector((state) => state.logged)
  const openSearch = () => {
    navigate('/search')
  }
  const openProfile = () => {
    navigate('/profile')
  }
  //const [SolnsDrpVis, setSolnsDrpVis] = useState(false)
  const [ProfDrpVis, setProfDrpVis] = useState(false)
  const logout = () => {
    session.destroy()
    dispatch(setIsLogged(false))
  }
  return (
    <Fragment>
      <div className={stick ? 'header sticky_header' : 'header'}>
        <div className="hcontainer">
          <Bars className="mobiNavBars" onClick={() => setMobi('open')} />
          <div className="mobiheaderright">
            <Link to="/signin" className="ctahheadersignin">
              sign in
            </Link>
            <div className="Mobiheaderlogo">
              <Link
                to="/"
                className="MobiheaderLogoLink"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div
            className={
              mobi === 'open'
                ? 'hwrapper openmobinav'
                : mobi === 'close'
                ? 'hwrapper hidemobinav'
                : 'hwrapper'
            }
          >
            <div className="hleft">
              <div className="hbranding">
                <div className="headerlogo">
                  <Link to="/" className="headerLogoLink">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="headerNavigation">
                <li className="headerLink">
                  <Link
                    to="/"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="headerLink">
                  <Link
                    to="/about"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    About us
                  </Link>
                </li>
                <li className="headerLink">
                  <Link
                    to="/services"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li className="headerLink">
                  <Link
                    to="/our-cases"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Cases
                  </Link>
                </li>
                {/* <li
                  className="headerLink"
                  onMouseEnter={() => setSolnsDrpVis(true)}
                  onMouseLeave={() => setSolnsDrpVis(false)}
                >
                  <Link
                    to="/solutions"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Solutions
                  </Link>
                  {SolnsDrpVis && (
                    <div className="dropdown-content">
                      <div className="dropdownwrapper">
                        <div className="dropdownleft">
                          <ul className="droplinks">
                            <li className="dropdLink">
                              AI driven software Dev
                            </li>
                            <li className="dropdLink">
                              Custom Software Development
                            </li>
                            <li className="dropdLink">
                              Enterprise Application Development
                            </li>
                            <li className="dropdLink">CMS Development</li>
                          </ul>
                        </div>
                        <div className="dropdownright"></div>
                      </div>
                    </div>
                  )}
                </li> */}
                <li className="headerLink">
                  <Link
                    to="/blogs"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="headerLink">
                  <Link
                    to="/contact"
                    className="header_link_anchor"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    Contact us
                  </Link>
                </li>
                <div className="headerBrandAware">
                  <p>now developing faster with AI</p>
                </div>
              </div>
            </div>
            <div className="hright">
              <div className="header-right">
                <div className="header-right-flex">
                  {islogged ? (
                    <div
                      className="header-search"
                      onMouseEnter={() => setProfDrpVis(true)}
                      onMouseLeave={() => setProfDrpVis(false)}
                    >
                      {/* user icon to appear here */}
                      <User
                        style={{ marginRight: '15px' }}
                        className="searchLensh"
                      />
                      {ProfDrpVis && (
                        <div className="dropdown-content">
                          <div className="dropdownwrapper">
                            <div className="dropdownleft">
                              <ul className="droplinks">
                                <li
                                  className="dropdLink"
                                  onClick={() => {
                                    openProfile()
                                    window.scrollTo(0, 0)
                                  }}
                                >
                                  Profile
                                </li>
                                <li
                                  className="dropdLink"
                                  onClick={() => {
                                    navigate('/workspace')
                                  }}
                                >
                                  Workspace
                                </li>
                                <li className="dropdLink" onClick={logout}>
                                  Logout
                                </li>
                              </ul>
                            </div>
                            <div className="dropdownright"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to="/signin"
                      className="ctahheadersignin"
                      onClick={() => {
                        window.scrollTo(0, 0)
                      }}
                    >
                      sign in
                    </Link>
                  )}
                  <div className="header-search">
                    {/* lens search icon to appear here */}
                    <Lens
                      className="searchLensh"
                      onClick={() => {
                        openSearch()
                        window.scrollTo(0, 0)
                      }}
                    />
                  </div>
                  <div className="header-right-links">
                    <a
                      href="https://github.com/nullchemy"
                      title="Follow us on github and give us a star"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Github className="header-mail-icon" />
                    </a>
                    <a href="#newsletter" title="Subscribe to our newsletter">
                      <svg
                        aria-hidden="true"
                        className="header-mail-icon"
                        viewBox="0 0 18 18"
                      >
                        <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6z"></path>
                      </svg>
                    </a>
                    <div className="theme-controls">
                      {theme === 'dark' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          onClick={() => {
                            dispatch(setTheme('light'))
                          }}
                        >
                          <circle cx="12" cy="12" r="5" />
                          <line x1="12" x2="12" y1="1" y2="3" />
                          <line x1="12" x2="12" y1="21" y2="23" />
                          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                          <line x1="1" x2="3" y1="12" y2="12" />
                          <line x1="21" x2="23" y1="12" y2="12" />
                          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          onClick={() => {
                            dispatch(setTheme('dark'))
                          }}
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          mobi === 'open'
            ? 'mobileNavigation openmobinav'
            : mobi === 'close'
            ? 'mobileNavigation hidemobinav'
            : 'mobileNavigation'
        }
      >
        <div className="mnavWrapper">
          <div className="mnavtop">
            <div className="mobiheaderLeft">
              <div className="Mobiheaderlogo">
                <Link
                  to="/"
                  className="MobiheaderLogoLink"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <img src={Logo} alt="" />
                </Link>
              </div>
              {islogged ? (
                <div className="mhLUser">
                  {/* user icon to appear here */}
                  <User
                    style={{ marginRight: '15px' }}
                    className="usrmhIcsh"
                    onClick={() => {
                      openSearch()
                      window.scrollTo(0, 0)
                    }}
                  />
                </div>
              ) : (
                <Link to="/signin" className="ctahheadersignin">
                  sign in
                </Link>
              )}
            </div>
            <Times
              className="mobiNavTimes"
              onClick={() => {
                setMobi('close')
                window.scrollTo(0, 0)
              }}
            />
          </div>
          <div className="mobinavbtm">
            <Link to="/" className="mnavLink">
              Home
            </Link>
            <Link to="/about" className="mnavLink">
              About
            </Link>
            <Link to="/services" className="mnavLink">
              Services
            </Link>
            <Link to="/our-cases" className="mnavLink">
              Our Cases
            </Link>
            <Link to="/solutions" className="mnavLink">
              Solutions
            </Link>
            <Link to="/blogs" className="mnavLink">
              Blog
            </Link>
            <Link to="/contact" className="mnavLink">
              Contact Us
            </Link>
          </div>
          <div className="mhbtmlnks">
            <a
              href="https://github.com/nullchemy"
              title="Follow us on github and give us a star"
              rel="noreferrer"
              target="_blank"
              className="mhbtmanhr"
            >
              <Github className="header-mail-icon" />
            </a>
            <a
              href="#newsletter"
              title="Subscribe to our newsletter"
              className="mhbtmanhr"
            >
              <svg
                aria-hidden="true"
                className="header-mail-icon"
                viewBox="0 0 18 18"
              >
                <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6z"></path>
              </svg>
            </a>
            <div className="theme-controls">
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    dispatch(setTheme('light'))
                  }}
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" x2="12" y1="1" y2="3" />
                  <line x1="12" x2="12" y1="21" y2="23" />
                  <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                  <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                  <line x1="1" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="23" y1="12" y2="12" />
                  <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                  <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    dispatch(setTheme('dark'))
                  }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
