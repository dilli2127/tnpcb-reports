import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Table, Tag, Space } from "antd";
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

// Sample data for the charts
const chartData = [
  ["Month", "Complaints"],
  ["January", 1000],
  ["February", 1170],
  ["March", 660],
  ["April", 1030],
  ["May", 800],
  ["June", 750],
  ["July", 500],
  ["August", 900],
  ["September", 1200],
  ["October", 1500],
  ["November", 1600],
  ["December", 1700],
];

const chartOptions = [
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" , },
      legend: { position: "bottom" },
      pieSliceText: "value",
      title: "Complaint Status",
      colors: ["#548c2f", "#ef233c"],
    },
  },
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" },
      legend: { position: "bottom" },
      pieSliceText: "value",
      title: "Year Wise",
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"],
    },
  },
  {
    chartType: "BarChart",
    options: {
      chart: {
        title: "Case Performance",
        subtitle: "Cases, Pending, and Disposed: 2014-2024",
      },
      hAxis: { title: "Year" },
      vAxis: { title: "Cases" },
      legend: { position: "bottom" },
      colors: ["#FF8C00", "#1E90FF", "23771e"],
      // Example of zig-zag pattern for bar chart data values
      series: { 0: { curveType: 'function' } },
    },
  },
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" },
      legend: { position: "TOP" },
      pieSliceText: "value",
      title: "Month Wise",
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"],
    },
  },
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" },
      legend: { position: "TOP" },
      pieSliceText: "value",
      title: "Court Wise",
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"],
    },
  },
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" },
      legend: { position: "TOP" },
      pieSliceText: "value",
      title: "Monitoring Office Wise",
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"],
    },
  },
];

const barChartData15Days = [
  ["Date", "Cases"],
  ["2024-07-01", 50],
  ["2024-07-02", 60],
  ["2024-07-03", 70],
  ["2024-07-04", 90],
  ["2024-07-05", 80],
  ["2024-07-06", 100],
  ["2024-07-07", 90],
  ["2024-07-08", 110],
  ["2024-07-09", 120],
  ["2024-07-10", 100],
  ["2024-07-11", 80],
  ["2024-07-12", 70],
  ["2024-07-13", 60],
  ["2024-07-14", 90],
  ["2024-07-15", 110],
];

const barChartData30Days = [
  ["Date", "Cases"],
  ["2024-06-30", 40],
  ["2024-07-01", 50],
  ["2024-07-02", 60],
  ["2024-07-03", 70],
  ["2024-07-04", 90],
  ["2024-07-05", 80],
  ["2024-07-06", 100],
  ["2024-07-07", 90],
  ["2024-07-08", 110],
  ["2024-07-09", 120],
  ["2024-07-10", 100],
  ["2024-07-11", 80],
  ["2024-07-12", 70],
  ["2024-07-13", 60],
  ["2024-07-14", 90],
  ["2024-07-15", 110],
  ["2024-07-16", 130],
  ["2024-07-17", 140],
  ["2024-07-18", 150],
  ["2024-07-19", 160],
  ["2024-07-20", 170],
  ["2024-07-21", 180],
  ["2024-07-22", 190],
  ["2024-07-23", 200],
  ["2024-07-24", 210],
  ["2024-07-25", 220],
  ["2024-07-26", 230],
  ["2024-07-27", 240],
  ["2024-07-28", 250],
  ["2024-07-29", 260],
  ["2024-07-30", 270],
  ["2024-07-31", 280],
];

const tableData = [
  {
    key: '1',
    reportTitle: 'Quarterly Financial Report',
    date: '2024-07-15',
    status: 'Completed',
  },
  {
    key: '2',
    reportTitle: 'Annual Performance Review',
    date: '2024-06-10',
    status: 'Pending',
  },
  {
    key: '3',
    reportTitle: 'Market Research Analysis',
    date: '2024-05-20',
    status: 'In Progress',
  },
  {
    key: '4',
    reportTitle: 'Customer Satisfaction Survey',
    date: '2024-04-30',
    status: 'Completed',
  },
  {
    key: '5',
    reportTitle: 'Employee Satisfaction Survey',
    date: '2024-03-15',
    status: 'Completed',
  },
  {
    key: '6',
    reportTitle: 'Annual Budget Allocation',
    date: '2024-02-10',
    status: 'Pending',
  },
];

const columns = [
  {
    title: 'Report Title',
    dataIndex: 'reportTitle',
    key: 'reportTitle',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color;
      switch (status) {
        case 'Completed':
          color = 'green';
          break;
        case 'Pending':
          color = 'orange';
          break;
        case 'In Progress':
          color = 'blue';
          break;
        default:
          color = 'default';
      }
      return (
        <Tag color={color} key={status}>
          {status}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href={`#${record.key}`}>View</a>
        <a href={`#${record.key}`}>Edit</a>
      </Space>
    ),
  },
];

