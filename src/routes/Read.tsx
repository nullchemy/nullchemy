import React, { Fragment } from 'react'
import '../styles/css/read.css'
import Header from '../components/Header'
import agility from '../assets/images/agility.png'
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right.svg'
import Footer from '../components/Footer'

const Read = () => {
  return (
    <Fragment>
      <Header />
      <div className="read">
        <div className="readContainer">
          <div className="readWrapper">
            <div className="readSidebarLeft"></div>
            <div className="readContent">
              <div className="readBreadCrumb">
                <span>Home</span>
                <ArrowRight className="arrowright" />
                <span>Blog</span>
                <ArrowRight className="arrowright" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <h1 className="readtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <div className="readImageContainer">
                <img className="readImage" src={agility} alt="" />
              </div>
              <p className="readParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                rerum vitae sit veniam id vel temporibus? Quibusdam ullam, et
                saepe omnis inventore assumenda cumque odio, nisi eius beatae
                laboriosam excepturi? Quam temporibus qui amet debitis ex
                laboriosam accusamus eos aperiam facere, atque fuga esse
                nesciunt, asperiores illo dignissimos vel. Debitis tenetur sed
                iusto obcaecati, repellat culpa molestias earum hic quidem
                dignissimos totam est doloremque eligendi fugiat vel magnam id!
                Esse, odio veniam necessitatibus, quo libero debitis dolores
                alias non, voluptate ipsum assumenda? Nostrum nulla harum magni
                eum eaque ipsam iure. Inventore libero placeat quibusdam
                veritatis quos suscipit culpa sapiente non.
              </p>
              <p className="readParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                rerum vitae sit veniam id vel temporibus? Quibusdam ullam, et
                saepe omnis inventore assumenda cumque odio, nisi eius beatae
                laboriosam excepturi? Quam temporibus qui amet debitis ex
                laboriosam accusamus eos aperiam facere, atque fuga esse
                nesciunt, asperiores illo dignissimos vel. Debitis tenetur sed
                iusto obcaecati, repellat culpa molestias earum hic quidem
                dignissimos totam est doloremque eligendi fugiat vel magnam id!
                Esse, odio veniam necessitatibus, quo libero debitis dolores
                alias non, voluptate ipsum assumenda? Nostrum nulla harum magni
                eum eaque ipsam iure. Inventore libero placeat quibusdam
                veritatis quos suscipit culpa sapiente non.
              </p>
              <h3 className="readSubTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
            <div className="readSidebarRight"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Read
