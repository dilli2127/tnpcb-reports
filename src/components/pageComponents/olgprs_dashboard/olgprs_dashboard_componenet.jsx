import React, { useState } from "react";
import { Grid, Typography, Paper, Button, Box, Stack } from "@mui/material";
import { Select, Table } from "antd";
import { Chart } from "react-google-charts";

const { Option } = Select;

function OlgprsDashBoardComponent() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedComplaintType, setSelectedComplaintType] = useState("ALL");

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleComplaintTypeChange = (value) => {
    setSelectedComplaintType(value);
  };

  const monthlyData = [
    ["Month", "Complaints"],
    ["January", 1000],
    ["February", 1200],
    ["March", 1400],
    ["April", 1600],
    ["May", 1800],
    ["June", 2000],
    ["July", 2200],
    ["August", 2400],
    ["September", 2600],
    ["October", 2800],
    ["November", 3000],
    ["December", 3200],
  ];

  const zoneData = [
    ["Zone", "Received", "Completed", "Pending"],
    ["Tirunelveli Zone", 2000, 1500, 500],
    ["Salem Zone", 1800, 1400, 400],
    ["Trichy Zone", 2200, 1700, 500],
    ["Madurai Zone", 2500, 2000, 500],
    ["Coimbatore Zone", 2300, 1800, 500],
    ["Vellore Zone", 2100, 1600, 500],
    ["Chennai Zone", 2700, 2200, 500],
  ];

  const districtData = [
    ["District", "Received", "Pending", "Completed"],
    ["Chennai", 1200, 600, 800],
    ["Vellore", 1000, 500, 500],
    ["Ariyalur", 800, 400, 400],
    ["Thiruvannamalai", 900, 450, 450],
    ["Kanchipuram", 950, 475, 475],
    ["Tiruchi", 1100, 550, 550],
  ];

  const yearData = [
    ["Year", "Received", "Pending", "Completed"],
    ["2014", 1500, 700, 800],
    ["2015", 1600, 750, 850],
    ["2016", 1700, 800, 900],
    ["2017", 1800, 850, 950],
    ["2018", 1900, 900, 1000],
    ["2019", 2000, 950, 1050],
    ["2020", 2100, 1000, 1100],
    ["2021", 2200, 1050, 1150],
    ["2022", 2300, 1100, 1200],
    ["2023", 2400, 1150, 1250],
    ["2024", 2500, 1200, 1300],
  ];

  const pieData = [
    ["Type", "Percentage"],
    ["Online", 36],
    ["Offline", 64],
  ];

  const complaintSummaryData = [
    {
      key: "1",
      status: "Offline",
      yetToOpen: 100,
      inProgress: 50,
      investigated: 30,
      pending: 20,
      completed: 70,
      total: 270,
    },
    {
      key: "2",
      status: "Online",
      yetToOpen: 120,
      inProgress: 60,
      investigated: 40,
      pending: 30,
      completed: 80,
      total: 330,
    },
  ];

  const complaintSummaryColumns = [
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Yet to Open", dataIndex: "yetToOpen", key: "yetToOpen" },
    { title: "In Progress", dataIndex: "inProgress", key: "inProgress" },
    { title: "Investigated", dataIndex: "investigated", key: "investigated" },
    { title: "Pending", dataIndex: "pending", key: "pending" },
    { title: "Completed", dataIndex: "completed", key: "completed" },
    { title: "Total", dataIndex: "total", key: "total" },
  ];

  return (
    <Box>
      <Stack spacing={3}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          OCMMS Dasboard
        </Typography>

        {/* Summary Cards */}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  background: "linear-gradient(45deg, #FFB74D, #FF8A65)",
                  color: "white",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h4">1316</Typography>
                <Typography>New Complaints</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  background: "linear-gradient(45deg, #64B5F6, #4FC3F7)",
                  color: "white",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h4">775</Typography>
                <Typography>Pending Complaints</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  background: "linear-gradient(45deg, #4DB6AC, #4DD0E1)",
                  color: "white",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h4">27900</Typography>
                <Typography>Completed Complaints</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  background: "linear-gradient(45deg, #FF6F61, #FF8A65)",
                  color: "white",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h4">2718</Typography>
                <Typography> Non Complaints</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Form Design */}
        <Box
          sx={{
            background: "linear-gradient(45deg, #f5cac3, #84a59d)",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Filter Options
          </Typography>

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">Type Of Complaint:</Typography>
              <Select
                value={selectedComplaintType}
                onChange={handleComplaintTypeChange}
                style={{ width: "100%" }}
              >
                <Option value="ALL">ALL</Option>
                <Option value="Online">Online</Option>
                <Option value="Offline">Offline</Option>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">Complaint Year:</Typography>
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                style={{ width: "100%" }}
              >
                <Option value="2024">2024</Option>
                <Option value="2023">2023</Option>
                <Option value="2022">2022</Option>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={2.5}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#598392",
                  color: "white",
                  borderRadius: "8px",
                  marginTop: { xs: "10px", sm: "0" }, // Ensuring proper alignment
                }}
                fullWidth
              >
                Apply
              </Button>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
            Monthly Data Chart
          </Typography>
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="ColumnChart"
            data={monthlyData}
            options={{
              title: "Complaints by Month",
              hAxis: { title: "Month" },
              vAxis: { title: "Complaints" },
              colors: ["#598392"],
              chartArea: { width: "70%" },
              legend: { position: "none" },
            }}
          />
        </Box>

        {/* Zone-Wise and District-Wise Data Charts in a single row */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Zone-Wise Data Chart
              </Typography>
              <Chart
                width={"100%"}
                // height={"450px"}
                chartType="ColumnChart"
                data={zoneData}
                options={{
                  title: "Complaints by Zone",
                  hAxis: { title: "Count", minValue: 0 },
                  vAxis: { title: "Zone" },
                  colors: ["#f6bd60", "#f5cac3", "#84a59d"],
                  chartArea: { width: "70%" },
                  legend: { position: "bottom" },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                District-Wise Data Chart
              </Typography>
              <Chart
                width={"100%"}
                // height={"300px"}
                chartType="ColumnChart"
                data={districtData}
                options={{
                  title: "Complaints by District",
                  hAxis: { title: "Count", minValue: 0 },
                  vAxis: { title: "District" },
                  colors: ["#f28482", "#f6bd60", "#84a59d"],
                  chartArea: { width: "70%" },
                  legend: { position: "bottom" },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Year-Wise and Pie Chart in the next row */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Year-Wise Data Chart
              </Typography>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="ColumnChart"
                data={yearData}
                options={{
                  title: "Complaints by Year",
                  hAxis: { title: "Count", minValue: 0 },
                  vAxis: { title: "Year" },
                  colors: ["#598392", "#f6bd60", "#84a59d"],
                  chartArea: { width: "70%" },
                  legend: { position: "bottom" },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Complaint Type Pie Chart
              </Typography>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="PieChart"
                data={pieData}
                options={{
                  title: "Complaint Types",
                  pieSliceText: "label",
                  colors: ["#84a59d", "#f28482"],
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Complaint Summary Table */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Complaint Summary Status
          </Typography>
          <Table
            columns={complaintSummaryColumns}
            dataSource={complaintSummaryData}
            scroll={{ y: 240 }}
            pagination={false}
            bordered
            size="middle"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default OlgprsDashBoardComponent;
