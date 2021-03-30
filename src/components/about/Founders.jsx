import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  flexItem: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 60,
    },
  },
  img: {
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },
  },
}))

function Founders() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container justifyContent="spaceBetween" className={classes.container}>
      <StaticImage
        src="../../assets/websiteImages/headshot-robin.jpg"
        alt="headshot robin"
        placeholder="blurred"
        className={classes.img}
      />
      <Hidden mdUp>
        <StaticImage
          src="../../assets/websiteImages/headshot-michi.png"
          alt="headshot michi"
          placeholder="blurred"
          className={classes.img}
        />
      </Hidden>
      <div className={classes.flexItem}>
        <p>{t("about.founders1")}</p>
        <p>{t("about.founders2")}</p>
        <p>{t("about.founders3")}</p>
      </div>
      <Hidden smDown>
        <StaticImage
          src="../../assets/websiteImages/headshot-michi.png"
          alt="headshot michi"
          placeholder="blurred"
          className={classes.img}
        />
      </Hidden>
    </Container>
  )
}

export default Founders
