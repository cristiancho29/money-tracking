import type { LoadingI } from "./lib/store/types";

export const parseToCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const isNumberGreaterThanZero = (value: number) => {
  return !isNaN(value) && value > 0;
};

export const isLoaded = (loading: LoadingI) => loading === "loaded";
