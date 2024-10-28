import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MovimientoItem from "../MovimientoItem";
import { calcularTotal } from "../../../utils/grouping";

const Day = ({ date, movements, getCardDetails, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDay = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-5">
      <h4
        className="text-lg font-semibold cursor-pointer flex items-center justify-between bg-gray-50 p-2 rounded-md shadow-sm"
        onClick={toggleDay}
      >
        <span>
          {date} - Total: ${calcularTotal(movements)}
        </span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-400" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-400" />
        )}
      </h4>
      {expanded && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-2">
          {movements.map((movement) => (
            <MovimientoItem
              key={movement.id}
              movement={movement}
              getCardDetails={getCardDetails}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Day;
