import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import MyDropzone from "../../components/MyDropzone";
import Field from "../../components/Field";
import FieldSelect from "../../components/FieldSelect";
import Map from "../../components/Map";
import ButtonDefault from "../../components/ButtonDefault";
import ListItems from "../../components/ListItems";

import { IPropsRender } from "./types";

import "./styles.css";

const CreatePointRender: React.FC<IPropsRender> = ({
  handleSubmit,
  onSelectedFile,
  handleInputChange,
  initialMapPosition,
  selectedMapPosition,
  handleClickMap,
  ufs,
  handleSelectCity,
  handleSelectUf,
  selectedUf,
  selectedCity,
  cities,
  handleSelectItem,
  disabledSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <div id="page-create-point">
      <Header
        rigthNav={
          <Link to="/">
            <FiArrowLeft />
            {t("BACK_TO_HOME_PAGE_CREATE_POINT")}
          </Link>
        }
      />
      <form onSubmit={handleSubmit}>
        <h1>
          {t("TITLE_PART_1_PAGE_CREATE_POINT")} <br />
          {t("TITLE_PART_2_PAGE_CREATE_POINT")}
        </h1>

        <MyDropzone onFileUploaded={onSelectedFile} />

        <fieldset>
          <legend>
            <h2>{t("ENTITY_DATA_PAGE_CREATE_POINT")}</h2>
          </legend>
          <Field
            htmlFor="name"
            nameLabel={t("ENTITY_NAME_PAGE_CREATE_POINT")}
            idInput="name"
            nameInput="name"
            type="text"
            onChangeInput={handleInputChange}
          />

          <div className="field-group">
            <Field
              htmlFor="email"
              nameLabel={t("EMAIL_PAGE_CREATE_POINT")}
              idInput="email"
              nameInput="email"
              type="email"
              onChangeInput={handleInputChange}
            />
          </div>
          <Field
            htmlFor="whatsapp"
            nameLabel={t("WHATSAPP_PAGE_CREATE_POINT")}
            idInput="whatsapp"
            nameInput="whatsapp"
            type="text"
            onChangeInput={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <legend>
            <h2>{t("ADDRESS_PAGE_CREATE_POINT")}</h2>
            <span>{t("SELECT_ADDRESS_ON_MAP_PAGE_CREATE_POINT")}</span>
          </legend>

          <Map
            initialPosition={initialMapPosition}
            handleClickMap={handleClickMap}
            selectedPosition={selectedMapPosition}
          />

          <div className="field-group">
            <FieldSelect
              onChangeSelect={handleSelectUf}
              value={selectedUf}
              htmlFor="uf"
              labelName={t("STATE_PAGE_CREATE_POINT")}
              data={ufs}
              nameInput="uf"
              idInput="uf"
              nameOptionDefault={t("SELECT_STATE_PAGE_CREATE_POINT")}
            />

            <FieldSelect
              onChangeSelect={handleSelectCity}
              value={selectedCity}
              htmlFor="city"
              labelName={t("CITY_PAGE_CREATE_POINT")}
              data={cities}
              nameInput="city"
              idInput="city"
              nameOptionDefault={t("SELECT_CITY_PAGE_CREATE_POINT")}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>{t("COLLECTION_ITEMS_CITY_PAGE_CREATE_POINT")}</h2>
            <span>{t("SELECT_COLLECTION_ITEMS_CITY_PAGE_CREATE_POINT")}</span>
          </legend>

          <ListItems onChangeItems={handleSelectItem} />
        </fieldset>

        <ButtonDefault
          type="submit"
          disabled={disabledSubmit}
          textButton={t("BUTTON_REGISTER_POINT_CITY_PAGE_CREATE_POINT")}
        />
      </form>
    </div>
  );
};

export default CreatePointRender;
