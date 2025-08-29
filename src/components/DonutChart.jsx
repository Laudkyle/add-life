// DonutChart.js
import React from "react";
import PropTypes from "prop-types";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  ArcElement,
  Legend,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const DonutChart = ({ type, data, options, title }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-center mb-2">{title}</h2>
      {type === "doughnut" && <Doughnut data={data} options={options} />}
      {type === "bar" && <Bar data={data} options={options} />}
      {type === "line" && <Line data={data} options={options} />}
    </div>
  );
};

DonutChart.propTypes = {
  type: PropTypes.oneOf(["doughnut", "bar", "line"]).isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  title: PropTypes.string,
};

export default DonutChart;
