import React, { Fragment } from 'react'
import '../styles/css/howwegetitdone.css'
import { ReactComponent as LadyDesigning } from '../assets/svg/wwdo/lady-designing.svg'
import { ReactComponent as ManDesigning } from '../assets/svg/wwdo/man-designing.svg'
import { ReactComponent as ManTilingWidgets } from '../assets/svg/wwdo/man-tiling-widgets.svg'
import { ReactComponent as ManFixing } from '../assets/svg/wwdo/man-fixing.svg'
import DeploymentAndLaunch from '../assets/images/deployment_and_launch.png'
import { ReactComponent as PathOne } from '../assets/svg/pathone.svg'
import { ReactComponent as PathTwo } from '../assets/svg/pathtwo.svg'

const HowWeGetItDone = () => {
  return (
    <Fragment>
      <div className="hwgitdone">
        <div className="hwgiContainer">
          <div className="hwgitWrapper">
            <PathOne className="pathone" />
            <PathTwo className="pathtwo" />
            <h1 className="hwgitTitle">How we get it done</h1>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">
                  Discovery & Requirements gathering
                </h2>
                <p className="hwgitPar">
                  We value collaborating closely with your team to understand
                  your business objectives, target audience, and functional
                  requirements. Together, we establish a deep connection that
                  fosters mutual growth and success. Our dedicated efforts aim
                  to expand the word count of this paragraph threefold while
                  preserving valuable content that captures our shared vision.
                  This collaborative approach explores every facet of your
                  business, aligning strategies, objectives, and aspirations for
                  reaching and fulfilling your target audience's needs
                  effectively.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <LadyDesigning className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>1</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">Wireframing and Prototyping</h2>
                <p className="hwgitPar">
                  Our team excels at crafting wireframes and interactive
                  prototypes to visualize web application elements. We gather
                  feedback, iterate designs, and ensure exceptional usability.
                  Close partnership allows us to fine-tune every aspect, address
                  challenges, and align with objectives. Our meticulous approach
                  guarantees a captivating web application that exceeds
                  expectations and fosters success.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManDesigning className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>2</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">User Interface (UI) Design</h2>
                <p className="hwgitPar">
                  Our team of talented designers creates visually stunning
                  designs aligned with your brand identity. We deliver a
                  seamless user interface that captivates audiences and provides
                  an immersive experience. Through collaboration, we understand
                  your brand's ethos and incorporate it into every aspect of the
                  design. Our craftsmanship and dedication create designs that
                  captivate, reinforce your uniqueness, and resonate with your
                  audience. The result is an exceptional interface that
                  facilitates navigation and fosters trust, loyalty, and
                  business objectives.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManTilingWidgets className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>3</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">Front-end Development</h2>
                <p className="hwgitPar">
                  Our skilled developers create functional web applications with
                  responsive and cross-browser compatible interfaces. We
                  prioritize seamless accessibility, employing the latest
                  technologies and best practices. Through thorough testing and
                  optimization, we guarantee exceptional user experiences that
                  align with your brand and enhance engagement.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManDesigning className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>2</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">Back-end Development</h2>
                <p className="hwgitPar">
                  Our experienced team develops the server-side components and
                  functionalities that power the web application. With expertise
                  in robust database management, user authentication, and data
                  processing capabilities, we ensure a strong foundation for
                  your application. By implementing these crucial features, we
                  guarantee secure and efficient handling of data, enabling
                  seamless user experiences and empowering your business to
                  thrive in the digital landscape.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManTilingWidgets className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>3</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">Integration and Testing</h2>
                <p className="hwgitPar">
                  We seamlessly integrate third-party APIs and services,
                  including payment gateways and social media platforms, to
                  enhance the functionality of your web application. Our team
                  conducts rigorous testing to ensure that performance,
                  security, and functionality meet the highest standards,
                  resulting in a robust and reliable solution.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManDesigning className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>2</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">Deployment and Launch</h2>
                <p className="hwgitPar">
                  We prepare the web application for deployment on a production
                  server, ensuring proper configuration and optimization. Our
                  team coordinates the launch process, including migration, DNS
                  setup, and SSL certificate installation
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <img
                    src={DeploymentAndLaunch}
                    className="hwditfleIc"
                    alt=""
                  />
                  {/* <ManTilingWidgets className="hwditfleIc" /> */}
                  {/* <Circle className="hwgitcircle" />
                  <span>3</span> */}
                </div>
              </div>
            </div>
            <div className="hwgitsec">
              <div className="hwgitflxone">
                <h2 className="hwgitsectitle">
                  Continous Support and Maintenance
                </h2>
                <p className="hwgitPar">
                  We offer post-launch support, bug fixes, and updates to ensure
                  the ongoing security and up-to-date functionality of your web
                  application. Our team provides regular maintenance services,
                  including performance monitoring and feature enhancements, to
                  ensure your application remains reliable and optimized for an
                  exceptional user experience.
                </p>
              </div>
              <div className="hwgitflxtwo">
                <div className="hwgitflxtwoWrapper">
                  <ManFixing className="hwditfleIc" />
                  {/* <Circle className="hwgitcircle" />
                  <span>2</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HowWeGetItDone
