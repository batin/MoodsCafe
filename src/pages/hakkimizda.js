import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md"
import "../styles/index.scss"
import Layout from "../components/layout"
import BackgroundSlider from "react-background-slider"
import SEO from "../components/seo"

const SecondPage = () => {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth <= 760)
  }, [])
  const data = useStaticQuery(graphql`
    query {
      mobile1: file(relativePath: { eq: "bg1.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile2: file(relativePath: { eq: "bg2.png" }) {
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
      mobile4: file(relativePath: { eq: "bg4.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile5: file(relativePath: { eq: "bg5.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile6: file(relativePath: { eq: "bg6.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile7: file(relativePath: { eq: "bg7.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile8: file(relativePath: { eq: "bg8.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile9: file(relativePath: { eq: "bg9.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      mobile10: file(relativePath: { eq: "bg10.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      desktop1: file(relativePath: { eq: "wide1.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      desktop2: file(relativePath: { eq: "wide2.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      desktop3: file(relativePath: { eq: "wide3.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  const images =
    mobile
      ? [
        data.mobile1.childImageSharp.fluid.src,
        data.mobile2.childImageSharp.fluid.src,
        data.mobile3.childImageSharp.fluid.src,
        data.mobile4.childImageSharp.fluid.src,
        data.mobile5.childImageSharp.fluid.src,
        data.mobile6.childImageSharp.fluid.src,
        data.mobile7.childImageSharp.fluid.src,
        data.mobile8.childImageSharp.fluid.src,
        data.mobile9.childImageSharp.fluid.src,
        data.mobile10.childImageSharp.fluid.src,
      ]
      : [
        data.desktop1.childImageSharp.fluid.src,
        data.desktop2.childImageSharp.fluid.src,
        data.desktop3.childImageSharp.fluid.src,

      ]

  return (
  <Layout showFooter>
    <SEO title="Hakkımızda" />
    <BackgroundSlider images={images} duration={5} transition={1} />
    <div className="about">
      <p>
          Moods 2003 yılında Serkan ERYILMAZ tarafından Denizli Çamlıkta siz değerli misafirlerine merhaba 
          demiş ve “işletme eviniz gelen müsteriler ise misafirinizdir” mantalitesi ile günümüze hizmetini 
          devam ettiren misafirlerine evinde samimiyeti ve sıcaklığını yaşatan lezzeti yiyecek ve içecekler 
          sunan kendinizi özel hissedeceğiniz nezih bir buluşma noktası misafirlerin tabiri ile huzur buldukları
          “Adsız bir klüptür”
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
    </div>
  </Layout>)
}

export default SecondPage
