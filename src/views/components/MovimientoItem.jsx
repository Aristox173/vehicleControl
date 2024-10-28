import React from "react";
import { FaTrash } from "react-icons/fa";

const MovimientoItem = ({ movement, getCardDetails, onDelete }) => {
  const { color, icon } = getCardDetails(movement.categoria);
  return (
    <div
      key={movement.id}
      className={`${color} border rounded-lg p-2 sm:p-3 md:p-4 shadow-md flex items-center justify-between`}
    >
      <div className="flex items-center">
        <div className="mr-2">{React.cloneElement(icon, { size: 20 })}</div>
        <div>
          <h4 className="text-sm md:text-lg font-bold mb-1">
            {movement.categoria}
          </h4>
          <p className="text-xs md:text-base">
            Monto: ${movement.monto.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(movement.id)}
        className="text-red-500 hover:text-red-700 transition duration-300"
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
};

export default MovimientoItem;
