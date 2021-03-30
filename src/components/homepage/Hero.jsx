import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
  },
  img: {
    width: "100%",
    height: "100%",
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <StaticImage
          src="../../assets/websiteImages/heroMobile.png"
          alt="surfers running into water"
          placeholder="blurred"
          className={classes.img}
        />
      </Hidden>
      <Hidden mdDown>
        <StaticImage
          src="../../assets/websiteImages/hero.png"
          alt="surfers running into water"
          placeholder="blurred"
          className={classes.img}
        />
      </Hidden>
    </div>
  )
}
