import { ConfigContext } from "../../providers/ConfigProvider";

import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../../scss/style.scss";
import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

export default function Progress() {
  const idioma = useContext(ConfigContext);

  console.log(idioma)
  return (
    <Container className="bgSoluttoCirco" style={{height:"60vh",paddingTop:"1rem"}}>
      <Grid
        container
        spacing={12}
        style={{
          justifyContent: "right",
          marginBottom: "3rem",
          marginTop: "1px",
        }}
      >
        <Grid item xs={12} md={12}>
          <Fade top>
            <Typography variant="h1" className="pageTitle" style={{textAlign:"center"}}>
              {idioma.lang === "esp" ? "Sitio en Construcción" : "On Working"}
            </Typography>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
}
