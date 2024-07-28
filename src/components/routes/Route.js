import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CustomLayout from '../../components/layout/layout';
import NotFound from '../defaultPage/notFound';
import Dashboard from '../../components/pages/overAllDashBoard';
import Login from "../defaultPage/login";
import { ProjectName } from "../common/constants";
import OlmmsDashboardPage from '../pages/olmms_dashboard';
import OcmmsDashBoardComponent from '../pageComponents/ocmms_dashboard/ocmms_dashboard';
import OlgprsDashBoardComponent from '../pageComponents/olgprs_dashboard/olgprs_dashboard_componenet';

const Router = () => {
  return (
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  );
};

const RoutePages = () => {
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    const cleanedPathname = pathname.replace(/\//, '').replace(/\/$/, '');
   let LocationName = `${cleanedPathname} | ${ProjectName}`;
    document.title = LocationName.toUpperCase();
  }, [location.pathname]); 

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="*"
        element={
          <CustomLayout>
            <Routes>
            <Route path="/over-all-dashboard" element={<Dashboard />} />
            <Route path="/olmms-dashboard" element={<OlmmsDashboardPage />} />
            <Route path="/ocmms-dashboard" element={<OcmmsDashBoardComponent />} />
            <Route path="/olgprs-dashboard" element={<OlgprsDashBoardComponent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CustomLayout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
