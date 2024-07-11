import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chart from "react-google-charts";

const OverAllDashBoard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Data for the four pie charts
  const data1 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const data2 = [
    ["Language", "Speakers (Millions)"],
    ["Chinese", 1300],
    ["Spanish", 460],
    ["English", 380],
    ["Hindi", 310],
    ["Arabic", 310],
  ];

  const data3 = [
    ["City", "Population", "Area"],
    ["Tokyo", 37977000, 1738],
    ["Delhi", 28514000, 1484],
    ["Shanghai", 25582000, 6340],
    ["Sao Paulo", 21650000, 1521],
    ["Mumbai", 21357000, 603],
  ];
  const data4 = [
    ["Year", "Sales", "Expenses"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540]
  ];

  const chartSize = isSmallScreen ? "200px" : "380px"; // Adjust size based on screen size

  return (
    <Box p={4} sx={{backgroundColor:"white"}}>
      <Grid container justifyContent="center">
        <Typography variant="h4">OVERALL DASHBOARD</Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Chart
            width={chartSize}
            height={chartSize}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data1}
            options={{
              title: "OLMMS",
              is3D: true,
              titleTextStyle: {
                fontSize: 18, 
                bold: true 
              },
            }}
            
          />
        </Grid>
        <Grid item>
          <Chart
            width={chartSize}
            height={chartSize}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data2}
            options={{
              title: "OCCMS",
              is3D: true,
              titleTextStyle: {
                fontSize: 18, 
                bold: true 
              },
            }}
          />
        </Grid>
        <Grid item>
          <Chart
            width={chartSize}
            height={chartSize}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data3}
            options={{
              title: "OLGPRS",
              is3D: true,
              titleTextStyle: {
                fontSize: 18, 
                bold: true 
              },
            }}
          />
        </Grid>
       
      </Grid>
      <Grid container justifyContent="center">
      <Grid item>
          <Chart
            width={chartSize}
            height={chartSize}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data3}
            options={{
              title: "BIO MEDICAL",
              is3D: true,
              titleTextStyle: {
                fontSize: 18, 
                bold: true 
              },
            }}
          />
        </Grid>
        <Grid item>
          <Chart
            width={chartSize}
            height={chartSize}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data3}
            options={{
              title: "OPEN HOUSE",
              sizs:"50px",
              is3D: true,
              titleTextStyle: {
                fontSize: 18, 
                bold: true 
              },
            }}
          />
        </Grid>
        <Grid item>
        <Chart
      chartType="Histogram"
      width="100%"
      height="400px"
      data={data4}
      options={{
        title: "City Populations",
        // is3D: true,
        titleTextStyle: {
          fontSize: 18, 
          bold: true 
        },
      }}
    />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverAllDashBoard;
