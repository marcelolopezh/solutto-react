import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_rola.jpg";
import Grid from "@mui/material/Grid";

export default function Equilibrio() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.equilibrio.pageTitle}</h1>
          <h2 className={"subTitle"}>{info.data.equilibrio.subTitle}</h2>
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
              <h1 className="title">{info.data.equilibrio.title}</h1>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img
                src={img}
                style={{ width: "100%" }}
                className="center"
                alt="Cargando Solutto Img..."
              ></img>
            </Grid>
            <Grid item xs={6}>
              <h3 className="content">{parse(info.data.equilibrio.content)}</h3>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
