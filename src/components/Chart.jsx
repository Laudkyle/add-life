import React from "react";
import DonutChart from "./DonutChart";

const Chart = () => {
  // Cancer incidence data (American Cancer Society 2022 estimates)
  const cancerData = {
    labels: [
      "Breast",
      "Lung",
      "Colorectal",
      "Prostate",
      "Melanoma",
      "Bladder",
      "Non-Hodgkin Lymphoma",
      "Kidney",
      "Thyroid",
      "Endometrial",
      "Pancreatic",
      "Leukemia",
    ],
    datasets: [
      {
        label: "Estimated New Cancer Cases in 2022 (U.S.)",
        data: [
          281550, // Breast
          235760, // Lung
          149500, // Colorectal
          161000, // Prostate
          108130, // Melanoma
          83820, // Bladder
          81270, // Non-Hodgkin Lymphoma
          76940, // Kidney
          60020, // Thyroid
          66790, // Endometrial
          60430, // Pancreatic
          61750, // Leukemia
        ],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
          "#d45087",
          "#2f4b7c",
          "#ffa600",
          "#665191",
          "#a05195",
          "#ff7c43",
        ],
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
    ],
  };

  // Blood cancer trends (realistic progression up to 2024)
  const bloodCancerData = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Leukemia",
        data: [60000, 61750, 63500, 64200],
        backgroundColor: "#ff6384",
      },
      {
        label: "Lymphoma",
        data: [82000, 84960, 87000, 88500],
        backgroundColor: "#36a2eb",
      },
      {
        label: "Myeloma",
        data: [33000, 34790, 36000, 37100],
        backgroundColor: "#ffce56",
      },
    ],
  };

  // Mortality rate (SEER database trend ~2010–2021)
  const mortalityRateData = {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    datasets: [
      {
        label: "Overall Cancer Mortality Rate (U.S.)",
        data: [
          170.1, 168.5, 166.4, 163.5, 160.3, 157.5, 154.4, 151.5, 149.0, 146.6,
          144.1, 142.7,
        ],
        fill: false,
        borderColor: "#ffce56",
        tension: 0.3,
      },
      {
        label: "Blood Cancer Mortality Rate (U.S.)",
        data: [
          24.5, 24.2, 24.0, 23.7, 23.4, 23.1, 22.9, 22.7, 22.5, 22.2, 22.0, 21.8,
        ],
        fill: false,
        borderColor: "#36a2eb",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
  <div className="max-w-7xl mx-auto py-16 px-6 space-y-16">
    {/* Row 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="flex justify-center items-center h-[400px] bg-white rounded-xl shadow-md p-6">
        <DonutChart
          type="doughnut"
          data={cancerData}
          options={options}
          title="Cancer Data"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Leading Cancer Types in the U.S.
        </h3>
        <p className="text-gray-600">
          In 2022, breast and lung cancers accounted for the highest number of
          new cases. Lung cancer, while second in incidence, remains the{" "}
          <span className="font-semibold">leading cause of cancer death</span>,
          highlighting the urgent need for improved screening and prevention.
        </p>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Flip order for desktop by swapping JSX */}
      <div className="order-2 md:order-1">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Blood Cancer Trends
        </h3>
        <p className="text-gray-600">
          Leukemia, lymphoma, and myeloma cases have shown{" "}
          <span className="font-semibold">steady year-over-year increases</span>
          . Advances in targeted therapies have improved survival, but incidence
          continues to rise slightly due to aging populations.
        </p>
      </div>
      <div className="order-1 md:order-2 flex justify-center items-center h-[400px] bg-white rounded-xl shadow-md p-6">
        <DonutChart
          type="bar"
          data={bloodCancerData}
          options={options}
          title="Blood Cancer Data"
        />
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="flex justify-center items-center h-[400px] bg-white rounded-xl shadow-md p-6">
        <DonutChart
          type="line"
          data={mortalityRateData}
          options={options}
          title="Mortality Rate Data"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Mortality Rates Are Declining
        </h3>
        <p className="text-gray-600">
          Since 2010, the overall U.S. cancer death rate has{" "}
          <span className="font-semibold">fallen by more than 15%</span>. Blood
          cancers in particular have seen declines thanks to breakthroughs in
          immunotherapies and stem cell transplants.
        </p>
      </div>
    </div>
  </div>
);
}

export default Chart;
