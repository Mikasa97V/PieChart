import {TData, TMaxValue, TMinValue} from "@components/Chart/types";

export interface ITextAnnotation {
  isSimply: boolean;
  sortCategory?: Array<{ name: string, value: number }>;
  title?: string;
  currency?: string;
  value?: string;
}

export interface IChartContainer {
  chartData: TData[],
  sortCategory: TData[],
  totalSum: number,
  maxValue: TMaxValue,
  minValue: TMinValue,
}
