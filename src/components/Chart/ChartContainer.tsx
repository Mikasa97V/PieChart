import React from "react";
import {CustomPieChart} from "@components/Chart/CustomPieChart/CustomPieChart";
import {AnnotationContainer} from "@components/Chart/AnnotationContainer/AnnotationContainer";
import {IChartContainer} from "@components/Chart/interface";
import {getAnnotationLeft, getAnnotationRight} from "@components/Chart/helpers/func/getAnnotation";
import s from "./Chart.module.scss";

const ChartContainer = ({chartData, sortCategory, totalSum, maxValue, minValue}: IChartContainer) => {
  const annotationLeft = getAnnotationLeft(totalSum, maxValue)
  const annotationRight = getAnnotationRight(sortCategory, minValue)

  return (
    <div className={s.chart_container}>
      <AnnotationContainer
        annotationTop={annotationLeft.annotationTop}
        annotationBottom={annotationLeft.annotationBottom}
      />
      <CustomPieChart data={chartData}/>
      <AnnotationContainer
        annotationTop={annotationRight.annotationTop}
        annotationBottom={annotationRight.annotationBottom}
      />
    </div>
  );
};

export {ChartContainer};
