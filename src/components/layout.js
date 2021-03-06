import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children, showFooter }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {showFooter ?
        <footer>
          <a
            className="creator"
            rel="noopener noreferrer"
            target="_blank"
            href="https://batin.netlify.app"
          >
            Batın Eryılmaz ©
        </a>
        </footer>
       : <div/>}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
