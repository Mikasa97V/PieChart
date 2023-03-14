import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { IProps } from "@components/Chart/types";
import { renderCustomizedLabel } from "@components/Chart/helpers/func/renderCustomizedLabel";
import { COLORS } from "@components/Chart/helpers/colors";

const CustomPieChart = (props: IProps) => {
  const { data } = props;
  return (
    <PieChart width={600} height={600}>
      <Pie data={data} label={renderCustomizedLabel} dataKey="value">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry}`}
            fill={COLORS[index % COLORS.length]}
            style={{ userSelect: "none" }}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export { CustomPieChart };
