import Swal from "sweetalert2";

export const showSuccessToast = (
  mensaje,
  redireccionar = null,
  navigate = null,
  recargar = false
) => {
  Swal.fire({
    icon: "success",
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
    toast: true,
    position: "top-end",
  });

  if (redireccionar && navigate) {
    setTimeout(() => {
      navigate(redireccionar);
    }, 1500);
  }

  if (recargar) {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
};

export const handleError = (mensaje, error) => {
  console.error(mensaje, error);
  Swal.fire({
    icon: "error",
    title: mensaje,
    text: "Ocurrió un error. Inténtelo nuevamente!",
  });
};
