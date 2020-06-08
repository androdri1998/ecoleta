import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { LeafletMouseEvent } from "leaflet";
import axios from "axios";
import { useTranslation } from "react-i18next";

import CreatePointRender from "./CreatePointRender";

import { IUf, ICityResponse, IDataSelect } from "./types";
import api from "../../services/api";

const CreatePoint: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [ufs, setUfs] = useState<IDataSelect[]>([]);
  const [cities, setCities] = useState<IDataSelect[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormDate] = useState({
    email: "",
    name: "",
    whatsapp: "",
  });

  const [selectedUf, setSelectedUf] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  useEffect(() => {
    const loadUfs = async () => {
      const response = await axios.get<IUf[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setUfs(
        response.data.map((uf) => ({
          key: uf.sigla,
          text: uf.sigla,
          value: uf.sigla,
        }))
      );
    };

    loadUfs();
  }, []);

  useEffect(() => {
    if (selectedUf === "") return;

    const loadCities = async () => {
      const response = await axios.get<ICityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      );
      setCities(
        response.data.map((city) => ({
          key: String(city.id),
          text: city.nome,
          value: city.nome,
        }))
      );
    };

    loadCities();
  }, [selectedUf]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  }

  function handleClickMap(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormDate({ ...formData, [name]: value });
  }

  function handleSelectItem(newItems: number[]) {
    setSelectedItems(newItems);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;
    const image = selectedFile;

    const data = new FormData();

    if (image) {
      data.append("image", image);
    }
    data.append("name", name);
    data.append("email", email);
    data.append("whatsapp", whatsapp);
    data.append("uf", uf);
    data.append("city", city);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("items", items.join(","));

    try {
      await api.post("/points", data);
      history.push("/success-create-point");
    } catch (err) {
      alert(t("CANNOT_CREATE_POINT"));
    }
  }

  return (
    <CreatePointRender
      cities={cities}
      handleClickMap={handleClickMap}
      handleInputChange={handleInputChange}
      handleSelectCity={handleSelectCity}
      handleSelectItem={handleSelectItem}
      handleSelectUf={handleSelectUf}
      handleSubmit={handleSubmit}
      initialMapPosition={initialPosition}
      onSelectedFile={setSelectedFile}
      selectedCity={selectedCity}
      selectedMapPosition={selectedPosition}
      selectedUf={selectedUf}
      ufs={ufs}
      disabledSubmit={
        !formData.email ||
        !formData.whatsapp ||
        !formData.name ||
        !selectedUf ||
        !selectedCity ||
        selectedPosition[0] === 0 ||
        selectedItems.length === 0 ||
        !selectedFile
      }
    />
  );
};

export default CreatePoint;
