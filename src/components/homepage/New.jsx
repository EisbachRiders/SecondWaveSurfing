import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
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
  img1: {
    width: "100%",
    height: "100%",
  },
  img2: {
    width: 250,
    height: "auto",
    [theme.breakpoints.up("md")]: {
      marginBottom: 60,
      width: "100%",
    },
  },
  flexItemImg: {
    position: "relative",
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "65%",
      marginBottom: 0,
    },
  },
  flexItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 60,
      height: "100%",
      flexFlow: "column",
      marginBottom: 0,
    },
  },
  textContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    background: theme.color.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.up("lg")]: {
      flexGrow: 1,
    },
  },
  text: {
    color: theme.color.white,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 0,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
  buttonContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
  },
  button: {
    padding: 0,
  },
  marginTop: {
    marginTop: 14,
  },
  img3: {
    marginBottom: 30,
  },
}))

function New() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "waxzam-surfboard-in-field.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "waxzam-box.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "quickLockAD.png" }) {
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
      <h2 className={classes.header}>{t("homepage.new")}</h2>

      <div className={classes.innerContainer}>
        <div className={classes.flexItemImg}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="brands"
            placeholderStyle={{ backgroundColor: `white` }}
            className={classes.img1}
            imgStyle={{ objectPosition: "center center" }}
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              title="shop this wax"
              href="https://secondwavesurfing.com/shop/product/wax-zam-surf-wax/"
            >
              {t("homepage.moreInfo")}
            </Button>
          </div>
        </div>
        <div className={classes.flexItem}>
          <Button
            classes={{ text: classes.button }}
            alt="shop wax zam wax"
            href="https://secondwavesurfing.com/shop/product/wax-zam-surf-wax/"
          >
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="brands"
              placeholderStyle={{ backgroundColor: `white` }}
              className={classes.img2}
              imgStyle={{ objectPosition: "center center" }}
            />
          </Button>
          <div className={classes.textContainer}>
            {[1, 2, 3, 4].map((elem) => (
              <p
                key={`text${elem}`}
                className={clsx(classes.text, {
                  [classes.marginTop]: elem === 1,
                })}
              >
                {t(`homepage.newPoint${elem}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default New
