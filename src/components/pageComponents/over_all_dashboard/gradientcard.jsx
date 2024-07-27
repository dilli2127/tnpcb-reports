import React from "react";
import "../../../index.css"; // Import the CSS file
import { Box, Grid, Typography } from "@mui/material";
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
              background:
                "linear-gradient(135deg, #FF5733, #FFC300, #DAF7A6, #33FF57, #33B5E5)",
              backgroundSize: "400% 400%", // Important for animation
              color: "#fff", // White text for better contrast
              animation: "gradientAnimation 10s ease infinite", // Apply the gradient animation
            }}
          >
            {" "}
            <Typography
              variant="h4"
              sx={{
                // background: "linear-gradient(50deg, #48A9FE 40%, #48cae4 90%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                textAlign: "center",
                // marginBottom: "20px",
              }}
            >
              District Information
            </Typography>
            {selectedDistrict ? (
              <>
                <Typography variant="h4">
                  <strong>{selectedDistrict.name}:</strong>
                </Typography>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                <p>Pending Cases: {selectedDistrict.pendingCases}</p>
                
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
            scroll={{ y: 240 }} // Adjust the scroll height as needed
            pagination={false} // Disable pagination if you prefer a scroll-only table
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GradientCard;
