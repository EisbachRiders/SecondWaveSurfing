import React from "react"
import SwipeableViews from "react-swipeable-views"
import { makeStyles } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"
import er from "../../assets/logos/eisbach-riders.svg"
import gnarwall from "../../assets/logos/gnarwall2.png"
import waxzam from "../../assets/logos/waxzam.png"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import greenfix from "../../assets/logos/greenfix.png"

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    flexBasis: "19%",
    textAlign: "center",
    cursor: "pointer",
  },
  logo: {
    height: 35,
    [theme.breakpoints.up("md")]: {
      height: 50,
    },
    [theme.breakpoints.up("lg")]: {
      height: 75,
    },
  },
  stepper: {
    background: "transparent",
  },
  stepperContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}))

const brands = [
  { name: "eisbach riders", img: er, link: "eisbach-riders" },
  { name: "gnarwall", img: gnarwall, link: "gnarwall" },
  { name: "waxzam", img: waxzam, link: "wax-zam" },
  { name: "van der waal", img: vanderwaal, link: "van-der-waal" },
  { name: "greenfix", img: greenfix, link: "greenfix" },
]

function BrandsWidget() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Container variant="center">
      <Hidden smDown>
        <div className={classes.logoContainer}>
          {brands.map((elem, idx) => (
            <a
              key={`logo${idx}`}
              href={`https://secondwavesurfing.com/shop/brand/${elem.link}/`}
              className={classes.link}
            >
              <img
                src={elem.img}
                alt={`brand${elem.name}`}
                className={classes.logo}
              />
            </a>
          ))}
        </div>
      </Hidden>
      <Hidden smUp>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className={classes.logoContainer}
        >
          <div className={classes.logoContainer}>
            <a
              href="https://secondwavesurfing.com/shop/brand/eisbach-riders/"
              className={classes.link}
            >
              <img src={er} alt="eisbach riders" className={classes.logo} />
            </a>
            <a
              href="https://secondwavesurfing.com/shop/brand/gnarwall/"
              className={classes.link}
            >
              <img src={gnarwall} alt="gnarwall" className={classes.logo} />
            </a>
            <a
              href="https://secondwavesurfing.com/shop/brand/wax-zam/"
              className={classes.link}
            >
              <img src={waxzam} alt="waxzam" className={classes.logo} />
            </a>
          </div>
          <div className={classes.logoContainer}>
            <a
              href="https://secondwavesurfing.com/shop/brand/van-der-waal/"
              className={classes.link}
            >
              <img
                src={vanderwaal}
                alt="van der waal"
                className={classes.logo}
              />
            </a>
            <a
              href="https://secondwavesurfing.com/shop/brand/greenfix/"
              className={classes.link}
            >
              <img src={greenfix} alt="greenfix" className={classes.logo} />
            </a>
          </div>
        </SwipeableViews>
        <div className={classes.stepperContainer}>
          <MobileStepper
            steps={2}
            position="static"
            activeStep={activeStep}
            className={classes.stepper}
          ></MobileStepper>
        </div>
      </Hidden>
    </Container>
  )
}

export default BrandsWidget
