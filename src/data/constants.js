import { MdDashboard } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { FaFileInvoiceDollar, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export const links = [
  {
    title: "HOME",
    links: [
      {
        name: "dashboard",
        displayName: "Dashboard",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Control",
    links: [
      {
        name: "ingresos",
        displayName: "Ingresos",
        icon: <FaSignInAlt />,
      },
      {
        name: "egresos",
        displayName: "Egresos",
        icon: <FaSignOutAlt />,
      },
      {
        name: "resumen",
        displayName: "Resumen",
        icon: <FaFileInvoiceDollar />,
      },
      {
        name: "conductor",
        displayName: "Conductor",
        icon: <IoCarSportSharp />,
      },
    ],
  },
];

export const ingresosCategorias = [
  { label: "Uber Tarjeta", value: "Uber Tarjeta" },
  { label: "Uber Efectivo", value: "Uber Efectivo" },
  { label: "Bono Uber", value: "Bono Uber" },
  { label: "Didi Tarjeta", value: "Didi Tarjeta" },
  { label: "Didi Efectivo", value: "Didi Efectivo" },
  { label: "Bono Didi", value: "Bono Didi" },
  { label: "Efectivo S/APP", value: "Efectivo S App" },
];

export const egresosCategorias = [
  { label: "Retenciones Uber", value: "Retenciones Uber" },
  { label: "Retenciones Didi", value: "Retenciones Didi" },
  { label: "Gasolina", value: "Gasolina" },
  { label: "Lavadora", value: "Lavadora" },
];
