import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CriminalDataChart = ({ criminalData }) => {
  // Check if criminalData is defined
  if (!criminalData) {
    return <div>No data available</div>;
  }

  // Destructure criminalData if defined
  const { labels = [], data = [], backgroundColors = [] } = criminalData;

  const chartDataset = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors
      }
    ]
  };

  return (
    <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 h-full" style={{ width: '100%' }}>
      <div className="text-center">
      <h1 className="text-xl font-bold mb-2">Criminal Data</h1>
        <div className="w-180 h-80 flex justify-center items-center">
          <Doughnut data={chartDataset} />
        </div>
      </div>
    </div>
  );
  
};

export default CriminalDataChart;
