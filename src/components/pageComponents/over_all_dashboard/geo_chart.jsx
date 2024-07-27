import React from 'react';
import TamilNaduMap from './tamilnadumap'; // Adjust the path as necessary

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 50%' }}>
        <TamilNaduMap />
      </div>
      <div style={{ flex: '1 1 50%', padding: '20px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
        {/* Your card content here */}
        <h2>Card Content</h2>
        <p>This is where your card content goes.</p>
      </div>
    </div>
  );
};

export default Dashboard;
