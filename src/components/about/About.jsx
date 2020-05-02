import React from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles((theme) => ({}))

function About() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container variant="center" className={classes.container}>
      <p>about</p>
    </Container>
  )
}

export default About
