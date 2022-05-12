import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Galeria from "./Galeria";
import "../../scss/style.scss";
import Fade from "react-reveal/Fade";
import DividerSolutto from "../../components/Divider/DividerSolutto";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const GaleriaHome = () => {
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
        <Fade left>
          <Container>
            <h1 className={"pageTitle"}>{info.data.galeria.pageTitle}</h1>
            <h2 className={"subTitle"}>{info.data.galeria.subTitle}</h2>
          </Container>
        </Fade>
      </div>
      <div className="gradientEspectaculos">
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
                value: { min: 1, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
        <Fade right>
          <Container className="bgSoluttoCirco">
            <h1 className="title">{info.data.galeria.title}</h1>
            <Galeria></Galeria>
          </Container>
        </Fade>

        <DividerSolutto />

        <Container fixed style={{ marginTop: "2rem" }}>
          <Fade right>
            <Grid container columnSpacing={3}>
              <Grid item xs={12} md={12}></Grid>
            </Grid>
          </Fade>
        </Container>

      </div>
    </Fragment>
  );
};
export default GaleriaHome;
