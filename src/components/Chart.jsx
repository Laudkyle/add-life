import React from 'react';
import DonutChart from './DonutChart';

const Chart = () => {
  // Sample data for the charts
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
    labels: ['2021', '2022', '2023', '2024'], // Example years
    datasets: [
      {
        label: 'Estimated New Cases of Leukemia',
        data: [60000, 61750, /* Add data for 2023 and 2024 */],
        backgroundColor: '#ff6384', // Color for Leukemia
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      {
        label: 'Estimated New Cases of Lymphoma',
        data: [82000, 84960, /* Add data for 2023 and 2024 */],
        backgroundColor: '#36a2eb', // Color for Lymphoma
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      {
        label: 'Estimated New Cases of Myeloma',
        data: [33000, 34790, /* Add data for 2023 and 2024 */],
        backgroundColor: '#ffce56', // Color for Myeloma
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
    ],
  };

  const mortalityRateData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Temperature',
        data: [7, 8, 11, 13, 15, 20, 22],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Temperature',
        data: [7, 8, 11, 13, 15, 20, 22],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <DonutChart
        cancerData={cancerData}
        bloodCancerData={bloodCancerData}
        mortalityRateData={mortalityRateData}
        options={options}
      />
    </div>
  );
};

export default Chart;