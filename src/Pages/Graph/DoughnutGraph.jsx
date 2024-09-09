import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = () => {
  const data = {
    labels: ['Blocked', 'In review', 'In Progress'],
    datasets: [
      {
        data: [36, 38, 25],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)', // Blocked
          'rgba(54, 162, 235, 0.3)', // In review
          'rgba(54, 162, 235, 1)',   // In Progress
        ],
        borderWidth: 0, // Removes borders between sections
        cutout: '70%', // Creates the donut shape by cutting out the middle
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
          padding: 20,
          generateLabels: (chart) => {
            const { labels, datasets } = chart.data;
            const values = datasets[0].data;
            return labels.map((label, index) => ({
              text: `${label}: ${values[index]}%`,
              fillStyle: datasets[0].backgroundColor[index],
              hidden: false,
              lineCap: 'round',
              lineDash: [],
              lineDashOffset: 0,
              lineJoin: 'round',
              pointStyle: 'circle',
            }));
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
