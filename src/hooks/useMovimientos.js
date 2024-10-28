import { useEffect, useState, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const useMovimientos = (tipo = null) => {
  const [movimientosData, setMovimientosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovimientos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = tipo
        ? query(collection(db, "movimientos"), where("tipo", "==", tipo))
        : collection(db, "movimientos");
      const querySnapshot = await getDocs(q);
      const movimientos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        fecha: doc.data().fecha
          ? new Date(doc.data().fecha.seconds * 1000)
          : new Date(),
      }));

      const movimientosOrdenados = movimientos.sort(
        (a, b) => b.fecha - a.fecha
      );
      setMovimientosData(movimientosOrdenados);
    } catch (error) {
      console.error(`Error al obtener los ${tipo || "movimientos"}:`, error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [tipo]);

  useEffect(() => {
    fetchMovimientos();
  }, [fetchMovimientos]);

  return { movimientosData, loading, error, refetch: fetchMovimientos };
};

export default useMovimientos;
