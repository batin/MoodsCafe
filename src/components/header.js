import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
const Header = () => {
  const [menu, setMenu] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className={`header ${menu ? "menu-open" : "menu-closed"}`}>
      <div className="logo-container container d-flex align-items-center">
        <Link to="/">
          <Img
            className="logo"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </Link>
        <div className="navbar justify-content-around align-items-center mr-5 ml-5">
          <Link to="/menu">Menü</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
        </div>
        <div className="navbar-mobile menu-btn ">
          {!menu ? (
            <IoIosMenu
              onClick={() => setMenu(true)}
              size="40"
              strokeWidth="5"
            />
          ) : (
            <IoIosClose
              onClick={() => setMenu(false)}
              size="40"
              strokeWidth="5"
            />
          )}
        </div>
      </div>
      {menu ? (
        <div className="navbar-mobile justify-content-around align-items-center mr-5 ml-5">
          <Link to="/menu">Menü</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
        </div>
      ) : (
        <div />
      )}
    </header>
  )
}
export default Header
