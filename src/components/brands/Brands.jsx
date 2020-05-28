import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import er from "../../assets/logos/eisbach-riders.png"
import erLifestyle from "../../assets/websiteImages/person-putting-on-surfboard-leash.jpg"
import shepps from "../../assets/logos/shepps-gnarwall.png"
import sheppsLifestyle from "../../assets/websiteImages/gnarwall-hangers-with-equipment.jpg"
import beeSwell from "../../assets/logos/bee-sweel-logo.jpg"
import beeSwellLifestyle from "../../assets/websiteImages/bee-swell-wax-being-put-on-surfboard.jpg"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import vanderwaalLifestyle from "../../assets/websiteImages/van-der-waal-surf-grip.png"
import greenfix from "../../assets/logos/greenfix.png"
import greenfixLifestyle from "../../assets/websiteImages/greenfix-wax-on-surfboard.png"

const useStyles = makeStyles((theme) => ({
  img1: {
    flexBasis: "80%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      // height: 400,
    },
  },
  header: {
    fontFamily: "secondary",
    fontSize: 48,
    textTransform: "capitalize",
    margin: 0,
    width: "100%",
    textAlign: "center",
  },
  s: {
    fontSize: 72,
    lineHeight: 1,
  },
  tagline: {
    textTransform: "capitalize",
    fontWeight: "700",
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
    },
  },
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 30,
  },
  reverse: {
    flexDirection: "row-reverse",
  },
  textContainer: {
    flexBasis: "100%",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "60%",
      padding: 60,
    },
  },
  imgContainer: {
    flexBasis: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "40%",
    },
  },
  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 14,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
  },
  title3: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textTransform: "lowercase",
    fontSize: 14,
    margin: 0,
    paddingLeft: 5,
  },

  img: {
    width: "100%",
    height: 400,
  },
  logoContainer: {
    display: "flex",
  },
  logo: {
    height: 75,
    marginRight: 15,
  },
  link: {
    cursor: "pointer",
  },
}))

function Brands() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brands.png" }) {
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
      key: "er",
      name: "Eisbach Riders",
      website: "https://eisbach-riders.com/",
      logo: er,
      imgLifestyle: erLifestyle,
    },
    {
      key: "shepps",
      name: "SHEPPS Gnarwall",
      website: "https://sheppsolutions.com/",
      logo: shepps,
      imgLifestyle: sheppsLifestyle,
    },
    {
      key: "beeSwell",
      name: "bee swell",
      website: "https://www.beeswell.com/",
      logo: beeSwell,
      imgLifestyle: beeSwellLifestyle,
    },
    {
      key: "waal",
      name: "Van der Waal",
      website: "https://www.waal.co/",
      logo: vanderwaal,
      imgLifestyle: vanderwaalLifestyle,
    },
    {
      key: "greenfix",
      name: "GreenFIX",
      website: "https://www.greenfix.fr/",
      logo: greenfix,
      imgLifestyle: greenfixLifestyle,
    },
  ]

  return (
    <>
      <Container
        background="gray"
        alignItems="center"
        justifyContent="spaceAround"
      >
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="brands"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.img1}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.flexItem}>
          <p className={classes.tagline}>{t("homepage.heroSubtitle")}</p>
          <p className={classes.text}>{t("homepage.about")}</p>
        </div>
      </Container>
      <Container>
        <h2 className={clsx(classes.header, classes.center)}>
          {t("brands.ourBrands")}
        </h2>
        {brands.map((elem, idx) => (
          <div
            className={clsx(classes.root, {
              [classes.reverse]: idx % 2 === 0,
            })}
            key={`brand${elem.name}`}
          >
            <div className={classes.textContainer}>
              <div className={classes.logoContainer}>
                <img
                  src={elem.logo}
                  alt={`brand${elem.name}`}
                  className={classes.logo}
                />
                <div>
                  <p className={classes.title}>
                    {t(`brands.${elem.key}_category`)}
                  </p>
                  <div className={classes.titleHolder}>
                    <p className={classes.title2}>{`${elem.name} - `}</p>
                    <a
                      className={classes.title3}
                      href={elem.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("links.officialWebsite")}
                    </a>
                  </div>
                </div>
              </div>
              <p>{t(`brands.${elem.key}`)}</p>
            </div>
            <div className={classes.imgContainer}>
              <img
                src={elem.imgLifestyle}
                alt={`${elem.name}_lifestyle`}
                className={classes.img}
              />
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Brands
