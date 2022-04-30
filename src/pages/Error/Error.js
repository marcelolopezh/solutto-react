import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import "../../scss/style.scss";
export default function Error() {
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>Error</h1>
          <h2 className={"subTitle"}>Error 404 </h2>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <h1 className="title" style={{textAlign:"center",paddingTop:"5rem"}}>Lo sentimos, no hemos podido encontrar la página especificada</h1>
        </Container>
      </div>
    </Fragment>
  );
}
