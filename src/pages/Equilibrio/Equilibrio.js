import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_volare.jpeg";
import Grid from "@mui/material/Grid";

export default function equilibrio() {
  const pageTitle = "Equilibrio";
  const subTitle = "Payaso Solutto";
  const title = "Espectáculo de Circo-Teatro de Calle";
  const content =
    "Las habilidades de “Solutto” un intrépido payaso equilibrista, sobre su rola bola comienza el juego con los espectadores, quienes lo acompañan y disfrutan ser parte de la magia del show, es así como van apareciendo en escena malabares, equilibrios y sorpresas que mantienen al público cautivo y con ganas de más. La música, el clown y el bufón generan una atmosfera asombrosa y divertida disponible para toda la familia, en cualquier parte del mundo.";
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{pageTitle}</h1>
          <h2 className={"subTitle"}>{subTitle}</h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <h1 className="title">{title}</h1>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <h3 className="content">{parse(content)}</h3>
            </Grid>
            <Grid item xs={6}>
              <img
                src={img}
                style={{ width: "60%" }}
                className="center"
                alt="Cargando Solutto Img..."
              ></img>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
