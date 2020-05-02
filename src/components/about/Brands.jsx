import React from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import ERlogo from "../../assets/logos/logoWithName.png"
import GreenFixLogo from "../../assets/logos/greenfix.png"
import GnarwallLogo from "../../assets/logos/gnarwall.png"
import BeeSwellLogo from "../../assets/logos/beeswell.png"
import SheppsLogo from "../../assets/logos/shepps.png"
import VanDerWaalLogo from "../../assets/logos/vanderwaal.png"

const useStyles = makeStyles((theme) => ({
  brands: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: "secondary",
    textAlign: "center",
    width: "100%",
    marginBottom: 30,
  },
  imgContainer: {
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 150,
    height: "auto",
    marginBottom: 15,
  },
  brandContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginTop: 0,
  },
}))

function Brands() {
  const classes = useStyles()
  const { t } = useTranslation()

  const logos = [
    {
      img: ERlogo,
      name: "eisbach riders",
      category: "Fins & Leashes",
      location: "Munich, Germany",
    },
    {
      img: GreenFixLogo,
      name: "green fix",
      category: "Wax",
      location: "Bayonne, France",
    },
    {
      img: GnarwallLogo,
      name: "gnarwall",
      category: "Surfboard & Wetsuit Hangers",
      location: "Toronto, Canada",
    },
    {
      img: BeeSwellLogo,
      name: "bee swell",
      category: "Organic Wax",
      location: "Idaho, USA",
    },
    {
      img: SheppsLogo,
      name: "shepps",
      category: "Surfboard & Wetsuit Hangers",
      location: "Toronto, Canada",
    },
    {
      img: VanDerWaalLogo,
      name: "van der waal",
      category: "Surfboard Grip",
      location: "Lisbon, Portugal",
    },
  ]
  return (
    <Container variant="center" className={classes.container}>
      <h1 className={classes.header}>{t("links.brands")}</h1>
      <div className={classes.brands}>
        {logos.map((elem) => (
          <div className={classes.brandContainer}>
            <div className={classes.imgContainer}>
              <img src={elem.img} alt={elem.name} className={classes.img} />
            </div>
            <p className={classes.text}>{elem.category}</p>
            <p className={classes.text}>{elem.location}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Brands
