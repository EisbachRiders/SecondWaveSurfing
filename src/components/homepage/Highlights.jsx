import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
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
  textContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
    [theme.breakpoints.up("lg")]: {
      padding: 30,
    },
  },
  text: {
    color: theme.color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
}))

function Highlights() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "surfer-at-eisbach.jpg" }) {
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
      <h2 className={classes.text}>{t("homepage.highlights")}</h2>
      <div className={classes.imgContainer}>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="brands"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.textContainer}>
          <p className={classes.text}>Exploring with SUP</p>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            More info
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Highlights
