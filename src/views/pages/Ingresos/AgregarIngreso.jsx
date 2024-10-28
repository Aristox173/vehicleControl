import React from "react";
import { ingresosCategorias } from "../../../data/constants";
import MovimientoForm from "../../components/MovimientoForm";

const AgregarIngreso = () => {
  return (
    <MovimientoForm
      tipo="ingreso"
      categorias={ingresosCategorias}
      rutaRetorno="/ingresos"
    />
  );
};

export default AgregarIngreso;
