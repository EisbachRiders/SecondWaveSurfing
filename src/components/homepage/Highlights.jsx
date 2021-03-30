import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  img: {
    width: "100%",
  },
}))

export default function Highlights() {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const imageDE = (
    <StaticImage
      src="../../assets/websiteImages/sustainable-surf-solutions-de.png"
      alt="sustainable surf solutions"
      placeholder="blurred"
      className={classes.img}
    />
  )
  const imageEN = (
    <StaticImage
      src="../../assets/websiteImages/sustainable-surf-solutions-en.png"
      alt="sustainable surf solutions"
      placeholder="blurred"
      className={classes.img}
    />
  )
  const mobileDE = (
    <StaticImage
      src="../../assets/websiteImages/sustainable-surf-solutions-mobile-de.png"
      alt="sustainable surf solutions"
      placeholder="blurred"
      className={classes.img}
    />
  )
  const mobileEN = (
    <StaticImage
      src="../../assets/websiteImages/sustainable-surf-solutions-mobile-en.png"
      alt="sustainable surf solutions"
      placeholder="blurred"
      className={classes.img}
    />
  )

  return (
    <Container className={classes.container}>
      {i18n.language === "de" && (
        <>
          <Hidden smDown>{imageDE}</Hidden>
          <Hidden smUp>{mobileDE}</Hidden>
        </>
      )}
      {i18n.language === "en" && (
        <>
          <Hidden smDown>{imageEN}</Hidden>
          <Hidden smUp>{mobileEN}</Hidden>
        </>
      )}
    </Container>
  )
}
