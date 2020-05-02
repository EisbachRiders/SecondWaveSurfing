import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  h2: {
    textAlign: "center",
    marginBottom: 30,
  },
}))

function Heading({ children }) {
  const classes = useStyles()
  return <h2 className={classes.h2}>{children}</h2>
}

export default Heading
