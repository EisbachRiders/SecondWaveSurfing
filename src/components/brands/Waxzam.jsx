import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"
import waxzam from "../../assets/logos/waxzam.png"

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "secondary",
    fontSize: 48,
    textTransform: "capitalize",
    margin: 0,
    width: "100%",
    textAlign: "center",
  },
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: 30,
  },
  reverse: {
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row-reverse",
    },
  },
  textContainer: {
    flexBasis: "100%",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "50%",
      padding: 60,
    },
  },
  imgContainer: {
    flexBasis: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "18%",
    },
  },
  imgContainer2: {
    flexBasis: "100%",
    overflow: "hidden",
    boxShadow: "0px 22px 64px -40px rgba(0,0,0,0.34)",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "18%",
    },
  },
  titleHolder: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  title3: {
    fontWeight: 700,
    textTransform: "lowercase",
    fontSize: 14,
    margin: 0,
  },
  img: {
    width: "100%",
    height: 400,
  },
  img2: {
    width: "100%",
    height: 300,
  },
  logoContainer: {
    display: "flex",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: "50%",
    // background: theme.palette.primary.main,
    marginRight: 15,
  },
  logo: {
    width: 80,
  },
  link: {
    cursor: "pointer",
  },
  text: {
    marginBottom: 30,
  },
}))

function Waxzam() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "waxzam-surfboard-in-field.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "waxzam-cold.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const brands = [
    {
      key: "waxzam",
      name: "WAX Z'AM",
      website: "https://secondwavesurfing.com/shop/brand/wax-zam/",
      logo: waxzam,
    },
  ]

  return (
    <Container background="gray">
      {brands.map((elem, idx) => (
        <div
          className={clsx(classes.root, classes.reverse)}
          key={`brand${elem.name}`}
        >
          <div className={classes.textContainer}>
            <p className={classes.title}>{t(`brands.${elem.key}_category`)}</p>
            <p className={classes.text}>{t(`brands.${elem.key}`)}</p>
            <div className={classes.titleHolder}>
              <div className={classes.circle}>
                <img
                  src={elem.logo}
                  alt={`brand${elem.name}`}
                  className={classes.logo}
                />
              </div>
              <div>
                <a className={classes.title2} href={elem.website}>
                  {elem.name}
                </a>
              </div>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt={`${elem.name} lifestyle`}
              placeholderStyle={{ backgroundColor: `white` }}
              className={classes.img}
              imgStyle={{ objectPosition: "center center" }}
            />
          </div>
          <Hidden smDown>
            <div className={classes.imgContainer2}>
              <Img
                fluid={data.img2.childImageSharp.fluid}
                alt={`${elem.name} product`}
                placeholderStyle={{ backgroundColor: `white` }}
                className={classes.img2}
                imgStyle={{ objectPosition: "center center" }}
              />
            </div>
          </Hidden>
        </div>
      ))}
    </Container>
  )
}

export default Waxzam
