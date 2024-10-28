import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Week from "./Week";
import { calcularTotal } from "../../../utils/grouping";

const Month = ({ month, weeks, getCardDetails, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleMonth = () => {
    setExpanded(!expanded);
  };

  const totalMonth = calcularTotal(
    Object.values(weeks).flatMap((days) => Object.values(days).flat())
  );

  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-bold mb-4 cursor-pointer flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
        onClick={toggleMonth}
      >
        <span>
          {month} - Total: ${totalMonth}
        </span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-600" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-600" />
        )}
      </h2>
      {expanded && (
        <div className="ml-4">
          {Object.keys(weeks).map((week) => (
            <Week
              key={week}
              week={week}
              days={weeks[week]}
              getCardDetails={getCardDetails}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Month;
