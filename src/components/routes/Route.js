import React, { Suspense, memo, useRef } from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";

// import Loading from "@src/views/pages/loading";
import MyRoute from "./my_route";
import my_routes from "./MyRoutes";
import { UsePageAccess } from "../common/auth";

export const Router = memo(() => {
  const UseAuthenticateCheck = (route) => {
    let { pathname } = useLocation();
    let key = route.find((list) => list?.path.includes(pathname));
    if (route?.authenticate) {
      return UsePageAccess(route?.key);
    }
    return true;
  };

  const get_route = (route) => {
    let _route = {};
    if (route?.children) {
      let children = [];
      route.children?.forEach((child) => {
        let child_route = get_route(child);
        children.push(child_route);
      });
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
        children: children,
      };
    } else {
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
      };
    }
    console.log("_route", _route);
    return _route;
  };

  const MyRouter = () => {
    let routes = [];
    my_routes?.forEach((my_route) => {
      let child_route = get_route(my_route);
      routes.push(child_route);
    });

    let not_found_route = {
      path: "*",
      element: <div />,
    };

    let not_allowed_route = {
      path: "not-allowed",
      element: <div />,
    };
    routes.push(not_found_route);
    routes.push(not_allowed_route);
    let route_elements = useRoutes(routes);
    const location = useLocation();
    console.log("route_elements", routes, location);
    const authenticate_status =true
    //  UseAuthenticateCheck(routes); // Use the custom hook here
    if (authenticate_status) {
      return <div>{route_elements}</div>;
    }
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <MyRouter />
      </Suspense>
    </BrowserRouter>
  );
});
