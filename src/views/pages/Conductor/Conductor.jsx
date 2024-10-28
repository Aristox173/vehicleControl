// src/views/pages/Conductor.jsx
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { useStateContext } from "../../../contexts/ContextProvider";
import useMovimientos from "../../../hooks/useMovimientos";
import { groupByMonth, groupByWeekAndDay } from "../../../utils/grouping";
import MonthConductor from "../../components/Time/MonthConductor";

const Conductor = () => {
  const { activeMenu } = useStateContext();
  const { movimientosData, loading, error } = useMovimientos("ingreso");

  // Agrupar los datos de ingresos por mes
  const movimientosAgrupadosPorMes = groupByMonth(movimientosData);
  const mesesOrdenados = Object.keys(movimientosAgrupadosPorMes).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ${
        activeMenu ? "w-1000" : ""
      }`}
    >
      <Header category="" title="Pagos al Conductor" />
      {loading && <p>Cargando datos...</p>}
      {error && <p>Error al cargar los datos: {error.message}</p>}

      {/* Renderizar los ingresos agrupados por mes, semana y día */}
      {mesesOrdenados.map((mes) => {
        const semanasConDias = groupByWeekAndDay(
          movimientosAgrupadosPorMes[mes]
        );

        const semanasOrdenadas = Object.keys(semanasConDias).sort(
          (a, b) => parseInt(b.split(" ")[1]) - parseInt(a.split(" ")[1])
        );

        return (
          <MonthConductor
            key={mes}
            month={mes}
            weeks={semanasConDias}
            semanasOrdenadas={semanasOrdenadas}
          />
        );
      })}
    </div>
  );
};

export default Conductor;
