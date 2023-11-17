import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);
export function ComponentPolarArea({
  spirituality,
  health,
  money,
  environment,
  family,
  rest,
  personal_Growth,
  self_realization,
  variable,
  
}) {
  const options = {
    scales: {
      r: {
        max: 12,
      },
    },
  };
  const data = {
    labels: variable,
    datasets: [
      {
        label: "# of Votes",
        data: [
          spirituality,
          health,
          money,
          environment,
          family,
          rest,
          personal_Growth,
          self_realization,
        ],
        backgroundColor: [
          "#96CD5E",
          "#4367BF",
          "#F88D29",
          "#EC4F7E",
          "#25843E",
          "#74B5E9",
          "#FFDA58",
          "#AA51BA",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <PolarArea data={data} options={options} />;
}
