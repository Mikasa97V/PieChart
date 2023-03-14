import React from "react";
import { Navbar } from "@components/Navbar/Navbar";
import { ChartContainer } from "@components/Chart/ChartContainer";
import {
  getFullDataByCurrency,
  getFullDetailedData,
} from "@components/Chart/helpers/func/getFullData";
import s from "./MainContent.module.scss";

const MainContent = () => {
  const { dataByCurrency, sortCategory, totalSum, minValue, maxValue } = getFullDetailedData();

  return (
    <div className={s.main_wrap}>
      <Navbar />
      <ChartContainer
        dataByCurrency={dataByCurrency}
        sortCategory={sortCategory}
        totalSum={totalSum}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
};

export { MainContent };
