import React, { useState } from "react";
import { Header, FormField } from "../components";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { showSuccessToast, handleError } from "../../utils/notification";
import { parseISO, addHours } from "date-fns";

const MovimientoForm = ({ tipo, categorias, rutaRetorno }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    categoria: "",
    fecha: "",
    monto: 0,
    tipo: tipo,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "monto" && value < 0) {
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fecha = addHours(parseISO(formData.fecha), 12);

    try {
      await addDoc(collection(db, "movimientos"), {
        categoria: formData.categoria,
        fecha: fecha,
        monto: parseFloat(formData.monto),
        tipo: formData.tipo,
      });

      showSuccessToast(
        `${tipo === "ingreso" ? "Ingreso" : "Egreso"} agregado exitosamente!`
      );
    } catch (error) {
      handleError(`Error al agregar el ${tipo}!`, error);
    }
  };

  const handleBack = () => {
    navigate(rutaRetorno);
  };

  return (
    <form
      className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"
      onSubmit={handleSubmit}
    >
      <Header
        category="Formulario"
        title={`Agregar ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`}
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <FormField
          type="date"
          required={true}
          name="fecha"
          label="Ingresar Fecha"
          value={formData.fecha}
          onChange={handleChange}
        />
        <FormField
          type="select"
          required={true}
          name="categoria"
          label="Ingresar Categoría"
          options={categorias}
          value={formData.categoria}
          onChange={handleChange}
        />
        <FormField
          type="number"
          required={true}
          name="monto"
          label="Ingresar Monto"
          value={formData.monto}
          onChange={handleChange}
          step="0.01"
          min="0"
        />

        <button
          type="submit"
          className="bg-[#32adff] text-white px-4 py-2 rounded-lg mb-5 shadow-md hover:bg-[#2583c2] transition-all duration-300"
        >
          Agregar {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        </button>
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mb-5 shadow-md hover:bg-gray-900 transition-all duration-300"
        >
          Volver
        </button>
      </div>
    </form>
  );
};

export default MovimientoForm;
