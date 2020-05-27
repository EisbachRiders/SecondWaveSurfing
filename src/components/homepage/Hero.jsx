import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh - 98px",
  },
  container: {
    position: "absolute",
    top: "70%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      top: "40%",
      left: "70%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
    },
    [theme.breakpoints.up("lg")]: {
      top: "50%",
      left: "68%",
      transform: "translate(-50%, -50%)",
      padding: 30,
      width: "fit-content",
      textAlign: "center",
    },
  },
  img: {
    height: "100vh",
    marginTop: -98,
  },
  img2: {
    width: 600,
  },
  text: {
    color: theme.color.black,
    fontFamily: "secondary",
  },
  textBig: {
    marginBottom: 0,
    lineHeight: 1,
    transform: "rotate(355deg)",
    [theme.breakpoints.up("sm")]: {
      fontSize: 72,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 85,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 150,
    },
  },
  indent: {
    marginBottom: 0,
    [theme.breakpoints.up("xs")]: {
      marginLeft: 60,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 60,
    },
  },
  title: {
    marginBottom: 0,
    lineHeight: 0.5,
    transform: "rotate(355deg)",
    // textTransform: "capitalize",
    fontSize: 52,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontSize: 48,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 58,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 100,
    },
  },
  subtitle: {
    textTransform: "lowercase",
    textAlign: "center",
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 34,
    },
  },
}))

function Hero() {
  const classes = useStyles()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroMobile: file(relativePath: { eq: "heroMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
      <Hidden smDown>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt="wave"
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.img}
          imgStyle={{ objectPosition: "top center" }}
        />
      </Hidden>
    </div>
  )
}

export default Hero
