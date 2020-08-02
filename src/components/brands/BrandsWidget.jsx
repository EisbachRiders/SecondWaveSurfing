import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import er from "../../assets/logos/eisbach-riders.svg"
import shepps from "../../assets/logos/shepps-gnarwall.png"
import beeSwell from "../../assets/logos/bee-sweel-logo.jpg"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import greenfix from "../../assets/logos/greenfix.png"

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  link: {
    flexBasis: "20%",
    textAlign: "center",
    cursor: "pointer",
  },
  logo: {
    height: 75,
    width: "auto",
  },
}))

function BrandsWidget() {
  const classes = useStyles()
  const { t } = useTranslation()

  const brands = [
    { name: "eisbach riders", img: er },
    { name: "shepps gnarwall", img: shepps },
    { name: "bee swell", img: beeSwell },
    { name: "van der waal", img: vanderwaal },
    { name: "greenfix", img: greenfix },
  ]

  return (
    <Container variant="center" background="gray">
      <div className={classes.logoContainer}>
        {brands.map((elem, idx) => (
          <Link key={`logo${idx}`} to={"/brands"} className={classes.link}>
            <img
              src={elem.img}
              alt={`brand${elem.name}`}
              className={classes.logo}
            />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default BrandsWidget
