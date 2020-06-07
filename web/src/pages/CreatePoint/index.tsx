import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import axios from "axios";
import { useTranslation } from "react-i18next";

import MyDropzone from "../../components/Dropzone";

import { IItem, IUf, ICity, ICityResponse } from "./types";
import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";

const CreatePoint: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [items, setItems] = useState<IItem[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
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
    const loadItems = async () => {
      const response = await api.get("/items");
      setItems(response.data.results);
    };

    loadItems();
  }, []);

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
    if (selectedUf === "") return;

    const loadCities = async () => {
      const response = await axios.get<ICityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      );
      setCities(
        response.data.map((city) => ({
          id: city.id,
          name: city.nome,
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

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
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
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          {t("BACK_TO_HOME_PAGE_CREATE_POINT")}
        </Link>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>
          {t("TITLE_PART_1_PAGE_CREATE_POINT")} <br />
          {t("TITLE_PART_2_PAGE_CREATE_POINT")}
        </h1>

        <MyDropzone onFileUploaded={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>{t("ENTITY_DATA_PAGE_CREATE_POINT")}</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">{t("ENTITY_NAME_PAGE_CREATE_POINT")}</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">{t("EMAIL_PAGE_CREATE_POINT")}</label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="whatsapp">{t("WHATSAPP_PAGE_CREATE_POINT")}</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="whatsapp"
              id="whatsapp"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>{t("ADDRESS_PAGE_CREATE_POINT")}</h2>
            <span>{t("SELECT_ADDRESS_ON_MAP_PAGE_CREATE_POINT")}</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleClickMap}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">{t("STATE_PAGE_CREATE_POINT")}</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="0">{t("SELECT_STATE_PAGE_CREATE_POINT")}</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">{t("CITY_PAGE_CREATE_POINT")}</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">{t("SELECT_CITY_PAGE_CREATE_POINT")}</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>{t("COLLECTION_ITEMS_CITY_PAGE_CREATE_POINT")}</h2>
            <span>{t("SELECT_COLLECTION_ITEMS_CITY_PAGE_CREATE_POINT")}</span>
          </legend>

          <ul className="items-grid">
            {items.map((item) => (
              <li
                key={item.id}
                className={selectedItems.includes(item.id) ? "selected" : ""}
                onClick={() => handleSelectItem(item.id)}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button
          className={
            !formData.email ||
            !formData.whatsapp ||
            !formData.name ||
            !selectedUf ||
            !selectedCity ||
            selectedPosition[0] === 0 ||
            selectedItems.length === 0 ||
            !selectedFile
              ? "disabled"
              : ""
          }
          disabled={
            !formData.email ||
            !formData.whatsapp ||
            !formData.name ||
            !selectedUf ||
            !selectedCity ||
            selectedPosition[0] === 0 ||
            selectedItems.length === 0 ||
            !selectedFile
          }
          type="submit"
        >
          {t("BUTTON_REGISTER_POINT_CITY_PAGE_CREATE_POINT")}
        </button>
      </form>
    </div>
  );
};

export default CreatePoint;
