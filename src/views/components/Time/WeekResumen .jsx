// src/components/Resumen/WeekResumen.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DayResumen from "./DayResumen";
import { calcularTotal } from "../../../utils/grouping";

const WeekResumen = ({ week, days, getCardDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleWeek = () => {
    setExpanded(!expanded);
  };

  // Calcular totales de ingresos, egresos y valor neto para la semana
  const totalIngresos = calcularTotal(
    Object.values(days)
      .flat()
      .filter((mov) => mov.tipo === "ingreso")
  );
  const totalEgresos = calcularTotal(
    Object.values(days)
      .flat()
      .filter((mov) => mov.tipo === "egreso")
  );
  const valorNeto = (totalIngresos - totalEgresos).toFixed(2);

  // Ordenar días de forma descendente (más reciente a más antiguo)
  const diasOrdenados = Object.keys(days).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="mb-5">
      <h3
        className="text-xl font-semibold cursor-pointer flex items-center justify-between bg-gray-200 p-3 rounded-md shadow-sm"
        onClick={toggleWeek}
      >
        <span>{week}</span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-500" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-500" />
        )}
      </h3>
      {expanded && (
        <div className="ml-6 mt-4">
          {/* Tarjetas de resumen semanal */}
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

          {/* Detalles de los días de la semana */}
          {diasOrdenados.map((date) => (
            <DayResumen
              key={date}
              date={date}
              movements={days[date]}
              getCardDetails={getCardDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekResumen;
