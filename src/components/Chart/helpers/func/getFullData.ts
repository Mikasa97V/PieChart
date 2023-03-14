import { getTotalSum } from "@components/Chart/helpers/func/getTotalSun";
import {
  getDataByCategory,
  getDataByCurrency,
  getDetailData,
} from "@components/Chart/helpers/func/getDataBy";
import { getMaxValue } from "@components/Chart/helpers/func/getMaxValue";
import { getMinValue } from "@components/Chart/helpers/func/getMinValue";
import { MockData } from "../../../../helpers/MockData";

export const getFullDataByCurrency = () => {
  const dataByCurrency = getDataByCurrency(MockData);
  const maxValue = getMaxValue(MockData, "currency");
  const minValue = getMinValue(MockData, "currency");
  const totalSum = getTotalSum(MockData);

  const sortCategory: Array<string> = [];
  dataByCurrency.forEach((it) => {
    sortCategory.push(it.name);
  });

  return {
    dataByCurrency,
    sortCategory,
    totalSum,
    maxValue,
    minValue,
  };
};

export const getFullDataByCategory = () => {
  const dataByCurrency = getDataByCategory(MockData);
  const maxValue = getMaxValue(MockData, "category");
  const minValue = getMinValue(MockData, "category");
  const totalSum = getTotalSum(MockData);

  const sortCategory: Array<string> = [];
  dataByCurrency.forEach((it) => {
    sortCategory.push(it.name);
  });

  return {
    dataByCurrency,
    sortCategory,
    totalSum,
    maxValue,
    minValue,
  };
};

export const getFullDetailedData = () => {
  const dataByCurrency = getDetailData(MockData);
  console.log(dataByCurrency);
  const maxValue = getMaxValue(MockData);
  const minValue = getMinValue(MockData);
  const totalSum = getTotalSum(MockData);

  const sortCategory: Array<string> = [];
  dataByCurrency.forEach((it) => {
    sortCategory.push(it.name);
  });

  return {
    dataByCurrency,
    sortCategory,
    totalSum,
    maxValue,
    minValue,
  };
};
