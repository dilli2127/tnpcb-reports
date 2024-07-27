import React from 'react';
import { Chart } from 'react-google-charts';

const GeoChartTamilNadu = () => {
  const data = [
    ['City', 'Population'],
    ['Chennai', 7090000],
    ['Coimbatore', 1673000],
    ['Madurai', 1562000],
    ['Tiruchirappalli', 916857],
    // Add more cities and their populations here
  ];

  const options = {
    region: 'IN-TN', // Focus on Tamil Nadu
    displayMode: 'markers', // Use markers for cities
    colorAxis: { colors: ['#e7711c', '#4374e0'] }, // Customize color range
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  };

  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default GeoChartTamilNadu;
