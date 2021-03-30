import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/styles"
import Container from "../ui/Container"
import logo from "../../assets/logos/logo.png"

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
  },
  h1: {
    marginBottom: 30,
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  item: {
    flexBasis: "100%",
    textAlign: "center",
    marginBottom: 30,
    background: theme.color.black,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      marginBottom: 45,
    },
  },
  img: {
    height: 400,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 270,
    },
    [theme.breakpoints.up("md")]: {
      height: 370,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
  text: {
    fontSize: 14,
    color: theme.color.white,
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      flexBasis: "49%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 32,
    },
  },
}))

export default function LinkTree() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      shop: file(
        relativePath: { eq: "sustainable-surf-solutions-mobile-en.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      onePercent: file(
        relativePath: {
          eq: "eisbach-riders-joins-1-percent-for-the-planet.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      recycledFins: file(relativePath: { eq: "quickLockAD-mobile.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      gnarwall: file(relativePath: { eq: "gnarwall-surfboard-hanging.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      provideSlide: file(relativePath: { eq: "provideTheSlide.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `)

  const links = [
    {
      title: "SWS Shop",
      img: "shop",
      link: "https://secondwavesurfing.com/shop/",
    },
    {
      title: "1% for the Planet",
      img: "onePercent",
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-joins-1-percent-for-the-planet/",
    },
    {
      title: "Recycled Quick-Lock Touring Fin",
      img: "recycledFins",
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-a-touring-fin-made-of-recycled-waste-material-for-stand-up-paddling-with-the-quick-lock-system/",
    },

    {
      title: "Surfboard Hangers from Gnarwall",
      img: "gnarwall",
      link:
        "https://secondwavesurfing.com/blog/product-insights-gnarwall-surfboard-hangers-from-SHEPPSolutions/",
    },
    {
      title: "Provide the Slide",
      img: "provideSlide",
      link:
        "https://secondwavesurfing.com/blog/provide-the-slide-collecting-and-donating-surfboards-for-liberia/",
    },
  ]

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={logo} alt="logo" className={classes.logo}></img>
      <h1 className={classes.h1}>Second Wave Surfing</h1>
      <div className={classes.container}>
        {links.map((elem, idx) => (
          <div className={classes.item} key={`link${idx}`}>
            <a href={elem.link} target="_blank" rel="noreferrer noopener">
              <GatsbyImage
                image={getImage(data[elem.img].childImageSharp.fluid)}
                alt={elem.title}
                className={classes.img}
              />

              <p className={classes.text}>{elem.title}</p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}
