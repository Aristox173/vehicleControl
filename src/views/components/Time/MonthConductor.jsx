import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import WeekConductor from "./WeekConductor";

const MonthConductor = ({ month, weeks, semanasOrdenadas }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleMonth = () => setExpanded(!expanded);

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
          {semanasOrdenadas.map((week) => (
            <WeekConductor key={week} week={week} days={weeks[week]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthConductor;
