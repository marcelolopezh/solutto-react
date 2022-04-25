import { ConfigContext } from "../../providers/ConfigProvider";

import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_circo.jpg";

export default function Home() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.home.pageTitle}</h1>
          <h2 className={"subTitle"}>{info.data.home.subTitle}</h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <img
            src={img}
            style={{ width: "60%" }}
            className="center"
            alt="Cargando Solutto Img..."
          ></img>
          <h1 className="title">{info.data.home.title}</h1>
          <h3 className="content">{parse(info.data.home.content)}</h3>
        </Container>
      </div>
    </Fragment>
  );
}
