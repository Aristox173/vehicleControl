import React from "react";
import Movimientos from "../Movimientos";
import { egresosCardDetails } from "../../../data/cardDetails";

const Egresos = () => {
  return (
    <Movimientos
      tipo="egreso"
      title="Egresos"
      agregarRoute="/egresos/agregaregreso"
      cardDetails={egresosCardDetails}
      eliminarMensaje="El egreso"
    />
  );
};

export default Egresos;
