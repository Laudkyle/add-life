import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

Chart.register(ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const DonutChart = ({ cancerData, bloodCancerData, survivalRateData, options }) => {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="w-80 h-80">
        <Doughnut data={cancerData} options={{ ...options, animation: { animateRotate: true, animateScale: true } }} />
      </div>
      <div className="w-80 h-80">
        <Doughnut data={bloodCancerData} options={{ ...options, animation: { animateRotate: true, animateScale: true } }} />
      </div>
      <div className="w-80 h-80">
        <Bar data={survivalRateData} options={{ ...options, animation: { animateScale: true } }} />
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  cancerData: PropTypes.object.isRequired,
  bloodCancerData: PropTypes.object.isRequired,
  survivalRateData: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default DonutChart;
