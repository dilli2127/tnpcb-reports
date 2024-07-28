import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Chart from "react-google-charts";

const OlmmsCharts = (props) => {
console.log("props",props)

    return(
        <Grid container spacing={4} mb={4}>
        {props.chartOptions.slice(4,7).map((chart, index) => (
          <Grid item xs={12} md={6} lg={4}xl={4} key={index + 4}>
            <Card>
              <CardContent>
                <Chart
                  chartType={chart.chartType}
                  width="100%"
                  height="300px"
                  data={props.chartData[index + 2]}
                  options={chart.options}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
}
export default OlmmsCharts;