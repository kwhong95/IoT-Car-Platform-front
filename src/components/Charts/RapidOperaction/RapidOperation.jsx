import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['급가속 횟수', '급감속 횟수', '급핸들링 횟수'],
  datasets: [
    {
      label: 'User',
      data: [2, 9, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'UserAverage',
      data: [5, 5, 5],
      backgroundColor: 'rgba(99, 132, 255, 0.2)',
      borderColor: 'rgba(99, 132, 255, 1)',
      borderWidth: 1,
    },
  ],
}

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
}

const RadarChart = () => <Radar data={data} options={options} />;

export default RadarChart