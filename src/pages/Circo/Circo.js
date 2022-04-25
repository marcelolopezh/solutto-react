import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_circo2.jpg";
import Grid from "@mui/material/Grid";

export default function Circo() {
  const pageTitle = "Circo";
  const subTitle = "Cía. Solutto Circo";
  const title = "Compañía Solutto Circo";
  const content =
    "La carpa de circo se utiliza para presentar varietés en donde se funden el estilo circense tradicional con el contemporáneo. Con capacidad de hasta 500 personas, logísticamente se puede trasladar a cualquier lugar, brindando la posibilidad de itinerar en donde sea necesario, logrando llegar hasta ahora, a más de 15.000 personas en la Región de La Araucanía.<br> Los elencos van rotando dependiendo del concepto de la varieté. En los espectáculos se utilizan diversas técnicas como: malabarismo, equilibrio, tela, trapecio y magia entre otros. Los artistas que participan pueden ser locales, nacionales e internacionales, brindando dinamismo y frescura a cada show. De esta forma nos aseguramos de mantener al público atento y siempre dispuesto a volver a disfrutar de cada espectáculo, generando así un vinculo y la necesidad de volver a la carpa.<br>La visión de este proyecto, es poder acercar el circo a lo largo y ancho de todo Chile, llevar este arte a las personas con escaso acceso a bienes culturales, descentralizando así la cultura";

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
