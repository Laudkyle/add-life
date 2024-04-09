import React from 'react';
import DonutChart from './DonutChart';

const Chart = () => {
  // Real cancer statistics data
  const cancerData = {
    labels: ['Breast', 'Lung', 'Colorectal', 'Prostate', 'Skin'],
    datasets: [
      {
        label: 'Estimated New Cancer Cases in 2022 (U.S.)',
        data: [281550, 235760, 149500, 161000, 108130],
        backgroundColor: [
          '#ff6384', // Breast
          '#36a2eb', // Lung
          '#ffce56', // Colorectal
          '#4bc0c0', // Prostate
          '#9966ff', // Skin
        ],
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
    ],
  };

  const bloodCancerData = {
    labels: ['Leukemia', 'Lymphoma', 'Myeloma'],
    datasets: [
      {
        label: 'Estimated New Cases of Blood Cancers in 2022 (U.S.)',
        data: [61750, 84960, 34790],
        backgroundColor: [
          '#ff6384', // Leukemia
          '#36a2eb', // Lymphoma
          '#ffce56', // Myeloma
        ],
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
    ],
  };

  const survivalRateData = {
    labels: ['5-Year Survival Rate'],
    datasets: [
      {
        label: 'Overall Cancer Survival Rate (U.S.)',
        data: [68.6],
        backgroundColor: ['#ff6384'],
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      {
        label: 'Blood Cancer Survival Rate (U.S.)',
        data: [62.9],
        backgroundColor: ['#36a2eb'],
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 h-80">
        <DonutChart data={cancerData} options={options} />
      </div>
      <div className="w-80 h-80">
        <DonutChart data={bloodCancerData} options={options} />
      </div>
      <div className="w-80 h-80">
        <DonutChart data={survivalRateData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
