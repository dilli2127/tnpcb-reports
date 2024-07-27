import React from 'react';
import { Chart } from 'react-google-charts';

const TamilNaduMap = () => {
  const data = [
    ['City', 'Population'],
    ['Chennai', 8390000],
    ['Coimbatore', 2166000],
    ['Madurai', 1561129],
    ['Tiruchirappalli', 916857],
    ['Salem', 831038],
    ['Erode', 521891],
    ['Tiruppur', 877778],
    ['Vellore', 484690],
    ['Thoothukudi', 237830],
    ['Dindigul', 207327],
  ];

  const options = {
    region: 'IN-TN',
    displayMode: 'markers',
    resolution: 'provinces',
    colorAxis: { colors: ['#e7711c', '#4374e0'] },
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  };

  return (
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="500px"
        data={[['City', 'Population'], ...data]}
        options={options}
      />
    </div>
  );
};

export default TamilNaduMap;
