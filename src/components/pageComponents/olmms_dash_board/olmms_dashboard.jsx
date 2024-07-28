import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import OlmmsReportsTable from "../olmms_dash_board/olmms_dashboard_table";
import OlmmsCharts from "./olmms_charts";

// Sample data for the charts
const chartData = [
  [
    ["Category", "Value"],
    ["Disposed", 237],
    ["Pending", 679],
  ],
  [
    ["Year", "Count"],
    ["2005", 1],
    ["2008", 1],
    ["2009", 1],
    ["2014", 3],
    ["2015", 5],
    ["2016", 5],
    ["2017", 6],
    ["2018", 16],
    ["2019", 24],
    ["2020", 40],
    ["2021", 68],
    ["2022", 163],
    ["2023", 315],
    ["2024", 268],
  ],

  [
    ["Month", "Cases"],
    ["Jan", 600],
    ["Feb", 700],
    ["Mar", 800],
    ["Apr", 96],
    ["May", 800],
    ["Jun", 80],
    ["Jul", 750],
    ["Aug", 500],
    ["Sep", 120],
    ["Oct", 1500],
    ["Nov", 160],
    ["Dec", 100],
  ],
  [
    ["Year", "Cases", "Pending", "Disposed"],
    ["2020", 1000, 600, 400],
    ["2021", 1030, 540, 500],
    ["2022", 1030, 540, 350],
    ["2023", 1030, 540, 350],
    ["2024", 1030, 540, 350],
  ],
  [
    ["Month", "Cases"],
    ["Jan", 600],
    ["Feb", 700],
    ["Mar", 800],
    ["Apr", 96],
    ["May", 800],
    ["Jun", 80],
    ["Jul", 750],
    ["Aug", 500],
    ["Sep", 120],
    ["Oct", 1500],
    ["Nov", 160],
    ["Dec", 100],
  ],
  [
    ["Category", "Value"],
    ["NationalHumanRightsCommission", 1],
    ["TNStateHumanRightsCommission", 2],
    ["NationalCommissionforSCandST", 0],
    ["NationalCompanyLawTribunal", 0],
    ["HonbleHighCourtofMadras", 255],
    ["MotorAccidentClaimsTribunal", 1],
    ["HonbleNationalGreenTribunalSZ", 157],
    ["HonbleNationalGreenTribunalPB", 30],
    ["DistrictLabourCourt", 0],
    ["HonbleSupremeCourtofIndia", 19],
    ["HonbleHighCourtofMadrasMaduraiBench", 117],
    ["HonbleAppellateAuthority", 190],
    ["JmMunsiffcourt", 144],
  ],

  [
    ["Category", "Value"],
    ["Chennai", 175],
    ["Trichy", 52],
    ["Vellore", 97],
    ["Coimbatore", 127],
    ["Madurai", 65],
    ["Salem", 111],
    ["Tirunelveli", 95],
    ["Cuddalore", 21],
    ["Corporate office", 8],
    ["Chengalpattu", 61],
  ],
];

// Options for the charts
const chartOptions = [
  {
    chartType: "PieChart",
    options: {
      pieHole: 0.4,
      chartArea: { width: "100%", height: "80%" },
      legend: { position: "bottom" },
      pieSliceText: "value",
      title: "Case Status",
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
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"], // Updated colors
    },
  },

  {
    chartType: "LineChart",
    options: {
      hAxis: { title: "Month" },
      vAxis: { title: "Cases" },
      legend: { position: "bottom" },
      title: "Monthly Cases",
      colors: ["#1e90ff"],
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
      vAxis: { title: "Case Performance" },
      legend: { position: "bottom" },
      colors: ["#FF8C00", "#1E90FF", "23771e"],
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
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"], // Updated colors
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
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"], // Updated colors
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
      colors: ["#FF8C00", "#1E90FF", "#008080", "#D32F2F", "#005377"], // Updated colors
    },
  },
];

// Sample card names and data
const cardDetails = [
  { name: "Total Cases", data: "916" },
  { name: "Pending", data: "679" },
  { name: "Disposed", data: "237" },
  { name: "Counter Pneding", data: "462" },
  { name: "By Department", data: "140" },
  { name: "Against Department", data: "776" },
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

const OlmmsDashboardLanding = () => {
  const [shuffledGradients, setShuffledGradients] = useState([]);
  useEffect(() => {
    setShuffledGradients(shuffle([...gradientStyles]));
  }, []);
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
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: 2,
                    background:
                      shuffledGradients[index % shuffledGradients.length],
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
                    <Typography
                      variant="h6"
                      sx={{ mt: 1, textAlign: "center" }}
                    >
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
        {chartOptions.slice(2, 4).map((chart, index) => (
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Reports
              </Typography>
              <OlmmsReportsTable />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <OlmmsCharts chartData={chartData} chartOptions={chartOptions} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OlmmsDashboardLanding;
