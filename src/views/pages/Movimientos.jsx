import React from "react";
import { Header } from "../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import useMovimientos from "../../hooks/useMovimientos";
import { groupByMonth, groupByWeekAndDay } from "../../utils/grouping";
import Month from "../components/Time/Month";
import { defaultCardDetails } from "../../data/cardDetails";
import { eliminarMovimiento } from "../../services/movimientosService";
import {
  confirmDelete,
  successDelete,
  errorDelete,
} from "../../utils/notificationService";

const Movimientos = ({
  tipo,
  title,
  agregarRoute,
  cardDetails,
  eliminarMensaje,
}) => {
  const { activeMenu } = useStateContext();
  const navigate = useNavigate();
  const { movimientosData, loading, error, refetch } = useMovimientos(tipo);

  const handleAgregar = () => {
    navigate(agregarRoute);
  };

  const getCardDetails = (categoria) => {
    return cardDetails[categoria] || defaultCardDetails;
  };

  const handleDelete = async (id) => {
    try {
      console.log("ID a eliminar:", id);
      const result = await confirmDelete(eliminarMensaje);
      if (result.isConfirmed) {
        console.log("Confirmado para eliminar el ID:", id);
        await eliminarMovimiento(id);
        console.log("Documento eliminado exitosamente:", id);
        successDelete(eliminarMensaje);
        refetch(); // Ahora refetch está definido
      } else {
        console.log("Eliminación cancelada para el ID:", id);
      }
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
      errorDelete(eliminarMensaje);
    }
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold">Cargando...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        Error al cargar los datos: {error.message}
      </p>
    );
  }

  const movimientosAgrupadosPorMes = groupByMonth(movimientosData);

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ${
        activeMenu ? "w-1000" : ""
      }`}
    >
      <Header category="" title={title} />
      <button
        onClick={handleAgregar}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-5 shadow-md hover:bg-blue-700 transition-all duration-300"
      >
        Agregar {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
      </button>

      <div>
        {Object.keys(movimientosAgrupadosPorMes).map((mes) => {
          const movimientosDelMes = movimientosAgrupadosPorMes[mes];
          const semanasConDias = groupByWeekAndDay(movimientosDelMes);

          return (
            <Month
              key={mes}
              month={mes}
              weeks={semanasConDias}
              getCardDetails={getCardDetails}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movimientos;
