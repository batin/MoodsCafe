import React from "react"
import { MdLocationOn, MdPhoneInTalk, MdMail } from "react-icons/md"
import "../styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Hakkımızda" />
    <div className="about">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div className="info-continer d-flex flex-column align-items-start justify-content-center">
      <div className="d-flex">
        <hr />
        <MdLocationOn />
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://goo.gl/maps/8a8KqABcTxiCyonh8"
        >
          Çamlaraltı,20160,Pamukkale/Denizli
        </a>
      </div>
      <div className="d-flex">
        <hr />
        <MdPhoneInTalk /> <a href="tel:+902582137643">0 (258) 213 76 43</a>
      </div>
      {/* <div className="d-flex">
        <hr />
        <MdMail />
        <a href="mailto:batineryilmaz@icloud.com">batineryilmaz@icloud.com</a>
      </div> */}
    </div>
  </Layout>
)

export default SecondPage
