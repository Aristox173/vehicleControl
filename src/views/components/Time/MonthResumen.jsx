// src/components/Resumen/MonthResumen.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import WeekResumen from "./WeekResumen ";
import { calcularTotal } from "../../../utils/grouping";

const MonthResumen = ({ month, weeks, semanasOrdenadas, getCardDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleMonth = () => {
    setExpanded(!expanded);
  };

  // Calcular totales de ingresos, egresos y valor neto para el mes
  const totalIngresos = calcularTotal(
    Object.values(weeks).flatMap((days) =>
      Object.values(days)
        .flat()
        .filter((mov) => mov.tipo === "ingreso")
    )
  );
  const totalEgresos = calcularTotal(
    Object.values(weeks).flatMap((days) =>
      Object.values(days)
        .flat()
        .filter((mov) => mov.tipo === "egreso")
    )
  );
  const valorNeto = (totalIngresos - totalEgresos).toFixed(2);

  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-bold mb-4 cursor-pointer flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
        onClick={toggleMonth}
      >
        <span>{month}</span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-600" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-600" />
        )}
      </h2>
      {expanded && (
        <div className="ml-4">
          {/* Tarjetas de resumen mensual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-green-700">Ingresos</h3>
              <p className="text-2xl font-bold text-green-800">
                ${totalIngresos}
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-red-700">Egresos</h3>
              <p className="text-2xl font-bold text-red-800">${totalEgresos}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-blue-700">
                Valor Neto
              </h3>
              <p className="text-2xl font-bold text-blue-800">${valorNeto}</p>
            </div>
          </div>

          {/* Detalles de las semanas del mes */}
          {semanasOrdenadas.map((week) => (
            <WeekResumen
              key={week}
              week={week}
              days={weeks[week]}
              getCardDetails={getCardDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthResumen;
