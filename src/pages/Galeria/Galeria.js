import React from "react";
import "../../scss/img-gallery.scss";
import "../../scss/style.scss";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/imgs/gallery/1.jpg";
import img1_t from "../../assets/imgs/gallery-thumbnail/1.jpg";
import img2 from "../../assets/imgs/gallery/2.jpg";
import img2_t from "../../assets/imgs/gallery-thumbnail/2.jpg";
import img3 from "../../assets/imgs/gallery/3.jpg";
import img3_t from "../../assets/imgs/gallery-thumbnail/3.jpg";
import img4 from "../../assets/imgs/gallery/4.jpg";
import img4_t from "../../assets/imgs/gallery-thumbnail/4.jpg";
import img5 from "../../assets/imgs/gallery/1.jpg";
import img5_t from "../../assets/imgs/gallery-thumbnail/5.jpg";
import img6 from "../../assets/imgs/gallery/6.jpg";
import img6_t from "../../assets/imgs/gallery-thumbnail/6.jpg";
import img7 from "../../assets/imgs/gallery/7.jpg";
import img7_t from "../../assets/imgs/gallery-thumbnail/7.jpg";
import img8 from "../../assets/imgs/gallery/8.jpg";
import img8_t from "../../assets/imgs/gallery-thumbnail/8.jpg";
import img9 from "../../assets/imgs/gallery/9.jpg";
import img9_t from "../../assets/imgs/gallery-thumbnail/9.jpg";
import img10 from "../../assets/imgs/gallery/10.jpg";
import img10_t from "../../assets/imgs/gallery-thumbnail/10.jpg";
import img11 from "../../assets/imgs/gallery/11.jpg";
import img11_t from "../../assets/imgs/gallery-thumbnail/11.jpg";
import img12 from "../../assets/imgs/gallery/12.jpg";
import img12_t from "../../assets/imgs/gallery-thumbnail/12.jpg";
import img13 from "../../assets/imgs/gallery/13.jpg";
import img13_t from "../../assets/imgs/gallery-thumbnail/13.jpg";
import img14 from "../../assets/imgs/gallery/14.jpg";
import img14_t from "../../assets/imgs/gallery-thumbnail/14.jpg";
import img15 from "../../assets/imgs/gallery/15.jpg";
import img15_t from "../../assets/imgs/gallery-thumbnail/15.jpg";
import img16 from "../../assets/imgs/gallery/16.jpg";
import img16_t from "../../assets/imgs/gallery-thumbnail/16.jpg";
import img17 from "../../assets/imgs/gallery/17.jpg";
import img17_t from "../../assets/imgs/gallery-thumbnail/17.jpg";
import img18 from "../../assets/imgs/gallery/18.jpg";
import img18_t from "../../assets/imgs/gallery-thumbnail/18.jpg";
import img19 from "../../assets/imgs/gallery/19.jpg";
import img19_t from "../../assets/imgs/gallery-thumbnail/19.jpg";
import img20 from "../../assets/imgs/gallery/20.jpg";
import img20_t from "../../assets/imgs/gallery-thumbnail/20.jpg";
import img21 from "../../assets/imgs/gallery/21.jpg";
import img21_t from "../../assets/imgs/gallery-thumbnail/21.jpg";
import img22 from "../../assets/imgs/gallery/22.jpg";
import img22_t from "../../assets/imgs/gallery-thumbnail/22.jpg";
import img23 from "../../assets/imgs/gallery/23.jpg";
import img23_t from "../../assets/imgs/gallery-thumbnail/23.jpg";
import img24 from "../../assets/imgs/gallery/24.jpg";
import img24_t from "../../assets/imgs/gallery-thumbnail/24.jpg";

import Grid from "@mui/material/Grid";

export default function Galeria() {
  const images = [
    {
      original: img1,
      thumbnail: img1_t,
    },
    {
      original: img2,
      thumbnail: img2_t,
    },
    {
      original: img3,
      thumbnail: img3_t,
    },
    {
      original: img4,
      thumbnail: img4_t,
    },
    {
      original: img5,
      thumbnail: img5_t,
    },
    {
      original: img6,
      thumbnail: img6_t,
    },
    {
      original: img7,
      thumbnail: img7_t,
    },
    {
      original: img8,
      thumbnail: img8_t,
    },
    {
      original: img9,
      thumbnail: img9_t,
    },
    {
      original: img10,
      thumbnail: img10_t,
    },
    {
      original: img11,
      thumbnail: img11_t,
    },
    {
      original: img12,
      thumbnail: img12_t,
    },
    {
      original: img13,
      thumbnail: img13_t,
    },
    {
      original: img14,
      thumbnail: img14_t,
    },
    {
      original: img15,
      thumbnail: img15_t,
    },
    {
      original: img16,
      thumbnail: img16_t,
    },
    {
      original: img17,
      thumbnail: img17_t,
    },
    {
      original: img18,
      thumbnail: img18_t,
    },
    {
      original: img19,
      thumbnail: img19_t,
    },
    {
      original: img20,
      thumbnail: img20_t,
    },
    {
      original: img21,
      thumbnail: img21_t,
    },
    {
      original: img22,
      thumbnail: img22_t,
    },
    {
      original: img23,
      thumbnail: img23_t,
    },
    {
      original: img24,
      thumbnail: img24_t,
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
