import React from "react";
import { Stack, Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-google-charts";
import { Table as AntTable } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colorMap = {
  Red: "#e57373", // Muted red
  Orange: "#f8b400", // Warm orange
  Green: "#4caf50", // Vibrant green
  Total: "#283d3b", // Dark green
};

const firstChartData = {
  labels: ["CTO", "CTE"],
  datasets: [
    {
      label: "Red",
      data: [14285, 14285],
      backgroundColor: colorMap.Red,
    },
    {
      label: "Orange",
      data: [30930, 30930],
      backgroundColor: colorMap.Orange,
    },
    {
      label: "Green",
      data: [13781, 13781],
      backgroundColor: colorMap.Green,
    },
  ],
};

const firstChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 5000,
      max: 30000,
    },
  },
};

const secondChartData = {
  labels: ["Approved", "Pending", "Reject", "Total"],
  datasets: [
    {
      label: "Red",
      data: [12935, 491, 859, 14285],
      backgroundColor: colorMap.Red,
    },
    {
      label: "Orange",
      data: [28693, 755, 1482, 30930],
      backgroundColor: colorMap.Orange,
    },
    {
      label: "Green",
      data: [12538, 359, 884, 13781],
      backgroundColor: colorMap.Green,
    },
  ],
};

const secondChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 30000,
    },
  },
};

const pieChartOptions = {
  pieSliceText: "label",
  slices: {
    0: { offset: 0.1, color: colorMap.Red },
    1: { offset: 0.1, color: colorMap.Orange },
    2: { offset: 0.1, color: colorMap.Green },
  },
};

const OcmmsDashBoardComponent = () => {
  const districtData = [
    { name: "District 1", red: 1000, orange: 2000, green: 3000, total: 6000 },
    { name: "District 2", red: 900, orange: 1900, green: 2900, total: 5700 },
    // Add more districts as needed
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
      title: "Red",
      dataIndex: "red",
      key: "red",
      align: "center",
      render: (text) => <span style={{ color: colorMap.Red }}>{text}</span>,
    },
    {
      title: "Orange",
      dataIndex: "orange",
      key: "orange",
      align: "center",
      render: (text) => <span style={{ color: colorMap.Orange }}>{text}</span>,
    },
    {
      title: "Green",
      dataIndex: "green",
      key: "green",
      align: "center",
      render: (text) => <span style={{ color: colorMap.Green }}>{text}</span>,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "center",
      render: (text) => <span style={{ color: colorMap.Total }}>{text}</span>,
    },
  ];

  return (
    <Stack spacing={3} sx={{ padding: "16px", backgroundColor: "white" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        OCMMS STATISTICAL DATA
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        {[
          {
            name: "Total",
            data: "58996",
            bgColor: colorMap.Total,
            color: "white",
          },
          { name: "Red", data: "14285", bgColor: colorMap.Red, color: "white" },
          {
            name: "Orange",
            data: "30930",
            bgColor: colorMap.Orange,
            color: "white",
          },
          {
            name: "Green",
            data: "13781",
            bgColor: colorMap.Green,
            color: "white",
          },
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
              width: "200px", // Fixed width for all cards
              height: "100px", // Fixed height for all cards
              margin: "4px", // Smaller margin for closer spacing
            }}
          >
            <CardContent sx={{ textAlign: "center", padding: "8px" }}>
              <Typography
                fontSize={{ xs: 12, sm: 14 }}
                fontWeight="bold"
                component="div"
                sx={{ color: card.color }}
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
                  color: card.color,
                }}
              >
                {card.data}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 1: CTO and CTE Data
          </Typography>
          <Box sx={{ height: "250px", width: "100%" }}>
            <Bar data={firstChartData} options={firstChartOptions} />
          </Box>
          <Typography variant="h6" gutterBottom>
            Pie Charts 1: CTO and CTE Data
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <Box sx={{ width: "50%" }}>
              <Chart
                chartType="PieChart"
                data={[
                  ["Category", "Value"],
                  ["Red", 14285],
                  ["Orange", 30930],
                  ["Green", 13781],
                ]}
                options={pieChartOptions}
                width="100%"
                height="250px"
              />
              <Typography variant="caption" align="center">
                CTO Data
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Chart
                chartType="PieChart"
                data={[
                  ["Category", "Value"],
                  ["Red", 14285],
                  ["Orange", 30930],
                  ["Green", 13781],
                ]}
                options={pieChartOptions}
                width="100%"
                height="250px"
              />
              <Typography variant="caption" align="center">
                CTE Data
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Table 1: CTO and CTE Data
          </Typography>
          <AntTable
            columns={columns}
            dataSource={firstChartData.labels.map((label, index) => ({
              key: label,
              category: label,
              red: firstChartData.datasets[0].data[index],
              orange: firstChartData.datasets[1].data[index],
              green: firstChartData.datasets[2].data[index],
              total: firstChartData.datasets.reduce(
                (sum, dataset) => sum + dataset.data[index],
                0
              ),
            }))}
            pagination={false}
            bordered
            size="small"
            style={{
              backgroundColor: "#c2dfe3", // Content background color
            }}
            theadStyle={{ backgroundColor: "#e0fbfc" }} // Header background color
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bar Chart 2: Approved, Pending, Reject, and Total Data
          </Typography>
          <Box sx={{ height: "250px", width: "100%" }}>
            <Bar data={secondChartData} options={secondChartOptions} />
          </Box>
          <Typography variant="h6" gutterBottom>
            Pie Chart 2: Approved, Pending, Reject Data
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Chart
              chartType="PieChart"
              data={[
                ["Category", "Value"],
                ["Approved", 12935],
                ["Pending", 491],
                ["Reject", 859],
              ]}
              options={pieChartOptions}
              width="100%"
              height="250px"
            />
            <Typography variant="caption" align="center">
              Approved, Pending, Reject
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Table 2: Approved, Pending, Reject, and Total Data
          </Typography>
          <AntTable
            columns={columns}
            dataSource={secondChartData.labels.map((label, index) => ({
              key: label,
              category: label,
              red: secondChartData.datasets[0].data[index],
              orange: secondChartData.datasets[1].data[index],
              green: secondChartData.datasets[2].data[index],
              total: secondChartData.datasets.reduce(
                (sum, dataset) => sum + dataset.data[index],
                0
              ),
            }))}
            pagination={false}
            bordered
            size="small"
            style={{
              backgroundColor: "#c2dfe3", // Content background color
            }}
            theadStyle={{ backgroundColor: "#e0fbfc" }} // Header background color
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default OcmmsDashBoardComponent;
