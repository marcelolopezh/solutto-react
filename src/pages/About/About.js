import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_solutto.jpeg";
import Grid from "@mui/material/Grid";

export default function About() {
  const pageTitle = "Quien Soy";
  const subTitle = "";
  const title = "Fernando Mardones Salazar";
  const content =
    "Fundador y director de Solutto circo compañía, al sur de Chile, su país de origen. Inicia su trayectoria en el mundo del circo en el año 2000. Cautivado por esta nueva forma de ver la vida decide seguir su sueño, que es hacer circo, viajar, crear, hacer reír, e ir nutriéndose de grandes referentes de la escena universal circense como: Leo Bassi (Ita.), Jesús Jara (Esp.), Luis Bruscas (Arg.), Andrew Jigalov (Rus.), Abner Eisenberg (Usa) Juan Carlos Muñoz/Baltabarin (Chi.), Chacovachi (Arg), entre otros.<br>Su proceso de investigación en esta arte comienza con malabares y de a poco va integrando otras áreas como; Clown, equilibrio y producción, a los cuales a dedicado más de 20 años de tu trayectoria.<br>Durante sus viajes se a puesto a prueba en diferentes culturas, logrando conectar con la esencia única de cualquier calle, parque o feria del mundo, eligiendo estos espacios como su escenario favorito.<br>Enamorado de esta forma de vida, continúa regalando risas y comunicando que es posible vivir en un mundo más amable.";
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
              <h3 className="content">{parse(content)}</h3>
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
