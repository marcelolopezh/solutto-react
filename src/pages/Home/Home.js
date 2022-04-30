import { ConfigContext } from "../../providers/ConfigProvider";

import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import english from "../../assets/imgs/ingles.png";
import español from "../../assets/imgs/español.png";
import logoCuadrado from "../../assets/imgs/logo-cuadrado.png";
import "../../scss/home.scss";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Home() {
  let navigate = useNavigate();
  const idioma = useContext(ConfigContext);

  const goPageLang = (idiomaParam) => {
    idioma.setLanguage(idiomaParam === "eng" ? "eng" : "esp");
    return navigate("/compania");
  };
  return (
    <div className="bg">
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "10%",
          transform: "translate(-50%, -10%)",
        }}
      >
        <Grid
          container
          spacing={12}
          style={{
            justifyContent: "right",
            marginBottom: "3rem",
            marginTop: "1px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Fade top>
              <img src={logoCuadrado} width="100%" />
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={12}>
          <Grid item xs={12} md={6}>
            <Fade left>
              <img
                src={english}
                width="100%"
                alt="English Site"
                onClick={() => goPageLang("eng")}
              ></img>
              <Typography className="idiomaText" variant="h5">
                English
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade right>
              <img
                src={español}
                width="100%"
                alt="Sitio en Español"
                onClick={() => goPageLang("esp")}
              ></img>
              <Typography className="idiomaText" variant="h5">
                Español
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
