export const formatINR = (value: number): string =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;

export const formatMultiple = (value: number): string =>
  value === 0 ? "0x" : `${value.toFixed(1)}x`;

export const getMultipleColor = (value: number, threshold = 3): string => {
  if (value === 0) return "#98A2B3";
  return value >= threshold ? "#185FA5" : "#D64545";
};
