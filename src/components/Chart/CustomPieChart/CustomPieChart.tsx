import React from "react";
import {PieChart, Pie, Cell, Tooltip} from "recharts";
import { COLORS } from "@components/Chart/helpers/colors";
import { IProps } from "@components/Chart/CustomPieChart/interface";

const CustomPieChart = (props: IProps) => {
  const { data } = props;
  const width = window.innerWidth * 0.2 // 0.2 - 20%
  return (
    <PieChart width={width} height={width}>
      <Pie data={data}  dataKey="value" outerRadius={width/2}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry}`}
            fill={COLORS[index % COLORS.length]}
            style={{ userSelect: "none" }}
          />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
  );
};

export { CustomPieChart };
