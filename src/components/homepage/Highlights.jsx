import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  img: {
    width: "100%",
  },
  text: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  imgContainer: {
    position: "relative",
  },
}))

function Highlights() {
  const classes = useStyles()
  const { i18n } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      imageEn: file(relativePath: { eq: "sustainable-surf-solutions-en.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageDe: file(relativePath: { eq: "sustainable-surf-solutions-de.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMobileEn: file(
        relativePath: { eq: "sustainable-surf-solutions-mobile-en.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMobileDe: file(
        relativePath: { eq: "sustainable-surf-solutions-mobile-de.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container className={classes.container}>
      <Hidden smDown>
        <Img
          fluid={
            i18n.language === "de"
              ? data.imageDe.childImageSharp.fluid
              : data.imageEn.childImageSharp.fluid
          }
          alt="brands"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
      <Hidden mdUp>
        <Img
          fluid={
            i18n.language === "de"
              ? data.imageMobileDe.childImageSharp.fluid
              : data.imageMobileEn.childImageSharp.fluid
          }
          alt="brands"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
    </Container>
  )
}

export default Highlights
