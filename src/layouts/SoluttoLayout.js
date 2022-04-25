import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Typography } from "@mui/material";
import "../scss/style.scss"
export default function SoluttoLayout(props) {
  const { children } = props;

  return (
    <>
      <div style={{ background: "#512b5b", height: "1rem" }}></div>
      <Navbar />
      <div
        className="bodyContent"
        style={{ background: "#512b5b", mt: "-10rem"}}
      >
        {children}
      </div>

      <Typography variant="h4" className="footerTitle" style={{fontFamily:"anthon"}}>
        www.solutto.cl
      </Typography>      <Footer />
    </>
  );
}
