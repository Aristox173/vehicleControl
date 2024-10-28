import {
  FaCar,
  FaMoneyBillAlt,
  FaTaxi,
  FaHandHoldingUsd,
  FaGasPump,
  FaTools,
  FaExclamationTriangle,
  FaWallet,
  FaDollarSign,
} from "react-icons/fa";

export const ingresosCardDetails = {
  "Uber Tarjeta": {
    color: "bg-green-100 border-green-300",
    icon: <FaCar size={30} className="text-green-600" />,
  },
  "Uber Efectivo": {
    color: "bg-green-200 border-green-400",
    icon: <FaMoneyBillAlt size={30} className="text-green-700" />,
  },
  "Bono Uber": {
    color: "bg-green-300 border-green-500",
    icon: <FaHandHoldingUsd size={30} className="text-green-800" />,
  },
  "Didi Tarjeta": {
    color: "bg-blue-100 border-blue-300",
    icon: <FaTaxi size={30} className="text-blue-600" />,
  },
  "Didi Efectivo": {
    color: "bg-blue-200 border-blue-400",
    icon: <FaMoneyBillAlt size={30} className="text-blue-700" />,
  },
  "Bono Didi": {
    color: "bg-blue-300 border-blue-500",
    icon: <FaHandHoldingUsd size={30} className="text-blue-800" />,
  },
  "Efectivo S App": {
    color: "bg-teal-100 border-teal-300",
    icon: <FaWallet size={30} className="text-teal-600" />,
  },
};

export const egresosCardDetails = {
  "Retenciones Uber": {
    color: "bg-red-100 border-red-300",
    icon: <FaExclamationTriangle size={30} className="text-red-600" />,
  },
  "Retenciones Didi": {
    color: "bg-red-200 border-red-400",
    icon: <FaExclamationTriangle size={30} className="text-red-700" />,
  },
  Gasolina: {
    color: "bg-orange-100 border-orange-300",
    icon: <FaGasPump size={30} className="text-orange-600" />,
  },
  Lavadora: {
    color: "bg-gray-100 border-gray-300",
    icon: <FaTools size={30} className="text-gray-600" />,
  },
};

export const defaultCardDetails = {
  color: "bg-gray-200 border-gray-400",
  icon: <FaDollarSign size={30} className="text-gray-700" />,
};
