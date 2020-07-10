import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Slider from "react-slick"
import "../styles/index.scss"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

const Menu = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <GrFormNext />,
    prevArrow: <GrFormPrevious />,
  })
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setSettings({
        slidesToShow: 1,
        slidesToScroll: 1,
      })
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      menu1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu2: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu3: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu4: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu5: file(relativePath: { eq: "5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu6: file(relativePath: { eq: "6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu7: file(relativePath: { eq: "7.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu8: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu9: file(relativePath: { eq: "9.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Menü" />
      <Slider className="slider" {...settings}>
        <div>
          <Img fluid={data.menu1.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu2.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu3.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu4.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu5.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu6.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu7.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu8.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.menu9.childImageSharp.fluid} />
        </div>
      </Slider>
    </Layout>
  )
}
export default Menu
