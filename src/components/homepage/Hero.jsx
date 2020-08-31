import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh - 98px",
  },
  img: {
    height: "100vh",
    marginTop: -98,
  },
}))

function Hero() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroMobile: file(relativePath: { eq: "heroMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Img
          fluid={data.heroMobile.childImageSharp.fluid}
          alt="wave"
          backgroundColor="lightgray"
          className={classes.img}
          loading="eager"
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
      <Hidden smDown>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt="wave"
          backgroundColor="lightgray"
          className={classes.img}
          loading="eager"
          imgStyle={{ objectPosition: "top center" }}
        />
      </Hidden>
    </div>
  )
}

export default Hero
