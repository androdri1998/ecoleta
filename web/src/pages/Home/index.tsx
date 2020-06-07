import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.css";

import logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>{t("TITLE_PAGE_HOME")}</h1>
          <p>{t("DESCRIPTION_PAGE_HOME")}</p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>{t("BUTTON_TEXT_PAGE_HOME")}</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
