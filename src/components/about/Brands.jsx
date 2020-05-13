import React, { useState } from "react"
import clsx from "clsx"
import { Link, animateScroll as scroll, Element } from "react-scroll"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import ERlogo from "../../assets/logos/logoWithName.png"
import GreenFixLogo from "../../assets/logos/greenfix.png"
import BeeSwellLogo from "../../assets/logos/beeSwellLogo.jpg"
import SheppsGnarwallLogo from "../../assets/logos/sheppsgnarwall.png"
import VanDerWaalLogo from "../../assets/logos/vanderwaal.png"
// import GridList from "@material-ui/core/GridList"
// import GridListTile from "@material-ui/core/GridListTile"
import er2 from "../../assets/websiteImages/er2.jpg"
import er3 from "../../assets/websiteImages/er3.jpg"
import er4 from "../../assets/websiteImages/er4.jpg"
import greenfix2 from "../../assets/websiteImages/greenfix2.png"
import greenfix3 from "../../assets/websiteImages/greenfix3.jpg"
import greenfix4 from "../../assets/websiteImages/greenfix4.jpg"
import gnarwall2 from "../../assets/websiteImages/gnarwall2.jpg"
import gnarwall3 from "../../assets/websiteImages/gnarwall3.jpg"
import gnarwall4 from "../../assets/websiteImages/gnarwall4.jpg"
import beeswell2 from "../../assets/websiteImages/beeswell2.jpg"
import beeswell3 from "../../assets/websiteImages/beeswell3.jpg"
import beeswell4 from "../../assets/websiteImages/beeswell4.jpg"
import van2 from "../../assets/websiteImages/van2.png"
import van3 from "../../assets/websiteImages/van3.jpg"

const useStyles = makeStyles((theme) => ({
  brands: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontFamily: "secondary",
    width: "100%",
    marginBottom: 30,
  },
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 30,
  },
  reverse: {
    flexDirection: "row-reverse",
  },
  textContainer: {
    flexBasis: "100%",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "60%",
      padding: 60,
    },
  },
  gridContainer: {
    flexBasis: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "40%",
    },
  },
  gridList: {
    flexWrap: "wrap",
    background: theme.color.white,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 14,
    color: theme.palette.secondary.main,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    marginBottom: 15,
  },
  img: {
    width: "100%",
    height: 400,
  },
  logoListContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  logoContainer: {
    display: "flex",
  },
  logo: {
    height: 75,
    marginRight: 15,
  },
}))

