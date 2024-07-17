import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CustomLayout from '../../components/layout/layout';
import NotFound from '../defaultPage/notFound';
import Invoice from '../../components/pages/invoice';
import Promotion from '../../components/pages/promotion';
import Dashboard from '../../components/pages/overAllDashBoard';
import Login from "../defaultPage/login";
import { ProjectName } from "../common/constants";

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
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/promotion" element={<Promotion />} />
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
