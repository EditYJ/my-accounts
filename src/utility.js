export const LIST_VIEW = "list";
export const CHART_VIEW = "chart";

export const addZero = month => {
  return month < 10 ? "0" + month : month;
};

export const range = (size, startAt = 0) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = i + startAt;
  }
  return arr;
};

export const viewActive = (id, selectedId) => {
  return id === selectedId ? "dropdown-item active" : "dropdown-item";
};
