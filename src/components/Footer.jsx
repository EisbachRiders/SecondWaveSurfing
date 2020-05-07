import React from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "./ui/Container"
import { Link } from "gatsby-theme-material-ui"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import ReplyIcon from "@material-ui/icons/Reply"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import Contact from "./Contact"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.color.white,
  },
  container: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  title: {
    textTransform: "lowercase",
    fontSize: 16,
    letterSpacing: 3,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  text: {
    textTransform: "capitalize",
    color: theme.color.black,
    letterSpacing: 2,
    marginBottom: 15,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  copyrightContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    color: theme.color.white,
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0,
    },
  },
  textSmall: {
    color: theme.color.white,
    fontSize: 12,
    textTransform: "capitalize",
    letterSpacing: 2,
    fontWeight: 500,
    padding: "0 10px",
    width: "49%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },

  link: {
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: 150,
    marginBottom: 30,
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    margin: "0 15px",
    [theme.breakpoints.up("md")]: {
      margin: "0 45px",
    },
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  socialContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  iconSocial: {
    color: theme.color.black,
    width: 22,
    height: 22,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  iconContainer: {
    display: "flex",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "25%",
      justifyContent: "space-around",
    },
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 30,
    [theme.breakpoints.up("sm")]: {
      width: 24,
      height: 24,
    },
    [theme.breakpoints.up("md")]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: 42,
      height: 42,
    },
  },
  feature: {
    fontSize: 16,
    letterSpacing: 3,
    marginTop: 0,
    marginBottom: 5,
    [theme.breakpoints.up("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 22,
    },
  },
  featureText: {
    marginTop: 0,
    color: theme.color.textLight,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
  copyright: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  margin: {
    marginTop: 30,
    marginBottom: 30,
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <footer className={classes.footer}>
      <Container justifyContent="center" className={classes.margin}>
        <Contact />
      </Container>

      <Container
        justifyContent="spaceBetween"
        background="black"
        alignItems="center"
        padding="none"
      >
        <div className={classes.copyrightContainer}>
          <Link
            to="/dataProtection"
            className={clsx(classes.textSmall, classes.link)}
          >
            {t("links.data")}
          </Link>
          |
          <Link
            to="/termsAndConditions"
            className={clsx(classes.textSmall, classes.link)}
          >
            {t("links.terms")}
          </Link>
          <Hidden smDown>|</Hidden>
          <Link to="/imprint" className={clsx(classes.textSmall, classes.link)}>
            {t("links.imprint")}
          </Link>
          |
          <Link to="/credit" className={clsx(classes.textSmall, classes.link)}>
            {t("links.credit")}
          </Link>
        </div>
        <p className={clsx(classes.textSmall, classes.copyright)}>
          &copy; Second Wave Surfing
        </p>
      </Container>
    </footer>
  )
}

export default Footer
