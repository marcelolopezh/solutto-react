import { ConfigContext } from "../../providers/ConfigProvider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { Fragment, useContext } from "react";
import Container from "@mui/material/Container";
import "../../scss/style.scss";
import img from "../../assets/imgs/img_rola.jpg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export default function Contact() {
  const info = useContext(ConfigContext);
  return (
    <Fragment>
      <div
        className="container-purple"
        style={{ background: "#512b5b", paddingTop: "1rem" }}
      >
        <Container>
          <h1 className={"pageTitle"}>{info.data.contact.pageTitle}</h1>
        </Container>
      </div>
      <div
        className="container-black"
        style={{ background: "black", paddingBottom: "10rem" }}
      >
        <Container fixed>
          <Grid container className="justifyContent paddingTop3">
            <Grid item xs={12} md={8}>
              <img
                src={img}
                style={{ width: "100%" }}
                alt="Cargando Solutto Img..."
              ></img>
              <h1 className="title justifyContent">
                {info.data.contact.title}
              </h1>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="pageTitle">
                <Typography variant="h5">
                  <WhatsAppIcon style={{ color: "#512b5b", width: "5rem" }} />
                  +56954131523
                </Typography>
                <Typography variant="h5">
                  <FacebookIcon style={{ color: "#512b5b", width: "5rem" }} />{" "}
                  /payasosolutto
                </Typography>
                <Typography variant="h5">
                  <InstagramIcon style={{ color: "#512b5b", width: "5rem" }} />{" "}
                  @payasosolutto
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
