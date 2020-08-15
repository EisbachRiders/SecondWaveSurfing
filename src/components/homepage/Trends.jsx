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
    maxHeight: 600,
  },
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  flexItem: {
    flexBasis: "100%",
    position: "relative",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
      marginBottom: 0,
    },
  },
  textContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
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
            <p className={classes.text}> {t("homepage.trends1")}</p>
            <Button
              className={classes.button}
              alt="shop van der waal surf grip"
              variant="contained"
              color="primary"
              href="https://secondwavesurfing.com/shop/product/van-der-waal-surf-grip/"
            >
              {t("homepage.moreInfo")}
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
            <p className={classes.text}>{t("homepage.trends2")}</p>
            <Button
              className={classes.button}
              alt="shop hidden surfboard hanger"
              variant="contained"
              color="primary"
              href="https://secondwavesurfing.com/shop/brand/shepps-gnarwall/"
            >
              {t("homepage.moreInfo")}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Trends
