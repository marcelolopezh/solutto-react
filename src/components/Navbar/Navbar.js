import { ConfigContext } from "../../providers/ConfigProvider";
import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import GroupsIcon from "@mui/icons-material/Groups";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FestivalIcon from "@mui/icons-material/Festival";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ContactsIcon from "@mui/icons-material/Contacts";

import "../../scss/style.scss";
const ResponsiveAppBar = (props) => {
  const idioma = useContext(ConfigContext);

  const [anchorElNav, setAnchorElNav] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let ruta = window.location.pathname;
  if (ruta === "/") ruta = "/home";

  function iconSwitch(icon) {
    switch (icon) {
      case "compania":
        return <GroupsIcon />;
      case "espectaculos":
        return <TheaterComedyIcon />;
      case "circo":
        return <FestivalIcon />;
      case "galeria":
        return <InsertPhotoIcon />;
      case "contacto":
        return <ContactsIcon />;
    }
  }
  return (
    <AppBar position="static" style={{ background: "  #fed352" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ pr: 5, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {idioma.data.navbar.rutas.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={handleCloseNavMenu}
                  style={{
                    backgroundColor: "#fed352",
                    margin:"-0.4rem"
                  }}
                >
                  <Link to={"/" + page.page} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">
                      {iconSwitch(page.page)}
                      <span style={{marginLeft:"1rem"}}>{page.text}</span>
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "1.2rem",
            }}
          >
            {idioma.data.navbar.rutas.map((page) => (
              <Link
                to={"/" + page.page}
                key={page.page}
                style={{ textDecoration: "none" }}
              >
                <Button
                  hover={{ borderBottom: "2px solid #512b5b" }}
                  style={
                    ruta === "/" + page.page
                      ? { borderBottom: "2px solid #512b5b" }
                      : { border: "none" }
                  }
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    underline: "",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  {page.text} /
                </Button>
              </Link>
            ))}
          </Box>

          <Box>
            <Tooltip
              title={
                idioma.lang === "esp"
                  ? "Change to English"
                  : "Cambiar a Español"
              }
            >
              <span style={{ color: "black" }}>
                {idioma.lang === "esp" ? "Español" : "English"}
                <Switch
                  defaultChecked
                  color="warning"
                  onClick={() =>
                    idioma.setLanguage(idioma.lang === "eng" ? "esp" : "eng")
                  }
                />
              </span>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
