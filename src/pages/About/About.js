import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_solutto.jpeg";
import Grid from "@mui/material/Grid";

export default function About() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.about.pageTitle}</h1>
          <h2 className={"subTitle"}>{info.data.about.subTitle}</h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={12}>
              <h1 className="title">{info.data.about.title}</h1>
              <h3 className="content lineSpacing">{parse(info.data.about.content)}</h3>
              <img
                src={img}
                style={{ width: "60%" }}
                className="justifyContent"
                alt="Cargando Solutto Img..."
              ></img>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
