import React, { Fragment } from 'react'
import '../styles/css/applyjob.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ERecruit from '../components/ERecruit'

const ApplyJob = () => {
  const jobdescr = `# Senior Full-Stack Software Developer

<br>

## Location: Nairobi
## Type: Full-Time

<br>

## About Us:
nullchemy is a dynamic and innovative technology company specializing in Software Development & Artificial intelligence. We are passionate about pushing the boundaries of technology and delivering exceptional products that make a meaningful impact on our clients' businesses. As we applinue to grow, we are seeking an experienced Senior Full-Stack Software Developer to join our talented team and applribute to our exciting projects.

<br>

## Role Overview:
As a Senior Full-Stack Software Developer at nullchemy, you will play a crucial role in designing, developing, and maintaining high-quality software solutions that meet our clients' needs. You will work closely with cross-functional teams, including product managers, designers, and fellow developers, to deliver exceptional software products that exceed expectations. Your expertise and leadership will guide the development process, ensuring the adoption of best practices, code quality, and efficient project execution.

<br>

## Key Responsibilities:

1. <span>1. </span>Collaborate with product managers and designers to understand project requirements, technical specifications, and user experience goals.
2. <span>2. </span>Lead the architectural design and technical implementation of software solutions, making informed decisions about technology stack, design patterns, and system architecture.
3. <span>3. </span>Write clean, efficient, and maintainable code, following best practices and coding standards.
4. <span>4. </span>Mentor and provide technical guidance to junior developers, fostering a collaborative and growth-oriented team environment.
5. <span>5. </span>Participate in code reviews, providing constructive feedback to maintain high code quality and ensure consistent coding practices.
6. <span>6. </span>Troubleshoot and resolve complex technical issues, identifying root causes and implementing effective solutions.
7. <span>7. </span>Stay up-to-date with industry trends, emerging technologies, and software development best practices, and apply this knowledge to improve our processes and products.
8. <span>8. </span>applribute to the improvement of development methodologies, tools, and processes to enhance the team's efficiency and productivity.
9. <span>9. </span>Collaborate with cross-functional teams to ensure successful project delivery within established timelines and requirements.

<br>

## Qualifications:
1. <span>1. </span>Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field.
2. <span>2. </span>4+ years of professional software development experience, with a strong focus on Node.js, React.js, Express.js, Flutter, React Native.
3. <span>3. </span>Proven track record of designing, developing, and delivering successful software projects, ideally in a senior or lead role.
4. <span>4. </span>Extensive experience with JavaScript, Node.js, Python, Go-lang, C++, C
5. <span>5. </span>Strong understanding of software architecture, design patterns, and best practices.
6. <span>6. </span>Excellent problem-solving skills and the ability to tackle complex technical challenges.
7. <span>7. </span>Previous experience mentoring or leading other developers is a plus.
8. <span>8. </span>Effective communication skills, both written and verbal, with the ability to explain technical concepts to non-technical stakeholders.
9. <span>9. </span>Strong collaboration skills and the ability to work effectively in cross-functional teams.

<br>

## Benefits:
1. Competitive salary and performance-based bonuses.
2. Comprehensive health, dental, and vision insurance plans.
3. Retirement savings plan with company matching.
4. Flexible working hours and remote work options.
5. Professional development opportunities, including conferences and workshops.
6. Vibrant and inclusive company culture that values innovation and teamwork.

<br>

Join us at nullchemy and be part of a team that's shaping the future of [Your Industry/Field]. If you're passionate about software development, innovative technologies, and making an impact, we'd love to hear from you. Apply now with your resume and a cover letter detailing your relevant experience and achievements.

*nullchemy* is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, or protected veteran status and will not be discriminated against on the basis of disability.

`

  return (
    <Fragment>
      <Helmet>
        <title>Job Description | nullchemy</title>
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
      <div className="applyjob">
        <div className="applyjob_container">
          <div className="applyjob_wrapper">
            <h1 className="jbap_title">Job Description</h1>
            <div className="apply_job_content">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={dracula}
                        language={match[1]}
                        PreTag="div"
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {jobdescr}
              </ReactMarkdown>
            </div>
            {/* application Form Bottom */}
            <ERecruit />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default ApplyJob
