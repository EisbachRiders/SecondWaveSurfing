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

  return (
    <Container className={classes.container}>
      <Hidden smDown>
        {i18n.language === "de" ? (
          <StaticImage
            src="../../assets/websiteImages/sustainable-surf-solutions-de.png"
            alt="sustainable surf solutions"
            placeholder="blurred"
            className={classes.img}
          />
        ) : (
          <StaticImage
            src="../../assets/websiteImages/sustainable-surf-solutions-en.png"
            alt="sustainable surf solutions"
            placeholder="blurred"
            className={classes.img}
          />
        )}
      </Hidden>
      <Hidden mdUp>
        {i18n.language === "de" ? (
          <StaticImage
            src="../../assets/websiteImages/sustainable-surf-solutions-mobile-de.png"
            alt="sustainable surf solutions"
            placeholder="blurred"
            className={classes.img}
          />
        ) : (
          <StaticImage
            src="../../assets/websiteImages/sustainable-surf-solutions-mobile-en.png"
            alt="sustainable surf solutions"
            placeholder="blurred"
            className={classes.img}
          />
        )}
      </Hidden>
    </Container>
  )
}
