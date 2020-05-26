import React, { useState } from "react"
import { Link, Element } from "react-scroll"
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
  brands: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontFamily: "secondary",
    width: "100%",
    marginBottom: 30,
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
  img1: {
    flexBasis: "30%",
    width: "70%",
    height: 400,
  },
  img: {
    width: "100%",
    height: 400,
  },
  logoListContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  flexItem: {
    flexBasis: "40%",
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
  const [setActive] = useState("ER")
  const classes = useStyles()
  const { t } = useTranslation()

  const handleScroll = (to) => {
    setActive(to)
  }

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
      <Container>
        <div className={classes.logoListContainer}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="brands"
            placeholderStyle={{ backgroundColor: `blue` }}
            className={classes.img1}
            imgStyle={{ objectPosition: "center center" }}
          />

          <div className={classes.flexItem}>
            <p className={classes.tagline}>tagline</p>
            <h2 className={classes.header}>Second Wave Surfing</h2>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {/* {brands.map((elem, idx) => (
            <Link
              key={`logo${idx}`}
              to={elem.name}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleScroll(elem)}
              className={classes.link}
            >
              <img
                src={elem.logo}
                alt={`brand${elem.name}`}
                className={classes.logo}
              />
            </Link>
          ))} */}
        </div>
      </Container>
      <Container>
        {brands.map((elem, idx) => (
          <div
            className={clsx(classes.root, {
              [classes.reverse]: idx % 2 === 0,
            })}
            key={`brand${elem.name}`}
          >
            <Element name={elem.name} />
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
