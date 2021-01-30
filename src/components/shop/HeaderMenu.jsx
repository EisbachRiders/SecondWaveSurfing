import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { useTranslation } from "react-i18next"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    width: "max-content",
    textTransform: "uppercase",
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  container: {
    display: "flex",
    padding: 15,
  },
  innerContainer: {
    paddingRight: 5,
  },
  bold: {
    marginBottom: 5,
    textTransform: "uppercase",
    color: theme.palette.common.black,
  },
  featuredLink: {
    textTransform: "uppercase",
    marginBottom: 15,
  },
  menuItem: {
    textTransform: "capitalize",
  },
  link: {
    color: theme.palette.common.black,
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

export default function HeaderMenu() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const brands = [
    "Eisbach Riders",
    "GreenFIX",
    "Roadtyping",
    "Gnarwall",
    "Suntribe",
    "Van der Waal",
    "WAX Z'AM",
  ]
  const categories = [
    "rapid-surfing",
    "sup",
    "fins",
    "leashes",
    "apparel",
    "accessories",
  ]

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        classes={{ root: classes.button }}
        onClick={handleToggle}
      >
        {t("links.shop")}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <div className={classes.container}>
                    <div className={classes.innerContainer}>
                      <Link to="/bestsellers" className={classes.link}>
                        <MenuItem
                          className={classes.featuredLink}
                          onClick={handleClose}
                        >
                          {t("shop.bestsellers")}
                        </MenuItem>
                      </Link>
                      <Link to="/trends" className={classes.link}>
                        <MenuItem
                          className={classes.featuredLink}
                          onClick={handleClose}
                        >
                          {t("shop.trending")}
                        </MenuItem>
                      </Link>
                    </div>
                    <div className={classes.innerContainer}>
                      <Link to="/brands" className={classes.link}>
                        <MenuItem
                          className={classes.bold}
                          onClick={handleClose}
                        >
                          {t("links.brands")}
                        </MenuItem>
                      </Link>
                      {brands.map((elem) => (
                        <Link to={`/shop/${elem}`} className={classes.link}>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleClose}
                          >
                            {elem}
                          </MenuItem>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <Link to="/products" className={classes.link}>
                        <MenuItem
                          className={classes.bold}
                          onClick={handleClose}
                        >
                          {t("links.products")}
                        </MenuItem>
                      </Link>
                      {categories.map((elem) => (
                        <Link to={`/shop/${elem}`} className={classes.link}>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleClose}
                          >
                            {elem}
                          </MenuItem>
                        </Link>
                      ))}
                    </div>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
