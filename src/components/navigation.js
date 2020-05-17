import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SideMenu from "./sidemenu.js"
import { MuiThemeProvider } from "@material-ui/core/styles"
import "../css/navigation.css"

function Navigation({ siteTitle }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="root">
        <AppBar color="primary" position="static">
          <Toolbar>
            <SideMenu />
            <Typography className="title" variant="h6" color="inherit" noWrap>
              {siteTitle}
            </Typography>
            <div className="grow" />
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  )
}

export default Navigation
