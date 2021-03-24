import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"
import "../styles/index.scss"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import Img from "gatsby-image"
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
    allImageSharp(filter: {fluid: {originalName: {regex: "/Menu-/"}}}, sort: {order: ASC, fields: fixed___originalName}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)

  const images = () => {
    return data.allImageSharp.edges.map(item => {
      return (
        <div>
          <Img fluid={item.node.fluid} />
        </div>)
    })
  }

  return (
    <Layout>
      <SEO title="Menü" />
      <Slider className="slider" {...settings}>
        {images()}
      </Slider>
    </Layout>
  )
}
export default Menu
