import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/index.scss"
import BackgroundSlider from "react-background-slider"
import { BsInfoCircleFill } from "react-icons/bs"
import { MdLocationOn, MdPhoneInTalk, MdMail } from "react-icons/md"

const IndexPage = () => {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth <= 760)
  }, [])
  const data = useStaticQuery(graphql`
    query {
      mobile1: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile2: file(relativePath: { eq: "bg2.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile3: file(relativePath: { eq: "bg3.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile4: file(relativePath: { eq: "bg4.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  const images = mobile
    ? [
        data.mobile1.childImageSharp.fluid.src,
        data.mobile2.childImageSharp.fluid.src,
        data.mobile3.childImageSharp.fluid.src,
        data.mobile4.childImageSharp.fluid.src,
      ]
    : [
        data.mobile1.childImageSharp.fluid.src,
        data.mobile2.childImageSharp.fluid.src,
        data.mobile3.childImageSharp.fluid.src,
        data.mobile4.childImageSharp.fluid.src,
      ]

  return (
    <Layout>
      <SEO title="Ana Sayfa" />
      <BackgroundSlider images={images} duration={10} transition={1} />
      {/* <div className="info">
        <BsInfoCircleFill size="30" />
      </div> */}
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
        <div className="d-flex">
          <hr />
          <MdMail />
          <a href="mailto:batineryilmaz@icloud.com">batineryilmaz@icloud.com</a>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
