import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_circo2.jpg";
import Grid from "@mui/material/Grid";

export default function Circo() {
  const info = useContext(ConfigContext);

  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.circo.pageTitle}</h1>
          <h2 className={"subTitle"}>{info.data.circo.subTitle}</h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={12}>
              <h1 className="title">{info.data.circo.title}</h1>
            </Grid>
          </Grid>
          <h3 className="content">{parse(info.data.circo.content)}</h3>
          <Grid container className="justifyContent">
            <Grid item xs={12} md={8}>
              <img
                src={img}
                style={{ width: "100%" }}
                alt="Cargando Solutto Img..."
              ></img>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
