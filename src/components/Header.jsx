import React, { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import MenuIcon from "@material-ui/icons/Menu"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "./ui/Container"
import logo from "../assets/logos/logo.png"
import HeaderMenu from "./shop/HeaderMenu"

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: 200,
    background: theme.color.white,
    boxShadow: "none",
  },
  transparentBackground: {
    background: "transparent",
  },
  colorBackground: {
    background: theme.color.white,
  },
  toolbar: {
    width: "100%",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    [theme.breakpoints.up("xs")]: {
      width: 50,
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  link: {
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
  icon: {
    color: theme.color.white,
    width: 18,
    height: 18,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuIcon: {
    color: theme.color.black,
    width: 48,
    height: 48,
  },
  listItem: {
    margin: "15px 30px 15px 15px",
    [theme.breakpoints.up("md")]: {
      margin: "0 15px 0 0",
    },
  },
  listItemLast: {
    margin: 15,
    minWidth: "max-content",
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  listItemMobile: {
    borderBottom: `1px solid ${theme.color.gray}`,
    textAlign: "center",
  },
  languageButton: {
    color: theme.color.white,
    minWidth: 50,
  },
  shopLink: {
    color: theme.color.black,
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "none",
    },
  },
  buttonOverride: {
    padding: 0,
    margin: 0,
    "&:hover": {
      background: "transparent",
    },
  },
}))

function Header({ headerVariant }) {
  const [drawer, setDrawer] = useState(false)
  const [openShop, setOpenShop] = useState(false)
  const classes = useStyles()
  const anchorRef = useRef(null)
  const { t, i18n } = useTranslation()
  const trigger = useScrollTrigger()

  const handleSetLang = () => {
    let newLng = i18n.language === "en" ? "de" : "en"
    i18n.changeLanguage(newLng)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawer(open)
  }

  const handleToggleShop = () => {
    setOpenShop((prevOpen) => !prevOpen)
  }

  const handleCloseShop = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpenShop(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpenShop(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openShop)
  useEffect(() => {
    if (prevOpen.current === true && openShop === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = openShop
  }, [openShop])

  const links = ["blog", "shop", "cart", "my-account"]
  const mobileLinks = []
  const shopCategories = [
    { en: "rapid-surfing", de: "rapid-surfing-de" },
    { en: "sup", de: "sup-de" },
    { en: "fins", de: "finnen" },
    { en: "leashes", de: "leashes-de" },
    { en: "apparel", de: "kleidung" },
    { en: "accessories", de: "zubehor" },
  ]

  return (
    <AppBar
      className={clsx(
        classes.appbar,
        headerVariant !== "transparent"
          ? classes.colorBackground
          : trigger
          ? classes.colorBackground
          : classes.transparentBackground
      )}
    >
      <Container
        alignItems="center"
        justifyContent="flexEnd"
        background="black"
        padding="none"
      >
        <IconButton
          href="https://www.facebook.com/secondwavesurfing"
          aria-label="facebook"
          size="small"
          rel="noopener"
          target="_blank"
        >
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/second_wave_surfing/"
          aria-label="instagram"
          size="small"
          rel="noopener"
          target="_blank"
        >
          <InstagramIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.pinterest.com/eisbachriders/"
          aria-label="pinterest"
          size="small"
          rel="noopener"
          target="_blank"
        >
          <PinterestIcon className={classes.icon} />
        </IconButton>
        <Button
          onClick={() => handleSetLang()}
          className={classes.languageButton}
        >
          {i18n.language}
        </Button>
      </Container>
      <Container padding="none">
        <Toolbar className={classes.toolbar} disableGutters>
          <Link to="/">
            <img
              src={logo}
              className={classes.logo}
              alt="second wave surfing logo"
            />
          </Link>
          <Hidden mdDown>
            <List
              component="nav"
              aria-label="website navigation"
              className={classes.linkContainer}
            >
              {links.map((elem, idx) => (
                <ListItem
                  button
                  key={`navItem${idx}`}
                  className={
                    idx === links.length - 1
                      ? classes.listItemLast
                      : classes.listItem
                  }
                >
                  {elem === "cart" ? (
                    <a
                      href={
                        i18n.language === "de"
                          ? "https://secondwavesurfing.com/shop/de/einkaufswagen/"
                          : "https://secondwavesurfing.com/shop/cart/"
                      }
                      className={classes.link}
                    >
                      {t(`links.${elem}`)}
                    </a>
                  ) : elem === "my-account" ? (
                    <a
                      href={
                        i18n.language === "de"
                          ? "https://secondwavesurfing.com/shop/de/mein-account/"
                          : "https://secondwavesurfing.com/shop/my-account/"
                      }
                      className={classes.link}
                    >
                      {t(`links.${elem}`)}
                    </a>
                  ) : elem === "shop" ? (
                    <>
                      <Button
                        ref={anchorRef}
                        aria-controls={openShop ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        onMouseOver={handleToggleShop}
                        classes={{ root: classes.link }}
                        href={
                          i18n.language === "de"
                            ? "https://secondwavesurfing.com/shop/de/"
                            : "https://secondwavesurfing.com/shop/"
                        }
                        className={clsx(classes.link, classes.buttonOverride)}
                      >
                        {elem}
                      </Button>
                      <Popper
                        open={openShop}
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
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleCloseShop}>
                                <MenuList
                                  autoFocusItem={openShop}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                >
                                  {shopCategories.map((elem) => (
                                    <a
                                      key={`product_link_${elem.en}`}
                                      href={
                                        i18n.language === "de"
                                          ? `https://secondwavesurfing.com/shop/de/produkt-kategorie/${elem.de}/`
                                          : `https://secondwavesurfing.com/shop/product-category/${elem.en}/`
                                      }
                                      className={classes.shopLink}
                                    >
                                      <MenuItem onClick={handleCloseShop}>
                                        {t(`shop.${elem.en}`)}
                                      </MenuItem>
                                    </a>
                                  ))}
                                  <a
                                    key={`product_link_${elem.en}`}
                                    href={
                                      i18n.language === "de"
                                        ? `https://secondwavesurfing.com/shop/de/produkte/`
                                        : `https://secondwavesurfing.com/shop/products/`
                                    }
                                    className={classes.shopLink}
                                  >
                                    <MenuItem onClick={handleCloseShop}>
                                      {t(`links.products`)}
                                    </MenuItem>
                                  </a>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>
                  ) : (
                    <Link to={`/${elem}`} className={classes.link}>
                      {t(`links.${elem}`)}
                    </Link>
                  )}
                </ListItem>
              ))}
              {process.env.NODE_ENV === "development" && (
                <ListItem>
                  <HeaderMenu link="/shop" title="dev shop" />
                </ListItem>
              )}
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={drawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List
                component="nav"
                aria-label="website navigation"
                className={classes.linkContainer}
              >
                {links.map((elem, idx) => (
                  <ListItem
                    button
                    key={`navItem${idx}`}
                    className={classes.listItemMobile}
                  >
                    {elem === "shop" ? (
                      <a
                        href="https://secondwavesurfing.com/shop/"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.link}
                      >
                        {t(`links.${elem}`)}
                      </a>
                    ) : elem === "cart" ? (
                      <a
                        href="https://secondwavesurfing.com/shop/cart/"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.link}
                      >
                        {t(`links.${elem}`)}
                      </a>
                    ) : elem === "my account" ? (
                      <a
                        href="https://secondwavesurfing.com/shop/my-account/"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.link}
                      >
                        {t(`links.${elem}`)}
                      </a>
                    ) : (
                      <Link to={`/${elem}`} className={classes.link}>
                        {t(`links.${elem}`)}
                      </Link>
                    )}
                  </ListItem>
                ))}
                {mobileLinks.map((elem, idx) => (
                  <ListItem
                    button
                    key={`navItem${idx}`}
                    className={classes.listItemMobile}
                  >
                    <Link to="/" className={classes.link}>
                      {t(`links.${elem}`)}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
