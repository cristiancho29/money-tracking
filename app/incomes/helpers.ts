import currency from "currency.js";

const formatCurrency = (value: number) => {
  return currency(value, {
    precision: 2,
    separator: ".",
    decimal: ",",
  }).format();
};

export { formatCurrency };
