import React, { Fragment } from 'react'
import '../styles/css/footer.css'

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <Fragment>
      <footer className="wkspaceFooter">
        <p className="wkspaceCentered">
          copyright &copy; {currentYear} | nullchemy
        </p>
      </footer>
    </Fragment>
  )
}

export default Footer
