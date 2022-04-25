import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function SoluttoLayout(props) {
  const { children } = props;
  const [espEng, setEspEng] = useState(false);

  const changeLang = ()=>{
    setEspEng(!espEng)
    localStorage.setItem("espEng",espEng)
  }
  return (
    <>
      <div style={{ background: "#512b5b", height: "1rem" }}></div>
      <Navbar espEng={espEng} changeLang={changeLang}/>
      <div
        className="bodyContent"
        style={{ background: "#512b5b", mt: "-10rem"}}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
