import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const fallbackHoverColor = "#6B46C1"; // Fallback hover color

const BarChart = ({ labels, data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'My Data',
        data: [],
        backgroundColor: 'purple',
        hoverBackgroundColor: fallbackHoverColor, // Fallback hover color
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: 'My Data',
          data,
          backgroundColor: 'purple',
          hoverBackgroundColor: fallbackHoverColor, // Fallback hover color
        },
      ],
    });
  }, [labels, data]); // Update chart data on prop changes

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#1F2937', // Fallback tooltip background color
        bodyColor: '#F3F4F6', // Fallback tooltip text color
        borderColor: '#374151', // Fallback tooltip border color
        borderWidth: 1,
        cornerRadius: 5,
        padding: 10,
        displayColors: false, // Hide color dots in tooltip
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    // <div className="border border-gray-300 rounded-lg" style={{ borderRadius: '25px' }}>
      <Bar className='w-full' data={chartData} options={options} />
    // </div>
  );
};

export default BarChart;
