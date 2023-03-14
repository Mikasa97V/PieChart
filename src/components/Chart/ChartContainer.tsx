import React from "react";
import { CustomPieChart } from "@components/Chart/CustomPieChart/CustomPieChart";
import { AnnotationContainer } from "@components/Chart/AnnotationContainer/AnnotationContainer";
import s from "./Chart.module.css";

// interface IProps {
//   dataByCurrency: any,
//   sortCategory: any,
//   totalSum: any,
//   maxValue: any,
//   minValue: any,
// }

const ChartContainer = ({ dataByCurrency, sortCategory, totalSum, maxValue, minValue }: any) => {
  const annotationLeft = {
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

  const annotationRight = {
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

  return (
    <div className={s.chart_container}>
      <AnnotationContainer
        annotationTop={annotationLeft.annotationTop}
        annotationBottom={annotationLeft.annotationBottom}
      />
      <CustomPieChart data={dataByCurrency} />
      <AnnotationContainer
        annotationTop={annotationRight.annotationTop}
        annotationBottom={annotationRight.annotationBottom}
      />
    </div>
  );
};

export { ChartContainer };
