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
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexItem: {
    flexBasis: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
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

function Trends() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "van-der-waal-surf-grip.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "gnarwall-surfboard-hanging.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container className={classes.container}>
      <h2 className={classes.header}>{t("homepage.trends")}</h2>
      <div className={classes.innerContainer}>
        <div className={classes.flexItem}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="brands"
            placeholderStyle={{ backgroundColor: `white` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
          <div className={classes.textContainer}>
            <p className={classes.text}>Modern alternative to surf wax</p>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              More info
            </Button>
          </div>
        </div>
        <div className={classes.flexItem}>
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="brands"
            placeholderStyle={{ backgroundColor: `white` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
          <div className={classes.textContainer}>
            <p className={classes.text}>
              Hidden surfboard holder from ecological materials
            </p>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              More info
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Trends
