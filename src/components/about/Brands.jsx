import React from "react"
import clsx from "clsx"
import { Element } from "react-scroll"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import ERlogo from "../../assets/logos/logoWithName.png"
import GreenFixLogo from "../../assets/logos/greenfix.png"
import BeeSwellLogo from "../../assets/logos/beeSwellLogo.jpg"
import SheppsGnarwallLogo from "../../assets/logos/sheppsgnarwall.png"
import VanDerWaalLogo from "../../assets/logos/vanderwaal.png"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import er2 from "../../assets/websiteImages/er2.jpg"
import er3 from "../../assets/websiteImages/er3.jpg"
import er4 from "../../assets/websiteImages/er4.jpg"
import greenfix2 from "../../assets/websiteImages/greenfix2.jpg"
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
    color: theme.palette.primary.main,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    textTransform: "lowercase",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    marginBottom: 15,
  },
  img: {
    marginTop: -160,
  },
}))

function Brands() {
  const classes = useStyles()
  const { i18n, t } = useTranslation()

  const brands = [
    {
      name: "eisbach riders",
      category_en: "Fins & Leashes",
      category_de: "Flossen & Leinen",
      location: "Munich, Germany",
      content_en:
        "Eisbach Riders is a surf brand from Munich, Germany that specializes in surf equipment and accessories. They are passionate surfers with a mission to protect our playgrounds - the ocean and rivers that provide us so much enjoyment - by supporting local communities and efforts to preserve our water sources. Their focus is to provide sustainably packaged and affordable products so you can feel good about jumping back into the water.",
      content_de:
        "Eisbach Riders ist eine Surfmarke aus München, die sich auf Surfausrüstung und Zubehör spezialisiert hat. Sie sind leidenschaftliche Surfer mit der Mission, unsere Spielplätze - das Meer und die Flüsse, die uns so viel Freude bereiten - zu schützen, indem sie lokale Gemeinschaften unterstützen und sich bemühen, unsere Wasserquellen zu erhalten. Ihr Fokus liegt auf der Bereitstellung nachhaltig verpackter und erschwinglicher Produkte, damit Sie sich wohl fühlen, wenn Sie wieder ins Wasser springen.",
      tileData: [
        { img: ERlogo, cols: 1, title: "logo" },
        { img: er2, cols: 2, title: "guy carrying surfboard at beach" },
        { img: er3, cols: 2, title: "rainbow fins" },
        { img: er4, cols: 1, title: "fins in sand" },
      ],
    },
    {
      name: "green fix",
      category_en: "Wax",
      category_de: "Wachs",
      location: "Bayonne, France",
      content_en:
        "Developed in France, GreenFix offers surf wax for the eco-conscious surfer.",
      content_de:
        "GreenFix wurde in Frankreich entwickelt und bietet Surfwachs für umweltbewusste Surfer.",
      tileData: [
        { img: greenfix2, cols: 2, title: "hand putting wax on surfboard" },
        { img: greenfix4, cols: 1, title: "surf wax with box" },
        { img: GreenFixLogo, cols: 2, title: "logo" },
        { img: greenfix3, cols: 1, title: "product details" },
      ],
    },
    {
      name: "shepps gnarwall",
      category_en: "Surfboard & Wetsuit Hangers",
      category_de: "Surfbrett & Neoprenanzug Kleiderbügel",
      location: "Toronto, Canada",
      content_en:
        "SHEPPSolutions is a Toronto based design team that formed in 2018. Their mission is to develop tools that perform one task as efficiently as possible; to find solutions to everyday problems. They develop high quality, elegant, and sustainable products such as Surfboard hangers, Surfboard racks, wetsuit dry racks, hooks, hangers, and organizers.",
      content_de:
        "SHEPPSolutions ist ein in Toronto ansässiges Designteam, das 2018 gegründet wurde. Ihre Mission ist es, Tools zu entwickeln, die eine Aufgabe so effizient wie möglich ausführen. Lösungen für alltägliche Probleme zu finden. Sie entwickeln hochwertige, elegante und nachhaltige Produkte wie Surfbrett-Kleiderbügel, Surfbrett-Gestelle, Neoprenanzug-Trockengestelle, Haken, Kleiderbügel und Organisatoren.",
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
        "Bee Swell has a huge love and respect for the ocean and our planet which is why they created an eco-friendly surf wax.  Bee Swell surf wax is made from ethically sourced beeswax and other natural and organic ingredients. This company is on a mission to build the Bee Swell Pollinator Sanctuary in Idaho, that will be a place where the bees and other pollinators can thrive in natural lush habitat.",
      content_de:
        "Bee Swell hat eine große Liebe und Respekt für den Ozean und unseren Planeten, weshalb sie ein umweltfreundliches Surfwachs kreiert haben. Bee Swell Surfwachs wird aus Bienenwachs aus ethischen Quellen und anderen natürlichen und biologischen Zutaten hergestellt. Dieses Unternehmen hat die Mission, das Bee Swell Pollinator Sanctuary in Idaho zu errichten. Hier können Bienen und andere Bestäuber in einem natürlichen, üppigen Lebensraum gedeihen.",
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
        "Every surfer has to battle with the negatives of surf wax; re-application, melting, staining… well not anymore. Van Der Waal surf grip allows you to stay on your board without wax, a clean, green alternative that is low maintenance and long-lasting. Van Der Waal Grip is for the common surfer, the everyday dude and dudette that rips on the same boards for a long time. A surfboard grip for the environmentally conscious.",
      content_de:
        "Jeder Surfer muss mit den Negativen von Surfwachs kämpfen; erneutes Auftragen, Schmelzen, Färben ... nun, nicht mehr. Mit dem Van Der Waal Surfgriff kannst du ohne Wachs auf deinem Board bleiben, eine saubere, grüne Alternative, die wartungsarm und langlebig ist. Van Der Waal Grip ist für den gewöhnlichen Surfer, den alltäglichen Kerl und die Dudette, die lange Zeit auf denselben Brettern reißen. Ein Surfbrettgriff für Umweltbewusste.",
      tileData: [
        { img: van3, cols: 1, title: "box of surf grip" },
        { img: VanDerWaalLogo, cols: 1, title: "logo" },
        { img: van2, cols: 2, title: "grip on board" },
      ],
    },
  ]
  return (
    <Container variant="center" className={classes.container} background="gray">
      <Element name="brands"></Element>
      <h1 className={classes.header}>{t("links.brands")}</h1>
      {brands.map((elem, idx) => (
        <div
          className={clsx(classes.root, {
            [classes.reverse]: idx % 2 === 0,
          })}
          key={`brand${elem.name}`}
        >
          <div className={classes.textContainer}>
            <p className={classes.title}>{elem[`category_${i18n.language}`]}</p>
            <p className={classes.title2}>{elem.name}</p>
            <p>{elem[`content_${i18n.language}`]}</p>
          </div>
          <div className={classes.gridContainer}>
            <GridList
              className={classes.gridList}
              spacing={0}
              cols={idx === 4 ? 2 : 3}
            >
              {elem.tileData.map((tile) => (
                <GridListTile
                  key={tile.img}
                  cols={tile.cols || 1}
                  rows={tile.rows || 1}
                >
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Brands
