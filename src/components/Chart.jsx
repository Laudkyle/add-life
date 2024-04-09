import React from 'react';
import DonutChart from './DonutChart';

const Chart = () => {
  // Real cancer statistics data
  const cancerData = {
    labels: [
      'Breast', 'Lung', 'Colorectal', 'Prostate', 'Melanoma', 'Bladder',
      'Non-Hodgkin Lymphoma', 'Kidney', 'Thyroid', 'Endometrial', 'Pancreatic', 'Leukemia'
    ],
    datasets: [
      {
        label: 'Estimated New Cancer Cases in 2022 (U.S.)',
        data: [
          281550, // Breast
          235760, // Lung
          149500, // Colorectal
          161000, // Prostate
          108130, // Melanoma
          83820,  // Bladder
          81270,  // Non-Hodgkin Lymphoma
          76940,  // Kidney
          60020,  // Thyroid
          66790,  // Endometrial
          60430,  // Pancreatic
          61750   // Leukemia
        ],
        backgroundColor: [
          '#ff6384', // Breast
          '#36a2eb', // Lung
          '#ffce56', // Colorectal
          '#4bc0c0', // Prostate
          '#9966ff', // Melanoma
          '#ff9f40', // Bladder
          '#ff6384', // Non-Hodgkin Lymphoma
          '#36a2eb', // Kidney
          '#ffce56', // Thyroid
          '#4bc0c0', // Endometrial
          '#9966ff', // Pancreatic
          '#ff9f40'  // Leukemia
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
