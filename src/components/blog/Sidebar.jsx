import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Hidden from "@material-ui/core/Hidden"
import LatestPosts from "./LatestPosts"
import PopularPosts from "./PopularPosts"
import InstagramWidget from "../instagram/InstagramWidget"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 15,
    marginBottom: 30,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    [theme.breakpoints.up("lg")]: {
      padding: 30,
    },
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    lineHeight: 1,
    textTransform: "lowercase",
    margin: "0 0 15px 0",
    fontFamily: "secondary",
  },
  img: { width: "75%", margin: "0 auto", marginBottom: 30 },
  text: {
    textAlign: "center",
  },
  link: {
    color: theme.palette.primary.main,
    paddingLeft: 5,
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexItem: {
    flexBasis: "48%",
  },
}))

export default function Sidebar() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("common.about")}</p>
        <div className={classes.imgContainer}>
          <StaticImage
            src="../../assets/websiteImages/surfer-looking-out-over-beach-with-t-shirt.jpg"
            alt="surfers looking out over beach with t-shirt"
            placeholder="blurred"
            className={classes.img}
          />
        </div>
        <p className={classes.text}>{t("sidebar.about")}</p>
      </Paper>

      {/* <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("common.subscribe")}</p>
      </Paper> */}
      <Hidden smDown mdUp>
        <div className={classes.mobileContainer}>
          <Paper
            className={clsx(classes.paper, classes.flexItem)}
            square
            elevation={0}
          >
            <p className={classes.title}>{t("sidebar.latest")}</p>
            <LatestPosts />
          </Paper>

          <Paper
            className={clsx(classes.paper, classes.flexItem)}
            square
            elevation={0}
          >
            <p className={classes.title}>{t("sidebar.popular")}</p>
            <PopularPosts />
          </Paper>
        </div>
      </Hidden>

      <Hidden only="sm">
        <Paper className={classes.paper} square elevation={0}>
          <p className={classes.title}>{t("sidebar.latest")}</p>
          <LatestPosts />
        </Paper>

        <Paper className={classes.paper} square elevation={0}>
          <p className={classes.title}>{t("sidebar.popular")}</p>
          <PopularPosts />
        </Paper>
      </Hidden>

      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>Instagram</p>
        <InstagramWidget />
      </Paper>
    </>
  )
}
