import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_volaree.png";
import Grid from "@mui/material/Grid";

export default function Volare() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.volare.pageTitle}</h1>
          <h2 className={"subTitle"}>{info.data.volare.subTitle}</h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={12}>
              <h1 className="title">{info.data.volare.title}</h1>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={7} className="paddingTop3 lineSpacing">
              <h3 className="content">{parse(info.data.volare.content)}</h3>
            </Grid>
            <Grid item xs={12} md={5}>
              <img
                src={img}
                width="100%"
                alt="Cargando Solutto Img..."
              ></img>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
