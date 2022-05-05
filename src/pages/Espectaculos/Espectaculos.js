import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_volaree.png";
import volare from "../../assets/imgs/img_volareee.png";
import Grid from "@mui/material/Grid";
import Fade from "react-reveal/Fade";
import DividerSolutto from "../../components/Divider/DividerSolutto";
import GaleriaVolare from "../Galeria/GaleriaVolare";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Espectaculos = () => {
  const info = useContext(ConfigContext);
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
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
      <div
        className="gradient"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 400,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 10,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#F7EC1E",
              },
              links: {
                color: "red",
                distance: 200,
                enable: true,
                opacity: 0.1,
                width: 4,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Container fixed>
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 className="title">{info.data.espectaculos.title}</h1>
              </Fade>
            </Grid>
          </Grid>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={7} className="paddingTop3 lineSpacing">
              <Fade left>
                <h3 className="content">
                  {parse(info.data.espectaculos.content)}
                </h3>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5}>
              <Fade right>
                <img
                  src={img}
                  className="frame"
                  width="100%"
                  alt="Cargando Solutto Img..."
                ></img>
              </Fade>
            </Grid>
          </Grid>
        </Container>
        <DividerSolutto />
        <Container fixed className="bgSolutto2008">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "white" }}>
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
        </Container>
        <DividerSolutto />

        <Container fixed className="bgSoluttoCirco">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "white" }}>
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

        <Container fixed className="bgSolutto2008">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "white" }}>
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
            </Grid>
          </Grid>
        </Container>

        <DividerSolutto />

        <Container fixed className="bgSolutto2008">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "white" }}>
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
        </Container>

        <DividerSolutto />

        <Container fixed className="">
          <Grid container>
            <Grid item xs={12}>
              <Fade left>
                <h1 style={{ color: "#512b5b" }}>
                  {info.data.espectaculos.title6}
                </h1>
              </Fade>
            </Grid>
          </Grid>

          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={7} className="paddingTop3 lineSpacing">
              <Fade left>
                <h2 className="content">
                  {parse(info.data.espectaculos.content6)}
                </h2>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5} className="">
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
          <GaleriaVolare />
        </Container>
      </div>
    </Fragment>
  );
};
export default Espectaculos;
