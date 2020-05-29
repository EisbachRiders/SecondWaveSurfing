import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"
import er from "../../assets/logos/eisbach-riders.png"
import shepps from "../../assets/logos/shepps-gnarwall.png"
import beeSwell from "../../assets/logos/bee-sweel-logo.jpg"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import greenfix from "../../assets/logos/greenfix.png"

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
  },
  title3: {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    textTransform: "lowercase",
    fontSize: 14,
    margin: 0,
    "&:hover": {
      color: theme.palette.primary.main,
    },
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
      er1: file(relativePath: { eq: "person-putting-on-surfboard-leash.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      er2: file(
        relativePath: { eq: "fiberglass-double-tab-fin-all-colors.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shepps1: file(
        relativePath: { eq: "gnarwall-hangers-with-equipment.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shepps2: file(relativePath: { eq: "gnarwall-products.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beeSwell1: file(
        relativePath: { eq: "bee-swell-wax-being-put-on-surfboard.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beeSwell2: file(relativePath: { eq: "wax-and-box-side-view.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      waal2: file(relativePath: { eq: "van-der-waal-surf-grip.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      waal1: file(relativePath: { eq: "van-der-waal-shortboard.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenfix1: file(relativePath: { eq: "greenfix-wax-on-surfboard.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenfix2: file(relativePath: { eq: "surf-wax-warm-water.jpg" }) {
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
    },
    {
      key: "shepps",
      name: "SHEPPS Gnarwall",
      website: "https://sheppsolutions.com/",
      logo: shepps,
    },
    {
      key: "beeSwell",
      name: "bee swell",
      website: "https://www.beeswell.com/",
      logo: beeSwell,
    },
    {
      key: "waal",
      name: "Van der Waal",
      website: "https://www.waal.co/",
      logo: vanderwaal,
    },
    {
      key: "greenfix",
      name: "GreenFIX",
      website: "https://www.greenfix.fr/",
      logo: greenfix,
    },
  ]

  return (
    <>
      <Container
        alignItems="center"
        justifyContent="spaceAround"
        background="gray"
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
      <Container background="gray">
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
              <p className={classes.title}>
                {t(`brands.${elem.key}_category`)}
              </p>
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
                  <p className={classes.title2}>{elem.name}</p>
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
            <div className={classes.imgContainer}>
              <Img
                fluid={data[`${elem.key}1`].childImageSharp.fluid}
                alt={`${elem.name} lifestyle`}
                placeholderStyle={{ backgroundColor: `white` }}
                className={classes.img}
                imgStyle={{ objectPosition: "center center" }}
              />
            </div>
            <Hidden smDown>
              <div className={classes.imgContainer2}>
                <Img
                  fluid={data[`${elem.key}2`].childImageSharp.fluid}
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
    </>
  )
}

export default Brands
