import React from "react";
import "../../scss/img-gallery.scss";
import "../../scss/style.scss";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/imgs/gallery/1.jpg";
import img2 from "../../assets/imgs/gallery/2.jpg";
import img3 from "../../assets/imgs/gallery/3.jpg";
import img4 from "../../assets/imgs/gallery/4.jpg";
import img5 from "../../assets/imgs/gallery/1.jpg";
import img6 from "../../assets/imgs/gallery/6.jpg";
import img7 from "../../assets/imgs/gallery/7.jpg";
import img8 from "../../assets/imgs/gallery/8.jpg";
import img9 from "../../assets/imgs/gallery/9.jpg";
import img10 from "../../assets/imgs/gallery/10.jpg";
import img11 from "../../assets/imgs/gallery/11.jpg";
import img12 from "../../assets/imgs/gallery/12.jpg";
import img13 from "../../assets/imgs/gallery/13.jpg";
import img14 from "../../assets/imgs/gallery/14.jpg";
import img15 from "../../assets/imgs/gallery/15.jpg";
import img16 from "../../assets/imgs/gallery/16.jpg";
import img17 from "../../assets/imgs/gallery/17.jpg";
import img18 from "../../assets/imgs/gallery/18.jpg";
import img19 from "../../assets/imgs/gallery/19.jpg";
import img20 from "../../assets/imgs/gallery/20.jpg";
import img21 from "../../assets/imgs/gallery/21.jpg";
import img22 from "../../assets/imgs/gallery/22.jpg";
import img23 from "../../assets/imgs/gallery/23.jpg";
import img24 from "../../assets/imgs/gallery/24.jpg";

import Grid from "@mui/material/Grid";

export default function Galeria() {
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
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
    {
      original: img17,
      thumbnail: img17,
    },
    {
      original: img18,
      thumbnail: img18,
    },
    {
      original: img19,
      thumbnail: img19,
    },
    {
      original: img20,
      thumbnail: img20,
    },
    {
      original: img21,
      thumbnail: img21,
    },
    {
      original: img22,
      thumbnail: img22,
    },
    {
      original: img23,
      thumbnail: img23,
    },
    {
      original: img24,
      thumbnail: img24,
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
