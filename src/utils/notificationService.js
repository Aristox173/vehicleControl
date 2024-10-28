import Swal from "sweetalert2";

export const confirmDelete = (mensaje) => {
  return Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
  });
};

export const successDelete = (mensaje) => {
  return Swal.fire(
    "Eliminado",
    `${mensaje} ha sido eliminado correctamente`,
    "success"
  );
};

export const errorDelete = (mensaje) => {
  return Swal.fire(
    "Error",
    `Hubo un problema al eliminar ${mensaje.toLowerCase()}`,
    "error"
  );
};
