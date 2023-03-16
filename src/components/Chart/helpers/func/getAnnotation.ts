import {TData, TMaxValue, TMinValue} from "@components/Chart/types";

export const getAnnotationLeft = (totalSum: number, maxValue: TMaxValue) => {
  return {
    annotationTop: {
      isSimply: true,
      title: "Общая сумма активов",
      currency: "",
      value: String(totalSum),
    },
    annotationBottom: {
      isSimply: true,
      title: "Максимальная сумма - в ",
      currency: maxValue.title,
      value: String(maxValue.maxValue),
    },
  };
}

export const getAnnotationRight = (sortCategory: TData[], minValue: TMinValue) => {
  return  {
    annotationTop: {
      isSimply: false,
      sortCategory,
    },
    annotationBottom: {
      isSimply: true,
      title: "Минимальная сумма - в ",
      currency: minValue.title,
      value: String(minValue.minValue),
    },
  };
}
