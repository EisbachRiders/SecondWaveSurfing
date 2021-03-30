import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
  reverse: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  text: {
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%",
      padding: 60,
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      height: 400,
    },
  },
  title: {
    fontFamily: "secondary",
    color: theme.palette.primary.main,
    fontSize: 18,
  },
}))

function AboutDetail() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container>
      <div className={clsx(classes.flex, classes.reverse)}>
        <StaticImage
          src="../../assets/websiteImages/picking-up-trash-in-river.jpg"
          alt="picking up trash in river"
          placeholder="blurred"
          className={classes.img}
        />
        <div className={classes.text}>
          <p className={classes.title}>{t("common.community")}</p>
          <p>{t("about.community")}</p>
        </div>
      </div>
      <div className={classes.flex}>
        <div className={classes.text}>
          <p className={classes.title}>{t("common.sustainability")}</p>
          <p>{t("about.sustainability")}</p>
        </div>
        <StaticImage
          src="../../assets/websiteImages/trash-found-at-beach.jpg"
          alt="trash found at beach"
          placeholder="blurred"
          className={classes.img}
        />
      </div>
    </Container>
  )
}

export default AboutDetail
