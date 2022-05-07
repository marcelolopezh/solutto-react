import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import volare from "../../assets/imgs/img_volareee.png";
import Grid from "@mui/material/Grid";
import Fade from "react-reveal/Fade";
import DividerSolutto from "../../components/Divider/DividerSolutto";
import GaleriaVolare from "../Galeria/GaleriaVolare";

import img1 from "../../../src/assets/imgs/equilibrio/1.jpg";
import img2 from "../../../src/assets/imgs/equilibrio/2.jpg";
import img3 from "../../../src/assets/imgs/equilibrio/3.jpg";

import v1 from "../../../src/assets/imgs/variete/1.jpg";
import v2 from "../../../src/assets/imgs/variete/2.JPG";
import v3 from "../../../src/assets/imgs/variete/3.jpg";

import do1 from "../../../src/assets/imgs/2008/1.jpeg"
import do2 from "../../../src/assets/imgs/2008/2.jpeg"
import do3 from "../../../src/assets/imgs/2008/3.jpeg"

const Espectaculos = () => {
  const info = useContext(ConfigContext);

  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <Fade right>
            <h1 className={"pageTitle"}>{info.data.espectaculos.pageTitle}</h1>
            <h2 className={"subTitle"}>{info.data.espectaculos.subTitle}</h2>
          </Fade>
        </Container>
      </div>
      <div className="gradientEspectaculos">
        <Container fixed className="bgSoluttoCirco vh100">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 className="title">{info.data.espectaculos.title}</h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={12} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content">
                  {parse(info.data.espectaculos.content)}
                </h3>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSoluttoCirco">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b", fontWeight: "bold" }}>
                  {info.data.espectaculos.title2}
                </h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={12} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content">
                  {parse(info.data.espectaculos.content2)}
                </h3>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
                <Grid item xs={12} md={4}>
                  <img
                    src={do1}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    src={do2}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    src={do3}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
              </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSoluttoCirco">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b", fontWeight: "bold" }}>
                  {info.data.espectaculos.title3}
                </h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={12} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content" style={{ position: "bottom" }}>
                  {parse(info.data.espectaculos.content3)}
                </h3>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSoluttoCirco">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b", fontWeight: "bold" }}>
                  {info.data.espectaculos.title4}
                </h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={12} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content">
                  {parse(info.data.espectaculos.content4)}
                </h3>
              </Fade>
              <Grid container columnSpacing={4}>
                <Grid item xs={12} md={4}>
                  <img
                    src={v1}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    src={v3}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <img
                    src={v2}
                    alt="img..."
                    width={"100%"}
                    className="imgBorder"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSoluttoCirco">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b", fontWeight: "bold" }}>
                  {info.data.espectaculos.title5}
                </h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={12} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content">
                  {parse(info.data.espectaculos.content5)}
                </h3>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={4}>
              <img
                src={img1}
                alt="img..."
                width={"100%"}
                className="imgBorder"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={img3}
                alt="img..."
                width={"100%"}
                className="imgBorder"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={img2}
                alt="img..."
                width={"100%"}
                className="imgBorder"
              />
            </Grid>
          </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSoluttoVolare">
          <Grid container>

            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b", fontWeight: "bold" }}>
                  {info.data.espectaculos.title6}
                </h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={7} className="paddingTop3 lineSpacing">
            <GaleriaVolare />

              <Fade left>
                <h2 className="content">
                  {parse(info.data.espectaculos.content6)}
                </h2>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5} className="bottomContent">
              <Fade rigth>
                <img
                  src={volare}
                  className="frame"
                  alt="Volare Img ..."
                  width={"100%"}
                />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};
export default Espectaculos;
