import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import axios from "axios";
import { View, ImageBackground, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from "./styles";
import { IHandleToPoints, IUf, ICityResponse, ICity } from "./types";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [citySelected, setCitySelected] = useState<string>("");
  const [ufSelected, setUfSelected] = useState<string>("");

  const [cities, setCities] = useState<ICity[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);

  useEffect(() => {
    const loadUfs = async () => {
      const response = await axios.get<IUf[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setUfs(response.data.map((uf) => uf.sigla));
    };

    loadUfs();
  }, []);

  useEffect(() => {
    if (ufSelected === "") return;

    const loadCities = async () => {
      const response = await axios.get<ICityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios`
      );
      setCities(
        response.data.map((city) => ({
          id: city.id,
          name: city.nome,
        }))
      );
    };

    loadCities();
  }, [ufSelected]);

  function handleSelectUf(uf: string) {
    setUfSelected(uf);
  }

  function handleSelectCity(city: string) {
    setCitySelected(city);
  }

  const handleNavigationToPoints = ({ city, uf }: IHandleToPoints) => {
    if (city && uf) {
      navigation.navigate("Points", { city, uf });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/home-background.png")}
      style={styles.container}
      imageStyle={{
        height: 368,
        width: 274,
      }}
    >
      <View style={styles.main}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.title}>
          Your marketplace of the waste collection.
          {/* seu marketplace de coleta de resíduos */}
        </Text>
        <Text style={styles.description}>
          We help people find collection points efficiently.
          {/* Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente */}
        </Text>
      </View>
      <View style={styles.footer}>
        <RNPickerSelect
          Icon={() => (
            <Icon
              style={{ marginTop: 16, marginRight: 10 }}
              name="chevron-down"
              size={20}
              color="#607d8b"
            />
          )}
          style={pickerSelectStyles}
          placeholder={{ label: "Select an UF" }}
          onValueChange={(value) => handleSelectUf(value)}
          items={ufs.map((uf) => ({ key: uf, label: uf, value: uf }))}
        />
        <RNPickerSelect
          disabled={!ufSelected}
          Icon={() => (
            <Icon
              style={{ marginTop: 16, marginRight: 10 }}
              name="chevron-down"
              size={20}
              color="#607d8b"
            />
          )}
          style={pickerSelectStyles}
          placeholder={{ label: "Select a city" }}
          onValueChange={(value) => handleSelectCity(value)}
          items={cities.map((city) => ({
            key: city.id,
            label: city.name,
            value: city.name,
          }))}
        />
        <RectButton
          style={[
            styles.button,
            !ufSelected || !citySelected ? styles.buttonDisabled : {},
          ]}
          onPress={() =>
            handleNavigationToPoints({ city: citySelected, uf: ufSelected })
          }
        >
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" />
            </Text>
          </View>
          <Text style={styles.buttonText}>Sign In</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
