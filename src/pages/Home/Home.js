import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import parse from "html-react-parser";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_circo.jpg";

export default function Home() {
  const pageTitle = "Inicio";
  const subTitle = "Cía. Solutto Circo";
  const title = "Compañía Solutto Circo";
  const content =
    "Fundada el año 2008 en la ciudad de Valdivia, Chile. Sus integrantes son Jocelyn Suazo, Javier Aroca, Marcelo López, Javier Flores y Fernando Mardones director de la compañía. <br>Durante el año 2009 la compañía se abre al mundo, con el primer viaje de su director a Europa, experimentando la aventura de trabajar el formato de circo-teatro callejero. <br>A partir del año 2010 se establece definitivamente en la ciudad de Temuco. Es en esta ciudad en donde se hace realidad el sueño de tener una carpa de circo, obteniendo un espacio propio en donde trabajar y crear sus espectáculos, generando varietés temáticas itinerantes con artistas nacionales y locales, organizando giras de formato callejero a lo largo del país. <br>Desde el año 2018 se expande al resto del mundo, visitando 3 continentes: Asia, Europa y Latinoamérica, presentando sus espectáculos en más de 20 países, A participado en festivales de tipo Busker como: “Kultur auf der Strasse” New Ulm, Alemania. “Elx Al Carrer” Elche, España. “Berlin Lach” Berlin, Alemania. “Sonho de Aurora” Luino, Italia. “Mezopotamya Sirk ve Sokak Sanatlan Festivali” San Liurfa, Turquia. Lacustre Fest” Villarrica, Chile.";

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
          <img
            src={img}
            style={{ width: "60%" }}
            className="center"
            alt="Cargando Solutto Img..."
          ></img>
          <h1 className="title">{title}</h1>
          <h3 className="content">{parse(content)}</h3>
        </Container>
      </div>
    </Fragment>
  );
}
