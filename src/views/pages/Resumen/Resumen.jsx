import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { useStateContext } from "../../../contexts/ContextProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import {
  groupByMonth,
  groupByWeekAndDay,
  calcularTotal,
} from "../../../utils/grouping";
import MonthResumen from "../../components/Time/MonthResumen";
import {
  ingresosCardDetails,
  egresosCardDetails,
  defaultCardDetails,
} from "../../../data/cardDetails";

const Resumen = () => {
  const { activeMenu } = useStateContext();
  const [movimientosData, setMovimientosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovimientos = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collection(db, "movimientos"));
        const movimientos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          fecha: doc.data().fecha
            ? new Date(doc.data().fecha.seconds * 1000)
            : new Date(),
        }));

        setMovimientosData(movimientos);
      } catch (error) {
        console.error("Error al obtener los movimientos: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovimientos();
  }, []);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const ingresos = movimientosData.filter((mov) => mov.tipo === "ingreso");
  const egresos = movimientosData.filter((mov) => mov.tipo === "egreso");

  const totalIngresos = calcularTotal(ingresos);
  const totalEgresos = calcularTotal(egresos);
  const valorNeto = (totalIngresos - totalEgresos).toFixed(2);

  const movimientosAgrupadosPorMes = groupByMonth(movimientosData);
  const mesesOrdenados = Object.keys(movimientosAgrupadosPorMes).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const getCardDetails = (categoria) =>
    ingresosCardDetails[categoria] ||
    egresosCardDetails[categoria] ||
    defaultCardDetails;

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ${
        activeMenu ? "w-1000" : ""
      }`}
    >
      <Header title="Resumen" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-green-700">
            Ingresos Totales
          </h3>
          <p className="text-2xl font-bold text-green-800">${totalIngresos}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-red-700">
            Egresos Totales
          </h3>
          <p className="text-2xl font-bold text-red-800">${totalEgresos}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-blue-700">Valor Neto</h3>
          <p className="text-2xl font-bold text-blue-800">${valorNeto}</p>
        </div>
      </div>

      {mesesOrdenados.map((mes) => {
        const semanasConDias = groupByWeekAndDay(
          movimientosAgrupadosPorMes[mes]
        );

        const semanasOrdenadas = Object.keys(semanasConDias).sort(
          (a, b) => parseInt(b.split(" ")[1]) - parseInt(a.split(" ")[1])
        );

        return (
          <MonthResumen
            key={mes}
            month={mes}
            weeks={semanasConDias}
            semanasOrdenadas={semanasOrdenadas}
            getCardDetails={getCardDetails}
          />
        );
      })}
    </div>
  );
};

export default Resumen;
