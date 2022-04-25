import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_volare.jpeg";
import Grid from "@mui/material/Grid";

export default function Volare() {
  const pageTitle = "Volaré";
  const subTitle = "El Aviador";
  const title = "Espectáculo de Circo-Teatro de Calle";
  const content =
    "El aviador junto a su fiel amigo de aventuras y copiloto preferido el pollo, te invitan a experimentar una aventura extraordinaria, un viaje entre aviones, mapas, riesgo, sorpresas, emoción y belleza. Toda la magia de la fantasía circense como principal ingrediente del juego, origina una especial conexión y complicidad con los espectadores dispuestos a disfrutar y ser parte de esta experiencia en donde la imaginación necesita alas para sostenerse. A partir de la lectura de un mapa de travesías, el espectáculo se funde entre el público y las destrezas de El aviador, quien transforma su rola bolas en un avión, herramienta clave en esta aventura llena de desafíos. El clown, el teatro físico y los malabares contribuyen a que este espectáculo tenga un idioma universal, para toda la familia.";

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
