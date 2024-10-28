// src/components/Conductor/WeekConductor.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DayConductor from "./DayConductor";

const WeekConductor = ({ week, days }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleWeek = () => setExpanded(!expanded);

  return (
    <div className="mb-4">
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
        <div className="ml-6">
          {Object.keys(days).map((date) => (
            <DayConductor key={date} date={date} movements={days[date]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekConductor;
