import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  const facebook = () => {
    window.open("https://www.facebook.com/payasosolutto/", "_blank") ||
      window.location.replace("https://www.facebook.com/payasosolutto/");
  };
  const instagram = () => {
    window.open("https://instagram.com/payasosolutto", "_blank") ||
      window.location.replace("https://instagram.com/payasosolutto");
  };
  const whatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=56954131523&text=Hola%20Solutto,%20Me%20contacto%20desde%20tu%20p%C3%A1gina%20web&app_absent=0", "_blank") ||
      window.location.replace("https://api.whatsapp.com/send/?phone=56954131523&text=Hola%20Solutto,%20me%20contacto%20desde%20tu%20p%C3%A1gina%20web&app_absent=0");
  };

  return (
    <>
      <div
        style={{
          background: "#fed352",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          height: "3rem",
          borderTop: "5rem solid #512b5b",
          borderBottom: "3px solid #512b5b",
          paddingTop: "1rem",
        }}
      >
        <FacebookIcon
          style={{ color: "#512b5b", width: "5rem" }}
          onClick={() => facebook()}
        />
        <InstagramIcon
          style={{ color: "#512b5b", width: "5rem" }}
          onClick={() => instagram()}
        />
        <WhatsAppIcon
          style={{ color: "#512b5b", width: "5rem" }}
          onClick={() => whatsapp()}
        />
      </div>
    </>
  );
}
