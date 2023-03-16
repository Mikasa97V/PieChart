import { getTotalSum } from "@components/Chart/helpers/func/getTotalSun";
import { getMaxValue } from "@components/Chart/helpers/func/getMaxValue";
import { getMinValue } from "@components/Chart/helpers/func/getMinValue";
import { getSortCategory } from "@components/Chart/helpers/func/getSortCategory";
import { TData } from "@components/Chart/types";
import { MockData } from "../../../../helpers/MockData";


const getData = (data: any, type?: string) => {
  const maxValue = getMaxValue(MockData, type)
  const minValue = getMinValue(MockData, type)
  const totalSum = getTotalSum(MockData)
  const sortCategory = getSortCategory(data, totalSum) as TData[]

  return {
    sortCategory,
    totalSum,
    maxValue,
    minValue,
  }
}

export const getFullData = (func: any,type?: string) => {
  const chartData = func(MockData) as TData[]
  const {sortCategory, totalSum, maxValue, minValue} = getData(chartData, type)

  return {
    chartData,
    sortCategory,
    totalSum,
    maxValue,
    minValue,
  };
}
