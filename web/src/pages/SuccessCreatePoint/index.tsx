import React from "react";
import { useHistory } from "react-router-dom";

import SuccessCreatePointRender from "./SuccessCreatePointRender";

const CreatePoint: React.FC = () => {
  const history = useHistory();

  async function handleSubmit() {
    history.push("/");
  }

  return <SuccessCreatePointRender handleSubmit={handleSubmit} />;
};

export default CreatePoint;
