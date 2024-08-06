import React, { useEffect, useState } from "react";
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
    ['Unassinged', 1200],
    ['Processing', 500],
    ['Completed', 700],
    ['Non', 700],
  ],
  [
    ['Category', 'Value'],
    ['Total', 800],
    ['Red', 200],
    ['Orange', 600],
    ['Green', 600],
  ],
  [
    ['Category', 'Value'],
    ['Waste', 500],
    ['Bio Waste', 1500],
    ['Total Waste', 2000],
  ],
  [
    ['Category', 'Value'],
    ['Waste', 500],
    ['Bio Waste', 1500],
    ['Total Waste', 2000],
  ],
  [
    ['Category', 'Value'],
    ['Waste', 500],
    ['Bio Waste', 1500],
    ['Total Waste', 2000],
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
    ['Category', 'Value'],
    ['Waste', 500],
    ['Bio Waste', 1500],
    ['Total Waste', 2000],
  ],
];

// Options for the charts
const chartOptions = [
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4, // This makes it a donut chart
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: 'label',
      title: 'OLMMS',
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
      title: 'OLGPRS',
      colors: ['#FFB74D', '#64B5F6', '#4DB6AC'],
    },
  },
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: 'label',
      title: 'OCMMS',
      colors: ['#0081a7', '#ef233c', '#ff6b35', "#55a630"],
    },
  },
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: '',
      title: 'Bio Medical Waste',
      colors: ['#118ab2', '#4DB6AC', '#6B5B95'],
    },
  },
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: '',
      title: 'OHS',
      colors: ['#118ab2', '#4DB6AC', '#ff6b35'],
    },
  },
  {
    chartType: 'PieChart',
    options: {
      pieHole: 0.4,
      chartArea: { width: '100%', height: '80%' },
      legend: { position: 'bottom' },
      pieSliceText: '',
      title: 'AQI',
      colors: ['#118ab2', '#0081a7', '#6B5B95'],
    },
  },
  {
    chartType: 'LineChart',
    options: {
      hAxis: { title: 'Month' },
      vAxis: { title: 'Cases' },
      legend: { position: 'bottom' },
      title: 'Monthly Cases',
    },
  },
  {
    chartType: 'BarChart',
  options: {
    chartArea: { width: '50%' },
    hAxis: { title: 'Total Waste' },
    vAxis: { title: 'Category' },
    title: 'OHS',
    colors: ['#118ab2', '#4DB6AC', '#ff6b35'],
  },
},
];

// Sample card names and data
const cardDetails = [
  { name: "OLMMS Pending Cases", data: "50" },
  { name: "OLGPRS Complaints", data: "30000" },
  { name: "OCMMS Active Applications", data: "200" },
  { name: "Bio Medical Wastage", data: "1000" },
  { name: "OHS Applications", data: "400" },
  { name: "AQI", data: "25,000" },
];

// Gradient background styles
const gradientStyles = [
  "linear-gradient(45deg, #1D976C 30%, #93F9B9 90%)", // Green to Light Green
  "linear-gradient(45deg, #FF512F 30%, #F09819 90%)", // Orange to Yellow
  "linear-gradient(45deg, #1A2980 30%, #26D0CE 90%)", // Blue to Teal
  "linear-gradient(45deg, #654ea3 30%, #eaafc8 90%)", // Purple to Pink
  "linear-gradient(45deg, #FF4E50 30%, #F9D423 90%)", // Red to Yellow
  "linear-gradient(45deg, #36D1DC 30%, #5B86E5 90%)", // Light Blue to Blue
  "linear-gradient(45deg, #C06C84 30%, #6C5B7B 90%)", // Pink to Purple
  "linear-gradient(45deg, #FFD194 30%, #D1913C 90%)", // Light Orange to Dark Orange
  "linear-gradient(45deg, #FF7E5F 30%, #FEB47B 90%)", // Coral to Peach
  "linear-gradient(45deg, #B24592 30%, #F15F79 90%)", // Magenta to Light Pink
];
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const DashboardLanding = () => {
  const [shuffledGradients, setShuffledGradients] = useState([]);
  useEffect(() => {
    setShuffledGradients(shuffle([...gradientStyles]));
  }, []);
  return (
    <Box sx={{ p: 4 }}>
      <Grid container justifyContent="center">
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(50deg, #48A9FE 40%, #48cae4 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          OVERALL DASHBOARD
        </Typography>
      </Grid>

      <Grid container spacing={4}>
        {cardDetails.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                 background:
                      shuffledGradients[index % shuffledGradients.length],
                borderRadius: 2,
                boxShadow: 2,
                height: '100%',
                color:"white",
                fontWeight:"bold"
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  fontSize={{ xs: 12, sm: 14 }}
                  fontWeight="bold"
                  component="div"
                >
                  {card.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    textAlign: "center",
                    fontSize: { xs: 10, sm: 12, md: 12, lg: 13, xl: 16 },
                    fontWeight: "bold",
                  }}
                >
                  {card.data}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} mt={1}>
        {chartData.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Chart
                  chartType={chartOptions[index].chartType}
                  width="100%"
                  height="200px"
                  data={data}
                  options={chartOptions[index].options}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardLanding;
