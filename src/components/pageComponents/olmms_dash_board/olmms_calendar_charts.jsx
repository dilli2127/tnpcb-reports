import React from 'react';
import { Card, CardContent, Grid } from "@mui/material";
import { Chart } from "react-google-charts";

const OlmmsCalendarChart = () => {
  const chartData = [
    ["Date", "Count"],
    [new Date(2022, 0, 1), 163],
    [new Date(2022, 1, 1), 75],
    [new Date(2022, 2, 1), 120],
    [new Date(2022, 3, 1), 200],
    [new Date(2022, 4, 1), 300],
    [new Date(2022, 5, 1), 250],
    [new Date(2022, 6, 1), 400],
    [new Date(2022, 7, 1), 350],
    [new Date(2022, 8, 1), 500],
    [new Date(2022, 9, 1), 450],
    [new Date(2022, 10, 1), 600],
    [new Date(2022, 11, 1), 550],
  ];

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Chart
              chartType="Calendar"
              width="100%"
              height="130px"
              data={chartData}
              options={{
                title: 'Case Counts by Month',
                calendar: {
                  cellSize: 10,
                  yearLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 32,
                    color: '#1A8763',
                    bold: true,
                    italic: true
                  },
                  monthLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#981b48',
                    bold: true,
                    italic: true
                  },
                  dayOfWeekLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#1A8763',
                    bold: true,
                    italic: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Chart
              chartType="Calendar"
              width="100%"
              height="120px"
              data={chartData}
              options={{
                title: 'Hearing Counts by Month',
                calendar: {
                  cellSize: 10,
                  yearLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 32,
                    color: '#1A8763',
                    bold: true,
                    italic: true
                  },
                  monthLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#981b48',
                    bold: true,
                    italic: true
                  },
                  dayOfWeekLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#1A8763',
                    bold: true,
                    italic: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Chart
              chartType="Calendar"
              width="100%"
              height="130px"
              data={chartData}
              options={{
                title: 'Disposed Counts by Month',
                calendar: {
                  cellSize: 10,
                  yearLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 32,
                    color: '#1A8763',
                    bold: true,
                    italic: true
                  },
                  monthLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#981b48',
                    bold: true,
                    italic: true
                  },
                  dayOfWeekLabel: {
                    fontName: 'Times-Roman',
                    fontSize: 12,
                    color: '#1A8763',
                    bold: true,
                    italic: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OlmmsCalendarChart;
