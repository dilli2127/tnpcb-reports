import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { Chart } from "react-google-charts";

// Sample data for the charts
const chartData = [
  [
    ['Category', 'Value'],
    ['Total', 1000],
    ['Pending', 400],
    ['Disposed', 600],
  ],
  [
    ['Category', 'Value'],
    ['Unassigned', 1200],
    ['Processing', 500],
    ['Completed', 700],
    ['None', 700],
  ],
  [
    ['Month', 'Cases'],
    ['Jan', 600],
    ['Feb', 700],
    ['Mar', 800],
    ['Apr', 900],
    ['May', 1000],
    ['Jun', 1100],
    ['Jul', 1200],
    ['Aug', 1300],
    ['Sep', 1400],
    ['Oct', 1500],
    ['Nov', 1600],
    ['Dec', 1700],
  ],
  [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ],
];

// Options for the charts
const chartOptions = [
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: 'label',
      title: 'OLMMS Overview',
      colors: ['#0081a7', '#ef233c', '#548c2f'],
    },
  },
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: 'label',
      title: 'OLGPRS Status',
      colors: ['#FFB74D', '#64B5F6', '#4DB6AC', '#FF6F61'],
    },
  },
  {
    chartType: 'LineChart',
    options: {
      hAxis: { title: 'Month' },
      vAxis: { title: 'Cases' },
      legend: { position: 'bottom' },
      title: 'Monthly Cases',
      colors: ['#1e90ff'],
    },
  },
  {
    chartType: 'BarChart',
    options: {
      chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
      },
      hAxis: { title: 'Year' },
      vAxis: { title: 'Performance' },
      legend: { position: 'bottom' },
      colors: ['#1b9e77', '#d95f02', '#7570b3'],
    },
  }
  
];

// Sample card names and data
const cardDetails = [
    { name: "Total Cases", data: "1000" },
  { name: "Pending", data: "50" },
  { name: "Disposed", data: "30000" },
  { name: "Counter Pneding", data: "200" },
  { name: "By Department", data: "30000" },
  { name: "Against Department", data: "200" },
  
];

// Gradient background styles
const gradientStyles = [
  "linear-gradient(45deg, #FF6F61 30%, #DE7A7A 90%)",
  "linear-gradient(45deg, #6B5B95 30%, #B7A0CC 90%)",
  "linear-gradient(45deg, #88D8B0 30%, #68B9A1 90%)",
  "linear-gradient(45deg, #FFB74D 30%, #FF8A65 90%)",
];

const DashboardLanding = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Dashboard Title */}
      <Grid container justifyContent="center" mb={4}>
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(50deg, #48A9FE 40%, #48cae4 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            mb: 4,
          }}
        >
          OLMMS DASHBOARD
        </Typography>
      </Grid>

      {/* First Row: 40% - 4 Cards, 60% - 2 Charts */}
      <Grid container spacing={4} mb={1}>
        <Grid item xs={12} md={5} lg={4}>
          <Grid container spacing={4} mb={4} sx={{ width: "100%" }}>
            {cardDetails.map((card, index) => (
              <Grid item xs={12} md={6} key={index} >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: 2,
                    background: gradientStyles[index % gradientStyles.length],
                  }}
                >
                  <CardContent>
                    <Typography
                      fontSize={{ xs: 12, sm: 14 }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {card.name}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1, textAlign: "center" }}>
                      {card.data}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={7} lg={8} sx={{ width: "60%" }}>
          <Grid container spacing={4}>
            {chartOptions.slice(0, 2).map((chart, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Chart
                      chartType={chart.chartType}
                      width="100%"
                      height="300px"
                      data={chartData[index]}
                      options={chart.options}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Second Row: More Charts */}
      <Grid container spacing={4} mb={4}>
        {chartOptions.slice(2).map((chart, index) => (
          <Grid item xs={12} md={6} lg={6} key={index + 2}>
            <Card>
              <CardContent>
                <Chart
                  chartType={chart.chartType}
                  width="100%"
                  height="300px"
                  data={chartData[index + 2]}
                  options={chart.options}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Third Row: Table */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Data Table
              </Typography>
              {/* Table component goes here */}
              {/* Replace with actual table component as needed */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardLanding;