function Brands() {
  const [active, setActive] = useState("ER")
  const classes = useStyles()
  const { i18n, t } = useTranslation()

  const handleScroll = (to) => {
    setActive(to)
  }

  const brands = [
    {
      name: "eisbach riders",
      category_en: "Fins & Leashes",
      category_de: "Flossen & Leinen",
      location: "Munich, Germany",
      content_en:
        "Eisbach Riders is a surf brand from Munich, Germany that specializes in surf equipment and accessories. Their products cover surfboard fins and leashes for river surfing, stand-up paddling (SUP) as well as kitesurfing. Their focus is to provide sustainably packaged and affordable products so you can feel good about jumping back into the water.",
      content_de:
        "Eisbach Riders ist eine Surfmarke aus München, die sich auf Surfausrüstung und Zubehör spezialisiert hat. Ihre Produkte umfassen Surfbrettflossen und Leinen zum Flusssurfen, Stand-Up-Paddeln (SUP) sowie Kitesurfen. Ihr Fokus liegt auf der Bereitstellung nachhaltig verpackter und erschwinglicher Produkte, damit Sie sich wohl fühlen, wenn Sie wieder ins Wasser springen.",
      tileData: [
        { img: ERlogo, cols: 1, title: "logo" },
        { img: er2, cols: 2, title: "guy carrying surfboard at beach" },
        { img: er3, cols: 2, title: "rainbow fins" },
        { img: er4, cols: 1, title: "fins in sand" },
      ],
    },

    {
      name: "shepps gnarwall",
      category_en: "Surfboard & Wetsuit Hangers",
      category_de: "Surfbrett & Neoprenanzug Kleiderbügel",
      location: "Toronto, Canada",
      content_en:
        "SHEPPSolutions is a Toronto, Canada based design team that formed in 2018. They develop high quality, elegant, and sustainable products made out of wood such as surfboard hangers, surfboard racks, wetsuit dry racks, hooks, hangers, and organizers. Their mission is to develop tools that perform one task as efficiently as possible.",
      content_de:
        "SHEPPSolutions ist ein in Toronto, Kanada, ansässiges Designteam, das 2018 gegründet wurde. Es entwickelt hochwertige, elegante und nachhaltige Produkte aus Holz wie Surfbrettaufhänger, Surfbretthalter, Neoprenanzug-Trockengestelle, Haken, Kleiderbügel und Organisatoren. Ihre Mission ist es, Werkzeuge zu entwickeln, die eine Aufgabe so effizient wie möglich ausführen.",
      tileData: [
        { img: SheppsGnarwallLogo, cols: 2, title: "logo" },
        { img: gnarwall2, cols: 1, title: "wood product parts" },
        { img: gnarwall3, cols: 2, title: "wetsuit hanger" },
        { img: gnarwall4, cols: 1, title: "surfboard in rack on wall" },
      ],
    },
    {
      name: "bee swell",
      category_en: "Organic Wax",
      category_de: "Bio-Wachs",
      location: "Idaho, USA",
      content_en:
        "Bee Swell has a huge love and respect for the ocean and our planet which is why they created an eco-friendly surf wax. Bee Swell surf wax is made from ethically sourced beeswax and other natural and organic ingredients. This company is on a mission to build the Bee Swell Pollinator Sanctuary in Idaho, US that will be a place where the bees and other pollinators can thrive in natural lush habitat.",
      content_de:
        "Bee Swell hat eine große Liebe und Respekt für den Ozean und unseren Planeten, weshalb sie ein umweltfreundliches Surfwachs kreiert haben. Bee Swell Surfwachs wird aus Bienenwachs aus ethischen Quellen und anderen natürlichen und biologischen Zutaten hergestellt. Dieses Unternehmen hat die Mission, das Bee Swell Pollinator Sanctuary in Idaho, USA, zu errichten, in dem Bienen und andere Bestäuber in einem natürlichen, üppigen Lebensraum gedeihen können.",
      tileData: [
        { img: BeeSwellLogo, cols: 1, title: "logo" },
        { img: beeswell3, cols: 2, title: "hand putting wax on board" },
        { img: beeswell2, cols: 2, title: "wax in sand" },
        { img: beeswell4, cols: 1, title: "wax with box" },
      ],
    },
    {
      name: "van der waal",
      category_en: "Surfboard Grip",
      category_de: "Surfbrettgriff",
      location: "Lisbon, Portugal",
      content_en:
        "Van Der Waal surf grip allows you to stay on your board without wax. It is a clean, green alternative that is low maintenance and long-lasting made in Lisbon, Portugal. Van Der Waal Grip is for the common surfer, the everyday dude and dudette that rips on the same boards for a long time. A surfboard grip for the environmentally conscious.",
      content_de:
        "Mit dem Van Der Waal Surfgriff kannst du ohne Wachs auf deinem Board bleiben. Es ist eine saubere, umweltfreundliche Alternative, die wartungsarm und langlebig ist und in Lissabon, Portugal, hergestellt wird. Van Der Waal Grip ist für den gewöhnlichen Surfer, den alltäglichen Kerl und die Dudette, die lange Zeit auf denselben Brettern reißen. Ein Surfbrettgriff für Umweltbewusste.",
      tileData: [
        { img: VanDerWaalLogo, cols: 1, title: "logo" },
        { img: van2, cols: 2, title: "grip on board" },
        { img: van3, cols: 1, title: "box of surf grip" },
      ],
    },
    {
      name: "green fix",
      category_en: "Wax",
      category_de: "Wachs",
      location: "Bayonne, France",
      content_en:
        "The team hails from the Basque country near the famous and iconic surf beaches of Biarritz, France. They have a range of products, all revolving around wax and cleaning products for your prized surfboards. Everything is sourced and made in France, insuring consistently high quality results with the up most care for our beloved planet.",
      content_de:
        "Das Team stammt aus dem Baskenland in der Nähe der berühmten und legendären Surfstrände von Biarritz, Frankreich. Sie haben eine Reihe von Produkten, die sich alle um Wachs und Reinigungsprodukte für Ihre wertvollen Surfbretter drehen. Alles wird in Frankreich bezogen und hergestellt, um gleichbleibend hochwertige Ergebnisse mit größter Sorgfalt für unseren geliebten Planeten zu gewährleisten.",
      tileData: [
        { img: GreenFixLogo, cols: 2, title: "logo" },
        { img: greenfix2, cols: 2, title: "hand putting wax on surfboard" },
        { img: greenfix4, cols: 1, title: "surf wax with box" },
        { img: greenfix3, cols: 1, title: "product details" },
      ],
    },
  ]
  return (
    <Container
      variant="center"
      className={classes.container}
      background="primary"
    >
      <Element name="brands" />
      <h1 className={classes.header}>{t("links.brands")}</h1>
      <div className={classes.logoListContainer}>
        {brands.map((elem, idx) => (
          <Link
            key={`logo${idx}`}
            to={elem.name}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleScroll(elem)}
          >
            <img
              src={elem.tileData[0].img}
              alt={`brand${elem.name}`}
              className={classes.logo}
            />
          </Link>
        ))}
      </div>
      {brands.map((elem, idx) => (
        <div
          className={clsx(classes.root, {
            [classes.reverse]: idx % 2 === 0,
          })}
          key={`brand${elem.name}`}
        >
          <Element name={elem.name} />
          <div className={classes.textContainer}>
            <div className={classes.logoContainer}>
              <img
                src={elem.tileData[0].img}
                alt={`brand${elem.name}`}
                className={classes.logo}
              />
              <div>
                <p className={classes.title}>
                  {elem[`category_${i18n.language}`]}
                </p>
                <p className={classes.title2}>{elem.name}</p>
              </div>
            </div>
            <p>{elem[`content_${i18n.language}`]}</p>
          </div>
          <div className={classes.gridContainer}>
            <img
              src={elem.tileData[1].img}
              alt={`brand${elem.name}`}
              className={classes.img}
            />
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Brands
