import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import parse from "html-react-parser";
import "../../scss/style.scss";
import Fade from "react-reveal/Fade";
import fernandoMardones from "../../assets/imgs/fernandoMardones.png";
import DividerSolutto from "../../components/Divider/DividerSolutto";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import img1 from "../../../src/assets/imgs/producciones/1.JPG"
import img2 from "../../../src/assets/imgs/producciones/2.JPG"
import img3 from "../../../src/assets/imgs/producciones/3.JPG"

const Compania = () => {
  const info = useContext(ConfigContext);
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
        <Fade left>
          <Container>
            <h1 className={"pageTitle"}>{info.data.compania.pageTitle}</h1>
            <h2 className={"subTitle"}>{info.data.compania.subTitle}</h2>
          </Container>
        </Fade>
      </div>
      <div className="gradient">
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
            fpsLimit: 100,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
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
                  quantity: 0,
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
                value: 10,
              },
              opacity: {
                value: 0.5,
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
        <Fade right>
          <Container className="containerSolutto">
            <h1 className="title">{info.data.compania.title}</h1>
            <h3 className="content">{parse(info.data.compania.content)}</h3>
          </Container>
        </Fade>
        <DividerSolutto />
        <Fade right>
          <Container fixed className="containerSolutto" style={{ marginTop: "2rem" }}>
            <Grid container columnSpacing={0}>
              <Grid item md={7} xs={12}>
                <h1 className="titleFernando">{info.data.compania.title2}</h1>
                <h3 className="content">
                  {parse(info.data.compania.content2)}
                </h3>
              </Grid>
              <Grid item md={5} xs={12} style={{ textAlign: "center" }}>
                <img src={fernandoMardones} width={"70%"} className="frame" />
                <h2 className="titleFernando">Fernando Mardones Salazar</h2>
              </Grid>
            </Grid>
          </Container>
        </Fade>
        <DividerSolutto />
        <br />
        <Fade right>
          <Container fixed className="containerSolutto">
            <h1 className="title">{info.data.compania.title3}</h1>
            <h3 className="content">{parse(info.data.compania.content3)}</h3>
            <Grid container columnSpacing={4}>
              <Grid item xs={4} md={4}>
                <img src={img1} alt="img..." width={"100%"} className="imgBorder" />
              </Grid>
              <Grid item xs={4} md={4}>
                <img src={img3} alt="img..." width={"100%"} className="imgBorder" />
              </Grid>
              <Grid item xs={4} md={4}>
                <img src={img2} alt="img..." width={"100%"} className="imgBorder" />
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </div>
    </Fragment>
  );
};
export default Compania;
