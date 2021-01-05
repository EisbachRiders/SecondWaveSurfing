import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Shepps from "./Shepps"
import VanDerWaal from "./VanDerWaal"
import GreenFix from "./GreenFix"
import EisbachRiders from "./EisbachRiders"
import Waxzam from "./Waxzam"
import Suntribe from "./Suntribe"
import Roadtyping from "./Roadtyping"

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backgroundImg: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
}))

function Brands() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "blogBanner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.headerContainer}>
        <Img
          fluid={data.header.childImageSharp.fluid}
          alt="surfers walking on beach"
          placeholderStyle={{ backgroundColor: `lightgray` }}
          className={classes.backgroundImg}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{t("links.brands")}</h1>
        </div>
      </div>
      <EisbachRiders />
      <GreenFix />
      <Shepps />
      <Suntribe />
      <Roadtyping />
      <VanDerWaal />
      <Waxzam />
    </>
  )
}

export default Brands
