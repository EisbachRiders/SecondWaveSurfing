import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/styles"
import Container from "../ui/Container"

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

  const links = [
    {
      title: "SWS Shop",
      link: "https://secondwavesurfing.com/shop/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/sustainable-surf-solutions-mobile-en.png"
          alt="SWS Shop"
          className={classes.img}
        />
      ),
    },
    {
      title: "1% for the Planet",
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-joins-1-percent-for-the-planet/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/eisbach-riders-joins-1-percent-for-the-planet.png"
          alt="1% for the Planet"
          className={classes.img}
        />
      ),
    },
    {
      title: "Recycled Quick-Lock Touring Fin",
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-a-touring-fin-made-of-recycled-waste-material-for-stand-up-paddling-with-the-quick-lock-system/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/quickLockAD-mobile.png"
          alt="Recycled Quick-Lock Touring Fin"
          className={classes.img}
        />
      ),
    },

    {
      title: "Surfboard Hangers from Gnarwall",
      link:
        "https://secondwavesurfing.com/blog/product-insights-gnarwall-surfboard-hangers-from-SHEPPSolutions/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/gnarwall-surfboard-hanging.jpg"
          alt="Surfboard Hangers from Gnarwall"
          className={classes.img}
        />
      ),
    },
    {
      title: "Provide the Slide",
      link:
        "https://secondwavesurfing.com/blog/provide-the-slide-collecting-and-donating-surfboards-for-liberia/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/provideTheSlide.png"
          alt="Provide the Slide"
          className={classes.img}
        />
      ),
    },
  ]

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <StaticImage
        src="../../assets/logos/logo.png"
        alt="logo"
        className={classes.logo}
      />
      <h1 className={classes.h1}>Second Wave Surfing</h1>
      <div className={classes.container}>
        {links.map((elem, idx) => (
          <div className={classes.item} key={`link${idx}`}>
            <a href={elem.link} target="_blank" rel="noreferrer noopener">
              {elem.img}
              <p className={classes.text}>{elem.title}</p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}
