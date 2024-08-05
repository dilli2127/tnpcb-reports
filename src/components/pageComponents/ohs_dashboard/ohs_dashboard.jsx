import React from "react";
import { Stack, Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-google-charts";
import { Table as AntTable } from "antd";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define colors for different metrics
const colorMap = {
  ResponseTime: "#64b5f6", // Light blue
  ResolutionRate: "#4caf50", // Vibrant green
  ComplaintVolume: "#f57c00", // Orange
  OperationalStatus: "#e57373", // Red
  Total: "#9e9e9e", // Grey
};

const responseTimeData = {
  labels: ["Region A", "Region B", "Region C", "Region D"],
  datasets: [
    {
      label: "Average Response Time (hrs)",
      data: [2.5, 3.0, 2.8, 3.2],
      backgroundColor: colorMap.ResponseTime,
    },
  ],
};

const responseTimeOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 5,
      title: {
        display: true,
        text: 'Average Response Time (hours)'
      }
    },
  },
};

const resolutionRateData = {
  labels: ["Region A", "Region B", "Region C", "Region D"],
  datasets: [
    {
      label: "Resolution Rate (%)",
      data: [85, 90, 88, 92],
      backgroundColor: colorMap.ResolutionRate,
    },
  ],
};

const resolutionRateOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
      title: {
        display: true,
        text: 'Resolution Rate (%)'
      }
    },
  },
};

const complaintVolumeData = {
  labels: ["Month 1", "Month 2", "Month 3", "Month 4"],
  datasets: [
    {
      label: "Complaint Volume",
      data: [1200, 1500, 1300, 1400],
      backgroundColor: colorMap.ComplaintVolume,
    },
  ],
};

const complaintVolumeOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 1600,
      title: {
        display: true,
        text: 'Complaint Volume'
      }
    },
  },
};

const operationalStatusOptions = {
  pieSliceText: "label",
  slices: {
    0: { color: colorMap.OperationalStatus },
    1: { color: colorMap.ResponseTime },
    2: { color: colorMap.ResolutionRate },
  },
};

const operationalStatusData = [
  ["Status", "Percentage"],
  ["Operational", 75],
  ["Maintenance", 15],
  ["Offline", 10],
];

const OpsDashboardComponent = () => {
  const operationalData = [
    { category: "Region A", avgResponseTime: 2.5, resolutionRate: 85, complaints: 1200 },
    { category: "Region B", avgResponseTime: 3.0, resolutionRate: 90, complaints: 1500 },
    { category: "Region C", avgResponseTime: 2.8, resolutionRate: 88, complaints: 1300 },
    { category: "Region D", avgResponseTime: 3.2, resolutionRate: 92, complaints: 1400 },
  ];

  const columns = [
    {
      title: "Region",
      dataIndex: "category",
      key: "category",
      align: "center",
      fixed: "left",
    },
    {
      title: "Avg Response Time (hrs)",
      dataIndex: "avgResponseTime",
      key: "avgResponseTime",
      align: "center",
      render: (text) => <span style={{ color: colorMap.ResponseTime }}>{text}</span>,
    },
    {
      title: "Resolution Rate (%)",
      dataIndex: "resolutionRate",
      key: "resolutionRate",
      align: "center",
      render: (text) => <span style={{ color: colorMap.ResolutionRate }}>{text}</span>,
    },
    {
      title: "Complaints",
      dataIndex: "complaints",
      key: "complaints",
      align: "center",
      render: (text) => <span style={{ color: colorMap.ComplaintVolume }}>{text}</span>,
    },
  ];

  const tableData = [
    { key: "1", report: "Operational Report 1", status: "Completed" },
    { key: "2", report: "Operational Report 2", status: "In Progress" },
    { key: "3", report: "Operational Report 3", status: "Pending" },
  ];

  return (
    <Stack spacing={3} sx={{ padding: "16px", backgroundColor: "white", minHeight: "100vh" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        OHS DASHBOARD
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
        {[
          {
            name: "Total Complaints",
            data: "5450",
            bgColor: colorMap.Total,
            color: "black",
          },
          { name: "Avg Response Time", data: "2.8 hrs", bgColor: colorMap.ResponseTime, color: "white" },
          { name: "Resolution Rate", data: "89%", bgColor: colorMap.ResolutionRate, color: "white" },
          { name: "Operational Status", data: "75%", bgColor: colorMap.OperationalStatus, color: "white" },
        ].map((card, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: card.bgColor,
              borderRadius: 0, 
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
              dataSource={operationalData}
              columns={columns}
              pagination={false}
              scroll={{ y: 250 }}
              bordered
              size="small"
              style={{ borderRadius: 0 }} 
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 1: Average Response Time by Region
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={responseTimeData} options={responseTimeOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 2: Resolution Rate by Region
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={resolutionRateData} options={resolutionRateOptions} />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 3: Complaint Volume Over Time
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <Bar data={complaintVolumeData} options={complaintVolumeOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Pie Chart: Operational Status Breakdown
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Chart
              chartType="PieChart"
              data={operationalStatusData}
              options={operationalStatusOptions}
              width="100%"
              height="300px"
            />
            <Typography variant="caption" align="center">
              Operational Status Breakdown
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ borderRadius: 0 }}> 
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
              style={{ borderRadius: 0 }} 
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

export default OpsDashboardComponent;