const Dashboard = () => {
  const [shuffledGradients, setShuffledGradients] = useState([]);
  useEffect(() => {
    setShuffledGradients(shuffle([...gradientStyles]));
  }, []);
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
  

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {/* Top 6 Boxes */}
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={2}>
          {cardDetails.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ background: shuffledGradients[index], color: '#fff' }}>
                  <CardContent>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="h4">{card.value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Monthly Case Graph and Complaint Status Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Case Graph
              </Typography>
              <Chart
                chartType="LineChart"
                data={chartData}
                options={{
                  title: 'Monthly Case Graph',
                  hAxis: { title: 'Month' },
                  vAxis: { title: 'Cases' },
                  legend: { position: 'bottom' },
                }}
                width="100%"
                height="400px"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Complaint Status
              </Typography>
              <Chart
                chartType={chartOptions[0].chartType}
                data={[
                  ['Status', 'Count'],
                  ['Resolved', 800],
                  ['Pending', 200],
                ]}
                options={chartOptions[0].options}
                width="100%"
                height="400px"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Year Wise Pie Chart and Case Performance */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Year Wise
              </Typography>
              <Chart
                chartType={chartOptions[1].chartType}
                data={[
                  ['Year', 'Cases'],
                  ['2020', 400],
                  ['2021', 460],
                  ['2022', 1120],
                  ['2023', 540],
                ]}
                options={chartOptions[1].options}
                width="100%"
                height="400px"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Case Performance
              </Typography>
              <Chart
                chartType={chartOptions[2].chartType}
                data={[
                  ['Year', 'Cases', 'Pending', 'Disposed'],
                  ['2014', 1000, 400, 200],
                  ['2015', 1170, 460, 250],
                  ['2016', 660, 1120, 300],
                  ['2017', 1030, 540, 400],
                  ['2018', 800, 700, 500],
                  ['2019', 750, 800, 600],
                  ['2020', 500, 900, 700],
                  ['2021', 900, 1000, 800],
                  ['2022', 1200, 1100, 900],
                  ['2023', 1500, 1200, 1000],
                  ['2024', 1600, 1300, 1100],
                ]}
                options={chartOptions[2].options}
                width="100%"
                height="400px"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Three Pie Charts */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {chartOptions.slice(3, 6).map((chart, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {chart.options.title}
                    </Typography>
                    <Chart
                      chartType={chart.chartType}
                      data={[
                        ['Category', 'Value'],
                        ['A', 100],
                        ['B', 200],
                        ['C', 300],
                        ['D', 400],
                      ]}
                      options={chart.options}
                      width="100%"
                      height="400px"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Bar Charts (15 days and 30 days) */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Cases in Last 15 Days
                  </Typography>
                  <Chart
                    chartType="BarChart"
                    data={barChartData15Days}
                    options={{
                      title: 'Cases in Last 15 Days',
                      hAxis: { title: 'Cases'},
                      vAxis: { title: 'Date' },
                      legend: { position: 'none' },
                      colors: ['#FF8C00'],
                      bar: { groupWidth: '75%' },
                      series: { 0: { color: '#FF8C00' } },
                    }}
                    width="100%"
                    height="400px"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Cases in Last 30 Days
                  </Typography>
                  <Chart
                    chartType="BarChart"
                    data={barChartData30Days}
                    options={{
                      title: 'Cases in Last 30 Days',
                      hAxis: { title: 'Date' },
                      vAxis: { title: 'Cases' },
                      legend: { position: 'none' },
                      colors: ['#1E90FF'],
                      bar: { groupWidth: '75%' },
                      series: { 0: { color: '#1E90FF' } },
                    }}
                    width="100%"
                    height="400px"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Reports Table */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Reports
              </Typography>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ y: 240 }}
              />
              <Box mt={2}>
                <button>Add More Data</button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const gradientStyles = [
  'linear-gradient(135deg, #7f5fc6 0%, #2a2a72 100%)',
  'linear-gradient(135deg, #f8cfd8 0%, #ff6a00 100%)',
  'linear-gradient(135deg, #7db9e8 0%, #48a6e5 100%)',
  'linear-gradient(135deg, #f4a261 0%, #2a2a72 100%)',
  'linear-gradient(135deg, #c3cfe2 0%, #e2e2e2 100%)',
  'linear-gradient(135deg, #a0c4ff 0%, #c7f9cc 100%)',
];

const cardDetails = [
  { title: 'Total Cases', value: '1,200' },
  { title: 'Pending Cases', value: '150' },
  { title: 'Resolved Cases', value: '1,000' },
  { title: 'Open Complaints', value: '250' },
  { title: 'Closed Complaints', value: '700' },
  { title: 'New Complaints', value: '80' },
];

export default Dashboard;

           
