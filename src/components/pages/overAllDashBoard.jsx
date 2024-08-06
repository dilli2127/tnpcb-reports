import React from "react";
import DashboardLanding from "../pageComponents/over_all_dashboard/dash_board_landing";
import GeoChartTamilNadu from "../pageComponents/over_all_dashboard/geo_chart";
import ReportsTable from "../pageComponents/over_all_dashboard/dashboard_table";



const OverAllDashBoard = () => {
  

  return (
   <>
   <DashboardLanding/>
   <GeoChartTamilNadu/>
   <ReportsTable/>
   </>
  );
};

export default OverAllDashBoard;
