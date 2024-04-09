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
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Overall Cancer Mortality Rate (U.S.)',
        data: [170.1, 168.5, 166.4, 163.5, 160.3, 157.5, 154.4, 151.5, 149.0, 146.6, 144.1, 142.7],
        backgroundColor: '#ff6384',
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      {
        label: 'Blood Cancer Mortality Rate (U.S.)',
        data: [24.5, 24.2, 24.0, 23.7, 23.4, 23.1, 22.9, 22.7, 22.5, 22.2, 22.0, 21.8],
        backgroundColor: '#36a2eb',
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
      <DonutChart
        cancerData={cancerData}
        bloodCancerData={bloodCancerData}
        survivalRateData={mortalityRateData}
        options={options}
      />
    </div>
  );
};

export default Chart;