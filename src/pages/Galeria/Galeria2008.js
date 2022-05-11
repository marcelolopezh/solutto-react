import React from "react";
import "../../scss/img-gallery.scss";
import "../../scss/style.scss";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/imgs/2008/galeria/1.JPG";
import img2 from "../../assets/imgs/2008/galeria/2.JPG";
import img3 from "../../assets/imgs/2008/galeria/3.JPG";
import img4 from "../../assets/imgs/2008/galeria/4.JPG";
import img5 from "../../assets/imgs/2008/galeria/5.JPG";
import img6 from "../../assets/imgs/2008/galeria/6.JPG";
import Grid from "@mui/material/Grid";

export default function Galeria2008() {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    
  ];
  return (
    <>
      <Container fixed style={{ paddingTop: "3rem" }}>
        <Grid>
          <Grid item xs={12} md={12}>
            <ImageGallery items={images} additionalClass={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
