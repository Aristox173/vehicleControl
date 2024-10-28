import React from "react";
import Movimientos from "../Movimientos";
import { ingresosCardDetails } from "../../../data/cardDetails";

const Ingresos = () => {
  return (
    <Movimientos
      tipo="ingreso"
      title="Ingresos"
      agregarRoute="/ingresos/agregaringreso"
      cardDetails={ingresosCardDetails}
      eliminarMensaje="El ingreso"
    />
  );
};

export default Ingresos;
