import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  img: {
    width: "100%",
    height: "100%",
    maxHeight: 600,
  },
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  flexItem: {
    flexBasis: "100%",
    position: "relative",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
      marginBottom: 0,
    },
  },
  textContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
  },
  text: {
    color: theme.color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
}))

export default function Trends() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container className={classes.container}>
      <h2 className={classes.header}>{t("homepage.trends")}</h2>
      <div className={classes.innerContainer}>
        <div className={classes.flexItem}>
          <StaticImage
            src="../../assets/websiteImages/van-der-waal-surf-grip.png"
            alt="van der waal surf grip"
            placeholder="blurred"
            className={classes.img}
          />
          <div className={classes.textContainer}>
            <p className={classes.text}> {t("homepage.trends1")}</p>
            <Button
              className={classes.button}
              aria-label="shop van der waal surf grip"
              variant="contained"
              color="primary"
              href="https://secondwavesurfing.com/shop/product/van-der-waal-surf-grip/"
            >
              {t("homepage.moreInfo")}
            </Button>
          </div>
        </div>
        <div className={classes.flexItem}>
          <StaticImage
            src="../../assets/websiteImages/gnarwall-surfboard-hanging.jpg"
            alt="gnarwall surfboard hanging"
            placeholder="blurred"
            className={classes.img}
          />
          <div className={classes.textContainer}>
            <p className={classes.text}>{t("homepage.trends2")}</p>
            <Button
              className={classes.button}
              aria-label="shop hidden surfboard hanger"
              variant="contained"
              color="primary"
              href="https://secondwavesurfing.com/shop/brand/gnarwall/"
            >
              {t("homepage.moreInfo")}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
