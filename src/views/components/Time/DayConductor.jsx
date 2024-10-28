// src/components/Time/DayConductor.jsx
import React from "react";
import calcularPagoConductor from "../../../utils/calcularPagoConductor"; // Asegúrate de que esta función está en utils

const DayConductor = ({ date, movements }) => {
  // Calcular el ingreso total del día
  const totalIngreso = movements.reduce((sum, mov) => sum + mov.monto, 0);
  // Calcular el pago basado en el ingreso
  const pagoConductor = calcularPagoConductor(totalIngreso);

  return (
    <div className="bg-blue-50 p-3 rounded-lg shadow mb-2">
      <p className="text-lg">
        {date} - Ingreso Total: <strong>${totalIngreso.toFixed(2)}</strong>,
        Pago al Conductor: <strong>{pagoConductor}</strong>
      </p>
    </div>
  );
};

export default DayConductor;
