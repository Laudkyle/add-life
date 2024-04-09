import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

Chart.register(ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const DonutChart = ({ donutData, barData, lineData, options }) => {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="w-80 h-80">
        <Doughnut data={donutData} options={{ ...options, animation: { animateRotate: true, animateScale: true } }} />
      </div>
      <div className="w-80 h-80">
        <Bar data={barData} options={{ ...options, animation: { animateScale: true } }} />
      </div>
      <div className="w-80 h-80">
        <Line data={lineData} options={{ ...options, animation: { animateScale: true } }} />
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  donutData: PropTypes.object.isRequired,
  barData: PropTypes.object.isRequired,
  lineData: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default DonutChart;
