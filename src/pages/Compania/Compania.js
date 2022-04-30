import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import parse from "html-react-parser";
import "../../scss/style.scss";
import Fade from "react-reveal/Fade";
import fernandoMardones from "../../assets/imgs/fernandoMardones.png";
import DividerSolutto from "../../components/Divider/DividerSolutto";
export default function Compania() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Fade left>
          <Container >
            <h1 className={"pageTitle"}>{info.data.compania.pageTitle}</h1>
            <h2 className={"subTitle"}>{info.data.compania.subTitle}</h2>
          </Container>
        </Fade>
      </div>
      <div
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Fade right>
          <Container className="bgSolutto">
            <h1 className="title">{info.data.compania.title}</h1>
            <h3 className="content">{parse(info.data.compania.content)}</h3>
          </Container>
        </Fade>
        <DividerSolutto/>
        <Fade right>
          <Container fixed className="bgSolutto2" style={{ marginTop: "2rem" }}>
            <Grid container columnSpacing={0}>
              <Grid item md={7} xs={12}>
                <h1 className="titleFernando">{info.data.compania.title2}</h1>
                <h3 className="content">
                  {parse(info.data.compania.content2)}
                </h3>
              </Grid>
              <Grid item md={5} xs={12} style={{ textAlign: "center" }}>
                <img src={fernandoMardones} width={"70%"} />
                <h2 className="titleFernando">Fernando Mardones Salazar</h2>
              </Grid>
            </Grid>
          </Container>
        </Fade>
        <DividerSolutto/>
        <Fade right>
          <Container fixed className="bgSolutto2" >
            <h1 className="title">{info.data.compania.title3}</h1>
            <h3 className="content">{parse(info.data.compania.content3)}</h3>
          </Container>
        </Fade>
      </div>
    </Fragment>
  );
}
