import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

Chart.register(ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const DonutChart = ({ cancerData, bloodCancerData, survivalRateData, options }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-80 h-80">
        <h2 className="text-center">Cancer Data</h2>
        <Doughnut data={cancerData} options={{ ...options, animation: { animateRotate: true, animateScale: true } }} />
      </div>
      <div className="w-full md:w-80 h-80">
        <h2 className="text-center">Blood Cancer Data</h2>
        <Bar data={bloodCancerData} options={{ ...options, animation: { animateRotate: true, animateScale: true } }} />
      </div>
      <div className="w-full md:w-80 h-80">
        <h2 className="text-center">Survival Rate Data</h2>
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
