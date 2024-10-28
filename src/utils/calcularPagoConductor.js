// src/utils/calcularPagoConductor.js

const calcularPagoConductor = (ingreso) => {
  if (ingreso < 40) return "$0";
  if (ingreso >= 40 && ingreso <= 44.99)
    return `$${(10 + ((ingreso - 40) / 4.99) * (11.99 - 10)).toFixed(2)}`;
  if (ingreso >= 45 && ingreso <= 52.49)
    return `$${(12 + ((ingreso - 45) / 7.49) * (14.99 - 12)).toFixed(2)}`;
  if (ingreso >= 52.5 && ingreso <= 59.99)
    return `$${(15 + ((ingreso - 52.5) / 7.49) * (17.99 - 15)).toFixed(2)}`;
  if (ingreso >= 60 && ingreso <= 67.49)
    return `$${(18 + ((ingreso - 60) / 7.49) * (21.99 - 18)).toFixed(2)}`;
  if (ingreso >= 67.5 && ingreso <= 74.99)
    return `$${(22 + ((ingreso - 67.5) / 7.49) * (24.99 - 22)).toFixed(2)}`;
  if (ingreso === 75) return "$25.00";
  if (ingreso >= 75.01 && ingreso <= 82.49)
    return `$${(26 + ((ingreso - 75.01) / 7.48) * (27.99 - 26)).toFixed(2)}`;
  if (ingreso >= 82.5 && ingreso <= 89.99)
    return `$${(28 + ((ingreso - 82.5) / 7.49) * (29.99 - 28)).toFixed(2)}`;
  if (ingreso >= 90 && ingreso <= 97.49)
    return `$${(30 + ((ingreso - 90) / 7.49) * (32.99 - 30)).toFixed(2)}`;
  if (ingreso >= 97.5 && ingreso <= 104.99)
    return `$${(33 + ((ingreso - 97.5) / 7.49) * (34.99 - 33)).toFixed(2)}`;
  if (ingreso >= 105 && ingreso <= 112.49)
    return `$${(35 + ((ingreso - 105) / 7.49) * (36.99 - 35)).toFixed(2)}`;
  if (ingreso >= 112.5) return "$37 o más";
};

export default calcularPagoConductor;
