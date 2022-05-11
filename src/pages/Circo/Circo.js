import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import Grid from "@mui/material/Grid";
import { Fade } from "react-reveal";

import c1 from "../../../src/assets/imgs/circo/1.jpg";
import c2 from "../../../src/assets/imgs/circo/2.jpg";
import c3 from "../../../src/assets/imgs/circo/3.jpg";


export default function Circo() {
  const info = useContext(ConfigContext);

  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Fade left>
          <Container>
            <h1 className={"pageTitle"}>{info.data.circo.pageTitle}</h1>
            <h2 className={"subTitle"}>{info.data.circo.subTitle}</h2>
          </Container>
        </Fade>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        {" "}
        <Fade right>
          <Container fixed>
            <Grid container>
              <Grid item xs={12}>
                <h1 className="title">{info.data.circo.title}</h1>
              </Grid>
            </Grid>
            <Grid container columnSpacing={3}>
              <Grid item xs={12} md={6}>
                <h3 className="content">{parse(info.data.circo.content)}</h3>
              </Grid>
              <Grid item xs={12} md={6} mt={4}>
                <img
                  src={c1}
                  alt="img..."
                  width={"100%"}
                  className="imgBorder"
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3}>
              <Grid item xs={2} md={6}>
                <img
                  src={c3}
                  alt="img..."
                  width={"100%"}
                  className="imgBorder"
                />
              </Grid>
              <Grid item xs={2} md={6}>
                <img
                  src={c2}
                  alt="img..."
                  width={"100%"}
                  className="imgBorder"
                />
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </div>
    </Fragment>
  );
}
