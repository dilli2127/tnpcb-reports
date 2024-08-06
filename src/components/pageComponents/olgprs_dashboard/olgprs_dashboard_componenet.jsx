import React, { useState } from 'react';
import { Stack, Typography, Paper, Button, Box } from '@mui/material';
import { Select ,Table} from 'antd';
import { Chart } from 'react-google-charts';

const { Option } = Select;

function OlgprsDashBoardComponent() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedComplaintType, setSelectedComplaintType] = useState('ALL');

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleComplaintTypeChange = (value) => {
    setSelectedComplaintType(value);
  };

  const monthlyData = [
    ['Month', 'Complaints'],
    ['January', 1000],
    ['February', 1200],
    ['March', 1400],
    ['April', 1600],
    ['May', 1800],
    ['June', 2000],
    ['July', 2200],
    ['August', 2400],
    ['September', 2600],
    ['October', 2800],
    ['November', 3000],
    ['December', 3200],
  ];

  const zoneData = [
    ['Zone', 'Received', 'Completed', 'Pending'],
    ['Tirunelveli Zone', 2000, 1500, 500],
    ['Salem Zone', 1800, 1400, 400],
    ['Trichy Zone', 2200, 1700, 500],
    ['Madurai Zone', 2500, 2000, 500],
    ['Coimbatore Zone', 2300, 1800, 500],
    ['Vellore Zone', 2100, 1600, 500],
    ['Chennai Zone', 2700, 2200, 500],
  ];

  const districtData = [
    ['District', 'Received', 'Pending', 'Completed'],
    ['Chennai', 1200, 600, 800],
    ['Vellore', 1000, 500, 500],
    ['Ariyalur', 800, 400, 400],
    ['Thiruvannamalai', 900, 450, 450],
    ['Kanchipuram', 950, 475, 475],
    ['Tiruchi', 1100, 550, 550],
  ];

  const yearData = [
    ['Year', 'Received', 'Pending', 'Completed'],
    ['2014', 1500, 700, 800],
    ['2015', 1600, 750, 850],
    ['2016', 1700, 800, 900],
    ['2017', 1800, 850, 950],
    ['2018', 1900, 900, 1000],
    ['2019', 2000, 950, 1050],
    ['2020', 2100, 1000, 1100],
    ['2021', 2200, 1050, 1150],
    ['2022', 2300, 1100, 1200],
    ['2023', 2400, 1150, 1250],
    ['2024', 2500, 1200, 1300],
  ];

  const pieData = [
    ['Type', 'Percentage'],
    ['Online', 36],
    ['Offline', 64],
  ];

  const complaintSummaryData = [
    {
      key: '1',
      status: 'Offline',
      yetToOpen: 100,
      inProgress: 50,
      investigated: 30,
      pending: 20,
      completed: 70,
      total: 270,
    },
    {
      key: '2',
      status: 'Online',
      yetToOpen: 120,
      inProgress: 60,
      investigated: 40,
      pending: 30,
      completed: 80,
      total: 330,
    },
  ];

  const complaintSummaryColumns = [
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Yet to Open', dataIndex: 'yetToOpen', key: 'yetToOpen' },
    { title: 'In Progress', dataIndex: 'inProgress', key: 'inProgress' },
    { title: 'Investigated', dataIndex: 'investigated', key: 'investigated' },
    { title: 'Pending', dataIndex: 'pending', key: 'pending' },
    { title: 'Completed', dataIndex: 'completed', key: 'completed' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
  ];

  return (
    <Stack spacing={3} sx={{ padding: '20px' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        OCMMS STATISTICAL DATA
      </Typography>

      {/* Summary Cards */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Paper sx={{ backgroundColor: '#f6bd60', color: 'white', padding: '20px', textAlign: 'center', width: '200px', height: '120px', borderRadius: '8px' }}>
          <Typography variant="h4">1316</Typography>
          <Typography>COMPLAINTS</Typography>
        </Paper>
        <Paper sx={{ backgroundColor: '#f5cac3', color: 'white', padding: '20px', textAlign: 'center', width: '200px', height: '120px', borderRadius: '8px' }}>
          <Typography variant="h4">775</Typography>
          <Typography>COMPLAINTS</Typography>
        </Paper>
        <Paper sx={{ backgroundColor: '#84a59d', color: 'white', padding: '20px', textAlign: 'center', width: '200px', height: '120px', borderRadius: '8px' }}>
          <Typography variant="h4">27900</Typography>
          <Typography>COMPLAINTS</Typography>
        </Paper>
        <Paper sx={{ backgroundColor: '#598392', color: 'white', padding: '20px', textAlign: 'center', width: '200px', height: '120px', borderRadius: '8px' }}>
          <Typography variant="h4">2718</Typography>
          <Typography>NON COMPLAINTS</Typography>
        </Paper>
      </Stack>

      {/* Form Design */}
      <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h5" gutterBottom>Filter Options</Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            <Typography variant="body1">Type Of Complaint:</Typography>
            <Select
              value={selectedComplaintType}
              onChange={handleComplaintTypeChange}
              style={{ width: '100%' }}
            >
              <Option value="ALL">ALL</Option>
              <Option value="Online">Online</Option>
              <Option value="Offline">Offline</Option>
            </Select>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            <Typography variant="body1">Complaint Year:</Typography>
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              style={{ width: '100%' }}
            >
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
              <Option value="2022">2022</Option>
            </Select>
          </Box>

          <Button
            variant="contained"
            sx={{ backgroundColor: '#598392', color: 'white', marginTop: '10px', borderRadius: '8px' }}
          >
            Apply
          </Button>
        </Stack>
      </Paper>

      {/* Charts Section */}
      <Stack spacing={3}>
        {/* Monthly Data Chart */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', height: '400px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>Monthly Data Chart</Typography>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="ColumnChart" // Changed to ColumnChart
            data={monthlyData}
            options={{
              title: 'Complaints by Month',
              hAxis: { title: 'Month' },
              vAxis: { title: 'Complaints' },
              colors: ['#598392'],
              chartArea: { width: '70%' },
              legend: { position: 'none' },
            }}
          />
        </Paper>

        {/* Zone-Wise Data Chart */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', height: '400px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>Zone-Wise Data Chart</Typography>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="ColumnChart" // Changed to ColumnChart
            data={zoneData}
            options={{
              title: 'Complaints by Zone',
              hAxis: { title: 'Count', minValue: 0 }, // Switched with vAxis
              vAxis: { title: 'Zone' }, // Switched with hAxis
              colors: ['#f6bd60', '#f5cac3', '#84a59d'],
              chartArea: { width: '70%' },
              legend: { position: 'bottom' },
            }}
          />
        </Paper>

        {/* District-Wise Data Chart */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', height: '400px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>District-Wise Data Chart</Typography>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="ColumnChart" // Changed to ColumnChart
            data={districtData}
            options={{
              title: 'Complaints by District',
              hAxis: { title: 'Count', minValue: 0 }, // Switched with vAxis
              vAxis: { title: 'District' }, // Switched with hAxis
              colors: ['#f28482', '#f6bd60', '#84a59d'],
              chartArea: { width: '70%' },
              legend: { position: 'bottom' },
            }}
          />
        </Paper>

        {/* Year-Wise Data Chart */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', height: '400px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>Year-Wise Data Chart</Typography>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="ColumnChart" // Changed to ColumnChart
            data={yearData}
            options={{
              title: 'Complaints by Year',
              hAxis: { title: 'Count', minValue: 0 }, // Switched with vAxis
              vAxis: { title: 'Year' }, // Switched with hAxis
              colors: ['#598392', '#f6bd60', '#84a59d'],
              chartArea: { width: '70%' },
              legend: { position: 'bottom' },
            }}
          />
        </Paper>

        {/* Pie Chart */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', height: '400px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>Complaint Type Pie Chart</Typography>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            data={pieData}
            options={{
              title: 'Complaint Types',
              pieSliceText: 'label',
              colors: ['#84a59d', '#f28482'],
            }}
          />
        </Paper>

        {/* Complaint Summary Table */}
        <Paper sx={{ backgroundColor: '#f5cac3', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>Complaint Summary Status</Typography>
          <Table
            columns={complaintSummaryColumns}
            dataSource={complaintSummaryData}
            scroll={{ y: 240 }}
            pagination={false}
            bordered
            size="middle"
          />
        </Paper>
      </Stack>
    </Stack>
  );
}

export default OlgprsDashBoardComponent;
