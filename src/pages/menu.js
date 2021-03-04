import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"
import "../styles/index.scss"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import MenuItem from "../components/MenuItem"

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
      menu1: file(relativePath: { eq: "Menu1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu2: file(relativePath: { eq: "Menu2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu3: file(relativePath: { eq: "Menu3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu4: file(relativePath: { eq: "Menu4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu5: file(relativePath: { eq: "Menu5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu6: file(relativePath: { eq: "Menu6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu7: file(relativePath: { eq: "Menu7.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu8: file(relativePath: { eq: "Menu8.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu9: file(relativePath: { eq: "Menu9.png" }) {
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
        {console.log(data.menu1)}
        <div>
          <MenuItem imageUrl={data.menu1.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu2.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu3.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu4.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu5.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu6.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu7.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu8.childImageSharp.fluid.src} />
        </div>
        <div>
          <MenuItem imageUrl={data.menu9.childImageSharp.fluid.src} />
        </div>
      </Slider>
    </Layout>
  )
}
export default Menu
