import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  img: {
    flexBasis: "80%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
    },
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
  text: {
    marginBottom: 30,
  },
}))

function About() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container
      alignItems="center"
      justifyContent="spaceAround"
      background="gray"
    >
      <StaticImage
        src="../../assets/websiteImages/brands.png"
        alt="all brands"
        placeholder="blurred"
        className={classes.img}
      />
      <div className={classes.flexItem}>
        <p className={classes.tagline}>{t("homepage.heroSubtitle")}</p>
        <p className={classes.text}>{t("homepage.about")}</p>
      </div>
    </Container>
  )
}

export default About
