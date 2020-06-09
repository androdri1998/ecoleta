import React from "react";
import { AppLoading } from "expo";
import { StatusBar, Platform, NativeModules } from "react-native";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import Routes from "./src/routes";
import enUS from "./src/i18n/en_BR";
import ptBR from "./src/i18n/pt_BR";

const getLocaleByDevice = () => {
  const locale =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  return locale;
};

i18n.use(initReactI18next).init({
  resources: {
    en_BR: enUS,
    pt_BR: ptBR,
  },
  lng: getLocaleByDevice(),
  fallbackLng: "en_BR",

  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
