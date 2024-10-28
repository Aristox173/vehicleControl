export const getWeekInMonth = (date) => {
  const dayOfMonth = date.getDate();
  return Math.ceil(dayOfMonth / 7);
};

export const groupByMonth = (data) => {
  return data.reduce((acc, item) => {
    const mes = item.fecha
      .toLocaleString("es-ES", {
        month: "long",
        year: "numeric",
      })
      .toUpperCase();
    if (!acc[mes]) {
      acc[mes] = [];
    }
    acc[mes].push(item);
    return acc;
  }, {});
};

export const groupByWeekAndDay = (data) => {
  const semanas = data.reduce((acc, item) => {
    const semana = `Semana ${getWeekInMonth(item.fecha)}`;
    if (!acc[semana]) {
      acc[semana] = [];
    }
    acc[semana].push(item);
    return acc;
  }, {});

  const semanasConDias = Object.keys(semanas).reduce((acc, semana) => {
    acc[semana] = semanas[semana].reduce((diasAcc, item) => {
      const fechaFormateada = item.fecha.toLocaleDateString();
      if (!diasAcc[fechaFormateada]) {
        diasAcc[fechaFormateada] = [];
      }
      diasAcc[fechaFormateada].push(item);
      return diasAcc;
    }, {});
    return acc;
  }, {});

  return semanasConDias;
};

export const calcularTotal = (data) => {
  // Asegurarse de que data sea siempre un array
  const safeData = Array.isArray(data) ? data : [];
  return safeData.reduce((sum, item) => sum + (item.monto || 0), 0).toFixed(2);
};
