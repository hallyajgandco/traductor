import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import SpanishFlag from "../../assets/spain.svg";
import { Context } from "../../context/Context";
import "./ToggleLangs.css";

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context);

  return (
    <div className="container-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchFlag} />
      <img onClick={() => toggleLang("EN")} src={EnglishFlag} />
      <img onClick={() => toggleLang("ES")} src={SpanishFlag} />
    </div>
  );
}
