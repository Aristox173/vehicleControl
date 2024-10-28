// src/components/Resumen/DayResumen.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { calcularTotal } from "../../../utils/grouping";

const DayResumen = ({ date, movements }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDay = () => {
    setExpanded(!expanded);
  };

  // Calcular totales de ingresos, egresos y valor neto para el día
  const totalIngresos = calcularTotal(
    movements.filter((mov) => mov.tipo === "ingreso")
  );
  const totalEgresos = calcularTotal(
    movements.filter((mov) => mov.tipo === "egreso")
  );
  const valorNeto = (totalIngresos - totalEgresos).toFixed(2);

  return (
    <div className="mb-5">
      <h4
        className="text-lg font-semibold cursor-pointer flex items-center justify-between bg-gray-50 p-2 rounded-md shadow-sm"
        onClick={toggleDay}
      >
        <span>{date}</span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-400" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-400" />
        )}
      </h4>
      {expanded && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
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
            <h3 className="text-lg font-semibold text-blue-700">Valor Neto</h3>
            <p className="text-2xl font-bold text-blue-800">${valorNeto}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DayResumen;
