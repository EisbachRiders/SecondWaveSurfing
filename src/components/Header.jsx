import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import LanguageIcon from "@material-ui/icons/Language"
import MenuIcon from "@material-ui/icons/Menu"
import Container from "./ui/Container"

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: 200,
    background: theme.palette.primary.main,
    boxShadow: "none",
  },
  toolbar: {
    width: "100%",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 700,
    fontSize: 20,
    color: theme.color.black,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  home: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      color: theme.color.black,
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  link: {
    textTransform: "uppercase",
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  linkActive: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.color.black,
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  icon: {
    color: theme.color.black,
    width: 32,
    height: 32,
    marginTop: 5,
    marginBottom: 5,
    "&:hover": {
      color: theme.palette.secondary.main,
      background: "transparent",
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
      margin: "0 30px 0 0",
    },
    "&:hover": {
      background: "transparent",
    },
  },
  listItemMobile: {
    borderBottom: `1px solid ${theme.color.gray}`,
    textAlign: "center",
  },
}))

function Header({ handleSetLang, location }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [active, setActive] = useState("home")
  const classes = useStyles()
  const { t } = useTranslation()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (lang) => {
    setAnchorEl(null)
    handleSetLang(lang)
  }

  const handleScrollToTop = () => {
    scroll.scrollToTop()
    setActive("home")
  }

  const handleScroll = (to) => {
    setActive(to)
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

  const links = ["brands", "about", "contact"]
  const mobileLinks = []

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Container padding="none">
        <Toolbar className={classes.toolbar} disableGutters>
          {location === "other" ? (
            <Link to="/" className={classes.home}>
              <p className={classes.logo}>Second Wave Surfing</p>
            </Link>
          ) : (
            <a onClick={handleScrollToTop} className={classes.home}>
              <p className={classes.logo}>Second Wave Surfing</p>
            </a>
          )}
          <Hidden smDown>
            <List
              component="nav"
              aria-label="website navigation"
              className={classes.linkContainer}
            >
              {links.map((elem, idx) => (
                <ListItem
                  button
                  key={`navItem${idx}`}
                  className={classes.listItem}
                >
                  {location === "other" ? (
                    <Link
                      to="/"
                      className={classes.link}
                      onClick={() => handleScroll(elem)}
                    >
                      {t(`links.${elem}`)}
                    </Link>
                  ) : (
                    <ScrollLink
                      to={elem}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => handleScroll(elem)}
                      className={
                        active === elem ? classes.linkActive : classes.link
                      }
                    >
                      {t(`links.${elem}`)}
                    </ScrollLink>
                  )}
                </ListItem>
              ))}
              <IconButton
                aria-controls="simple-menu"
                aria-label="language"
                aria-haspopup="true"
                onClick={handleClick}
                size="small"
              >
                <LanguageIcon className={classes.icon} alt="language" />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
                <MenuItem onClick={() => handleClose("de")}>DE</MenuItem>
              </Menu>
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
                    className={classes.listItem}
                  >
                    <Link
                      to="/"
                      className={classes.link}
                      onClick={() => handleScroll(elem)}
                    >
                      {t(`links.${elem}`)}
                    </Link>
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
