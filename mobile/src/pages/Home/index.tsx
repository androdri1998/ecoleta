import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import {
  IHandleToPoints,
  IUf,
  ICityResponse,
  ICity,
  IPropsIndex,
} from "./types";

import HomeRender from "./HomeRender";

const Home: React.FC<IPropsIndex> = () => {
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
    <HomeRender
      ufs={ufs.map((uf) => ({ key: uf, label: uf, value: uf }))}
      handleSelectUf={handleSelectUf}
      cities={cities.map((city) => ({
        key: String(city.id),
        label: city.name,
        value: city.name,
      }))}
      handleSelectCity={handleSelectCity}
      disabled={!ufSelected || !citySelected}
      onPressEnter={() =>
        handleNavigationToPoints({ city: citySelected, uf: ufSelected })
      }
    />
  );
};

export default Home;
