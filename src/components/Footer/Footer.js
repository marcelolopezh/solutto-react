import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  const facebook = () => {
    window.open("http://facebook.com/", "_blank") ||
      window.location.replace("http://facebook.com/");
  };
  const instagram = () => {
    window.open("http://instagram.com/", "_blank") ||
      window.location.replace("http://instagram.com/");
  };
  const whatsapp = () => {
    window.open("http://whatsapp.com/", "_blank") ||
      window.location.replace("http://whatsapp.com/");
  };

  return (
    <>
      <div
        style={{
          background: " #fed352",
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
