import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Day from "./Day";
import { calcularTotal } from "../../../utils/grouping";

const Week = ({ week, days, getCardDetails, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleWeek = () => {
    setExpanded(!expanded);
  };

  const totalWeek = calcularTotal(Object.values(days).flat());

  return (
    <div className="mb-5">
      <h3
        className="text-xl font-semibold cursor-pointer flex items-center justify-between bg-gray-200 p-3 rounded-md shadow-sm"
        onClick={toggleWeek}
      >
        <span>
          {week} - Total: ${totalWeek}
        </span>
        {expanded ? (
          <FaChevronUp className="ml-2 text-gray-500" />
        ) : (
          <FaChevronDown className="ml-2 text-gray-500" />
        )}
      </h3>
      {expanded && (
        <div className="ml-6">
          {Object.keys(days).map((date) => (
            <Day
              key={date}
              date={date}
              movements={days[date]}
              getCardDetails={getCardDetails}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Week;
