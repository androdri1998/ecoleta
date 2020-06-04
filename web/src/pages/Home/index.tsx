import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Your marketplace of the waste collection.</h1>
          {/* seu marketplace de coleta de resíduos */}
          <p>We help people find collection points efficiently</p>
          {/* Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente */}
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a collection point</strong>
            {/* cadastrar um novo ponto de coleta */}
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
