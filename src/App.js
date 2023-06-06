import React from "react";
import Contenu from "./Components/Contenu/contenu";
import Toggle from "./Components/ToggleLangs/Toggle";
import ContextProvider from "./context/Context";
import "./Components/Contenu/i18n";
import { useTranslation, Trans } from "react-i18next";
import ToggleLangs from "./Components/ToggleLangs/Toggle";

function App() {
  const { t } = useTranslation();
  console.log(t);

  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
