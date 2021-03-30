import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  img: {
    height: 300,
    width: 300,
  },
}))

export default function FeaturedProduct() {
  const classes = useStyles()

  return (
    <Container>
      <StaticImage
        src="../../assets/websiteImages/featured.jpg"
        alt="featured fin"
        placeholder="blurred"
        className={classes.img}
      />
    </Container>
  )
}
