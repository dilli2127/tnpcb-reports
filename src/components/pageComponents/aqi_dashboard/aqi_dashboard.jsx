import React from "react";
import { Stack, Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-google-charts";
import { Table as AntTable } from "antd";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const colorMap = {
  PM10: "#e57373", // Muted red
  PM2_5: "#f8b400", // Warm orange
  NO2: "#4caf50", // Vibrant green
  SO2: "#283d3b", // Dark green
  CO: "#7986cb", // Light blue
  O3: "#ffb74d", // Light orange
};

const firstChartData = {
  labels: ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6"],
  datasets: [
    {
      label: "PM10",
      data: [120, 130, 140, 150, 160, 170],
      backgroundColor: colorMap.PM10,
    },
    {
      label: "PM2.5",
      data: [80, 90, 100, 110, 120, 130],
      backgroundColor: colorMap.PM2_5,
    },
    {
      label: "NO2",
      data: [50, 60, 70, 80, 90, 100],
      backgroundColor: colorMap.NO2,
    },
  ],
};

const firstChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 200,
    },
  },
};

const secondChartData = {
  labels: ["Approved", "Pending", "Reject", "Total"],
  datasets: [
    {
      label: "PM10",
      data: [110, 115, 120, 130],
      backgroundColor: colorMap.PM10,
    },
    {
      label: "PM2.5",
      data: [70, 75, 80, 90],
      backgroundColor: colorMap.PM2_5,
    },
    {
      label: "NO2",
      data: [40, 45, 50, 60],
      backgroundColor: colorMap.NO2,
    },
  ],
};

const secondChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 150,
    },
  },
};

const pieChartOptions = {
  pieSliceText: "label",
  slices: {
    0: { offset: 0.1, color: colorMap.PM10 },
    1: { offset: 0.1, color: colorMap.PM2_5 },
    2: { offset: 0.1, color: colorMap.NO2 },
  },
};

const additionalBarChartData = {
  labels: ["Zone A", "Zone B", "Zone C", "Zone D"],
  datasets: [
    {
      label: "CO",
      data: [100, 200, 150, 300],
      backgroundColor: colorMap.CO,
    },
    {
      label: "O3",
      data: [50, 150, 100, 200],
      backgroundColor: colorMap.O3,
    },
  ],
};

const additionalBarChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 350,
    },
  },
};

const additionalPieChartOptions = {
  pieSliceText: "label",
  slices: {
    0: { offset: 0.1, color: colorMap.CO },
    1: { offset: 0.1, color: colorMap.O3 },
  },
};

const AqiDashBoardComponent = () => {
  const districtData = [
    { category: "District 1", pm10: 1000, pm2_5: 2000, no2: 3000, total: 6000 },
    { category: "District 2", pm10: 900, pm2_5: 1900, no2: 2900, total: 5700 },
    { category: "District 3", pm10: 1100, pm2_5: 2100, no2: 3100, total: 6300 },
    { category: "District 4", pm10: 800, pm2_5: 1800, no2: 2800, total: 5400 },
    { category: "District 5", pm10: 950, pm2_5: 1950, no2: 2950, total: 5850 },
    { category: "District 6", pm10: 1050, pm2_5: 2050, no2: 3050, total: 6150 },
  ];

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
      fixed: "left",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "PM10",
      dataIndex: "pm10",
      key: "pm10",
      align: "center",
      render: (text) => <span style={{ color: colorMap.PM10 }}>{text}</span>,
    },
    {
      title: "PM2.5",
      dataIndex: "pm2_5",
      key: "pm2_5",
      align: "center",
      render: (text) => <span style={{ color: colorMap.PM2_5 }}>{text}</span>,
    },
    {
      title: "NO2",
      dataIndex: "no2",
      key: "no2",
      align: "center",
      render: (text) => <span style={{ color: colorMap.NO2 }}>{text}</span>,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "center",
      render: (text) => <span style={{ color: colorMap.SO2 }}>{text}</span>,
    },
  ];

  const tableData = [
    { key: "1", report: "Report 1", status: "Approved" },
    { key: "2", report: "Report 2", status: "Pending" },
    { key: "3", report: "Report 3", status: "Rejected" },
  ];

  return (
    <Stack spacing={3} sx={{ padding: "16px", backgroundColor: "white", minHeight: "100vh" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        AQI DASHBOARD
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
        {[
          {
            name: "Total",
            data: "58996",
            bgColor: colorMap.SO2,
            color: "white",
          },
          { name: "PM10", data: "14285", bgColor: colorMap.PM10, color: "white" },
          { name: "PM2.5", data: "30930", bgColor: colorMap.PM2_5, color: "white" },
          { name: "NO2", data: "13781", bgColor: colorMap.NO2, color: "white" },
        ].map((card, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: card.bgColor,
              borderRadius: 2,
              boxShadow: 2,
              width: { xs: "100%", sm: "45%", md: "30%", lg: "22%" },
              height: "100px",
              margin: "8px",
            }}
          >
            <CardContent sx={{ textAlign: "center", padding: "8px" }}>
              <Typography fontSize={{ xs: 12, sm: 14 }} fontWeight="bold" component="div" sx={{ color: card.color }}>
                {card.name}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: "center", fontSize: { xs: 10, sm: 12, md: 12, lg: 13, xl: 16 }, fontWeight: "bold", color: card.color }}>
                {card.data}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ height: "300px", width: "100%" }}>
            <AntTable
              dataSource={districtData}
              columns={columns}
              pagination={false}
              scroll={{ y: 250 }}
              bordered
              size="small"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 1: AQI by Zone
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={firstChartData} options={firstChartOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 2: AQI Distribution by District
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={secondChartData} options={secondChartOptions} />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
             Bar Chart 2 : CO and O3 Levels
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={additionalBarChartData} options={additionalBarChartOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
             Pie Chart 2 : CO vs O3
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Chart
              chartType="PieChart"
              data={[
                ["Gas", "Percentage"],
                ["CO", 60],
                ["O3", 40],
              ]}
              options={additionalPieChartOptions}
              width="100%"
              height="300px"
            />
            <Typography variant="caption" align="center">
              CO vs O3 Levels
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Reports
            </Typography>
            <AntTable
              columns={[
                { title: "Report", dataIndex: "report", key: "report", align: "center" },
                { title: "Status", dataIndex: "status", key: "status", align: "center" },
              ]}
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
    </Stack>
  );
};

export default AqiDashBoardComponent;
