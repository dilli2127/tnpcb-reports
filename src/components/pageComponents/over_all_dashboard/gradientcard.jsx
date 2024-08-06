import React from "react";
import "../../../index.css"; // Import the CSS file
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Table } from "antd";

const GradientCard = ({ selectedDistrict }) => {
  const dataSource = [
    { key: "1", district: "Chennai", pendingCases: 1200 },
    { key: "2", district: "Coimbatore", pendingCases: 800 },
    { key: "3", district: "Madurai", pendingCases: 600 },
    { key: "4", district: "Tiruchirappalli", pendingCases: 500 },
    { key: "1", district: "Chennai", pendingCases: 1200 },
    { key: "2", district: "Coimbatore", pendingCases: 800 },
    { key: "3", district: "Madurai", pendingCases: 600 },
    { key: "4", district: "Tiruchirappalli", pendingCases: 500 },
    { key: "1", district: "Chennai", pendingCases: 1200 },
    { key: "2", district: "Coimbatore", pendingCases: 800 },
    { key: "3", district: "Madurai", pendingCases: 600 },
    { key: "4", district: "Tiruchirappalli", pendingCases: 500 },
    { key: "1", district: "Chennai", pendingCases: 1200 },
    { key: "2", district: "Coimbatore", pendingCases: 800 },
    { key: "3", district: "Madurai", pendingCases: 600 },
    { key: "4", district: "Tiruchirappalli", pendingCases: 500 },
    { key: "1", district: "Chennai", pendingCases: 1200 },
    { key: "2", district: "Coimbatore", pendingCases: 800 },
    { key: "3", district: "Madurai", pendingCases: 600 },
    { key: "4", district: "Tiruchirappalli", pendingCases: 500 },
  ];

  const columns = [
    { title: "District", dataIndex: "district", key: "district" },
    { title: "Pending Cases", dataIndex: "pendingCases", key: "pendingCases" },
  ];

  return (
    <Box sx={{ flex: 1, padding: "20px", boxSizing: "border-box" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
              background:"#c8b6ff",
               borderRadius: 2,
                boxShadow: 2,
            }}
          >
            {" "}
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
              District Information
            </Typography>
            {selectedDistrict ? (
              <>
                <Typography variant="h4">{selectedDistrict.name}</Typography>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <Grid width={"50%"}>
                    <Typography variant="h6">
                      Pending Cases: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                  <Grid>
                    {" "}
                    <Typography variant="h6">
                      Disposed Cases: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <Grid width={"50%"}>
                    <Typography variant="h6">
                    Unassinged: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                  <Grid>
                    {" "}
                    <Typography variant="h6">
                    Processing: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <Grid width={"50%"}>
                    <Typography variant="h6">
                    Completed: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                  <Grid>
                    {" "}
                    <Typography variant="h6">
                    Non: {selectedDistrict.pendingCases}
                    </Typography>
                  </Grid>
                </Stack>
              </>
            ) : (
              <Typography variant="h4">
                Select a district to see details
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={{ y: 500 }} // Adjust the scroll height as needed
            pagination={true} // Disable pagination if you prefer a scroll-only table
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GradientCard;
