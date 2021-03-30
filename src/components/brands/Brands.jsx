import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Gnarwall from "./Gnarwall"
import VanDerWaal from "./VanDerWaal"
import GreenFix from "./GreenFix"
import EisbachRiders from "./EisbachRiders"
import Waxzam from "./Waxzam"
import Suntribe from "./Suntribe"
import Roadtyping from "./Roadtyping"

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backgroundImg: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
}))

export default function Brands() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <div className={classes.headerContainer}>
        <StaticImage
          src="../../assets/websiteImages/surfers-walking-in-waves.jpg"
          alt="surfers walking in waves"
          placeholder="blurred"
          className={classes.backgroundImg}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{t("links.brands")}</h1>
        </div>
      </div>
      <EisbachRiders />
      <VanDerWaal />
      <Gnarwall />
      <Suntribe />
      <Waxzam />
      <GreenFix />
      <Roadtyping />
    </>
  )
}
