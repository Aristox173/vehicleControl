import React from "react";
import { egresosCategorias } from "../../../data/constants";
import MovimientoForm from "../../components/MovimientoForm";

const AgregarEgreso = () => {
  return (
    <MovimientoForm
      tipo="egreso"
      categorias={egresosCategorias}
      rutaRetorno="/egresos"
    />
  );
};

export default AgregarEgreso;
