import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.css";

import logo from "../../assets/logo.svg";

const CreatePoint: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  async function handleSubmit() {
    history.push("/");
  }

  return (
    <div id="page-success-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
      </header>
      <main>
        <h1>{t("SUCCESS_TEXT_PAGE_SUCCESS")}</h1>
        <button onClick={handleSubmit}>{t("BACK_TO_HOME_PAGE_SUCCESS")}</button>
      </main>
    </div>
  );
};

export default CreatePoint;
