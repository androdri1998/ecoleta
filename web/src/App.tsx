import React, { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Routes from "./routes";

import enUS from "./i18n/en-US";
import ptBR from "./i18n/pt-BR";

import "./App.css";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": enUS,
    "pt-BR": ptBR,
  },
  lng: window.navigator.language,
  fallbackLng: "en-US",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes />
    </Suspense>
  );
}

export default App;
