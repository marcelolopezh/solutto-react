import React, { useState, createContext } from "react";
import eng from "../lang/eng.json";
import esp from "../lang/esp.json";
export const ConfigContext = createContext();

export default function ConfigProvider(props) {
  const { children } = props;

  const [data, setData] = useState(esp);

  const [lang, setLang] = useState("esp");

  const setLanguage = (lang) => {
    setLang(lang);
    if (lang === "esp") {
      setData(esp);
    } else if (lang === "eng") {
      setData(eng);
    }
  };

  return (
    <ConfigContext.Provider
      value={{ setLanguage: setLanguage, lang: lang, data: data }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
