import React, { useState } from "react"
import { Link, animateScroll as scroll, Element } from "react-scroll"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import clsx from "clsx"
import er from "../../assets/logos/eisbach-riders.png"
import erLifestyle from "../../assets/websiteImages/person-putting-on-surfboard-leash.jpg"
import shepps from "../../assets/logos/shepps-gnarwall.png"
import sheppsLifestyle from "../../assets/websiteImages/gnarwall-hangers-with-equipment.jpg"
import beeSwell from "../../assets/logos/bee-sweel-logo.jpg"
import beeSwellLifestyle from "../../assets/websiteImages/bee-swell-wax-being-put-on-surfboard.jpg"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import vanderwaalLifestyle from "../../assets/websiteImages/van-der-waal-surf-grip.png"
import greenfix from "../../assets/logos/greenfix.png"
import greenfixLifestyle from "../../assets/websiteImages/greenfix-wax-on-surfboard.png"

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
  imgContainer: {
    flexBasis: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "40%",
    },
  },
  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 14,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
  },
  title3: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textTransform: "lowercase",
    fontSize: 14,
    margin: 0,
    paddingLeft: 5,
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
  link: {
    cursor: "pointer",
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
      img: er,
      website: "https://eisbach-riders.com/",
      imgLifestyle: erLifestyle,
      category_en: "Fins & Leashes",
      category_de: "Flossen & Leinen",
      content_en:
        "Eisbach Riders is a surf brand from Munich, Germany that specializes in surf equipment and accessories. Their products cover surfboard fins and leashes for river surfing, stand-up paddling (SUP) as well as kitesurfing. Their focus is to provide sustainably packaged and affordable products so you can feel good about jumping back into the water.",
      content_de:
        "Eisbach Riders ist eine Surfmarke aus München, die sich auf Surfausrüstung und Zubehör spezialisiert hat. Ihre Produkte umfassen Surfbrettflossen und Leinen zum Flusssurfen, Stand-Up-Paddeln (SUP) sowie Kitesurfen. Ihr Fokus liegt auf der Bereitstellung nachhaltig verpackter und erschwinglicher Produkte, damit Sie sich wohl fühlen, wenn Sie wieder ins Wasser springen.",
    },
    {
      name: "shepps gnarwall",
      website: "https://sheppsolutions.com/",
      img: shepps,
      imgLifestyle: sheppsLifestyle,
      category_en: "Surfboard & Wetsuit Hangers",
      category_de: "Surfbrett & Neoprenanzug Kleiderbügel",
      content_en:
        "SHEPPSolutions is a Toronto, Canada based design team that formed in 2018. They develop high quality, elegant, and sustainable products made out of wood such as surfboard hangers, surfboard racks, wetsuit dry racks, hooks, hangers, and organizers. Their mission is to develop tools that perform one task as efficiently as possible.",
      content_de:
        "SHEPPSolutions ist ein in Toronto, Kanada, ansässiges Designteam, das 2018 gegründet wurde. Es entwickelt hochwertige, elegante und nachhaltige Produkte aus Holz wie Surfbrettaufhänger, Surfbretthalter, Neoprenanzug-Trockengestelle, Haken, Kleiderbügel und Organisatoren. Ihre Mission ist es, Werkzeuge zu entwickeln, die eine Aufgabe so effizient wie möglich ausführen.",
    },
    {
      name: "bee swell",
      website: "https://www.beeswell.com/",
      img: beeSwell,
      imgLifestyle: beeSwellLifestyle,
      category_en: "Organic Wax",
      category_de: "Bio-Wachs",
      content_en:
        "Bee Swell has a huge love and respect for the ocean and our planet which is why they created an eco-friendly surf wax. Bee Swell surf wax is made from ethically sourced beeswax and other natural and organic ingredients. This company is on a mission to build the Bee Swell Pollinator Sanctuary in Idaho, US that will be a place where the bees and other pollinators can thrive in natural lush habitat.",
      content_de:
        "Bee Swell hat eine große Liebe und Respekt für den Ozean und unseren Planeten, weshalb sie ein umweltfreundliches Surfwachs kreiert haben. Bee Swell Surfwachs wird aus Bienenwachs aus ethischen Quellen und anderen natürlichen und biologischen Zutaten hergestellt. Dieses Unternehmen hat die Mission, das Bee Swell Pollinator Sanctuary in Idaho, USA, zu errichten, in dem Bienen und andere Bestäuber in einem natürlichen, üppigen Lebensraum gedeihen können.",
    },
    {
      name: "van der waal",
      website: "https://www.waal.co/",
      img: vanderwaal,
      imgLifestyle: vanderwaalLifestyle,
      category_en: "Surfboard Grip",
      category_de: "Surfbrettgriff",
      content_en:
        "Van Der Waal surf grip allows you to stay on your board without wax. It is a clean, green alternative that is low maintenance and long-lasting made in Lisbon, Portugal. Van Der Waal Grip is for the common surfer, the everyday dude and dudette that rips on the same boards for a long time. A surfboard grip for the environmentally conscious.",
      content_de:
        "Mit dem Van Der Waal Surfgriff kannst du ohne Wachs auf deinem Board bleiben. Es ist eine saubere, umweltfreundliche Alternative, die wartungsarm und langlebig ist und in Lissabon, Portugal, hergestellt wird. Van Der Waal Grip ist für den gewöhnlichen Surfer, den alltäglichen Kerl und die Dudette, die lange Zeit auf denselben Brettern reißen. Ein Surfbrettgriff für Umweltbewusste.",
    },
    {
      name: "greenfix",
      website: "https://www.greenfix.fr/",
      img: greenfix,
      imgLifestyle: greenfixLifestyle,
      category_en: "Wax",
      category_de: "Wachs",
      content_en:
        "The team hails from the Basque country near the famous and iconic surf beaches of Biarritz, France. They have a range of products, all revolving around wax and cleaning products for your prized surfboards. Everything is sourced and made in France, insuring consistently high quality results with the up most care for our beloved planet.",
      content_de:
        "Das Team stammt aus dem Baskenland in der Nähe der berühmten und legendären Surfstrände von Biarritz, Frankreich. Sie haben eine Reihe von Produkten, die sich alle um Wachs und Reinigungsprodukte für Ihre wertvollen Surfbretter drehen. Alles wird in Frankreich bezogen und hergestellt, um gleichbleibend hochwertige Ergebnisse mit größter Sorgfalt für unseren geliebten Planeten zu gewährleisten.",
    },
  ]

  return (
    <>
      <Container background="primary">
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
              className={classes.link}
            >
              <img
                src={elem.img}
                alt={`brand${elem.name}`}
                className={classes.logo}
              />
            </Link>
          ))}
        </div>
      </Container>
      <Container>
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
                  src={elem.img}
                  alt={`brand${elem.name}`}
                  className={classes.logo}
                />
                <div>
                  <p className={classes.title}>
                    {elem[`category_${i18n.language}`]}
                  </p>
                  <div className={classes.titleHolder}>
                    <p className={classes.title2}>{`${elem.name} - `}</p>
                    <a
                      className={classes.title3}
                      href={elem.website}
                      rel="noopener"
                      target="_blank"
                    >
                      {t("links.officialWebsite")}
                    </a>
                  </div>
                </div>
              </div>
              <p>{elem[`content_${i18n.language}`]}</p>
            </div>
            <div className={classes.imgContainer}>
              <img
                src={elem.imgLifestyle}
                alt={`${elem.name}_lifestyle`}
                className={classes.img}
              />
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Brands
