import React, { createRef, Suspense } from "react";
import lodash from "lodash";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import NotFound from "../defaultPage/notFound";
import myRoutes from "../routes/MyRoutes";
import { useCheckLogin, usePageAccess } from "../auth/auth";
import NotAllowed from "../defaultPage/notAllowed";
import Login from "../defaultPage/login";
import { ProjectName } from "../common/constants";

export const historyRef = createRef();

const Router = () => {
  let paths = [];

  // Utility function to retrieve all paths from routes configuration
  const getPaths = (routes, parent_keys = []) => {
    for (let i = 0; i < routes.length; i++) {
      let _route = routes[i];
      let _key = _route.key;
      let _parent_keys = [...parent_keys, _key];
      if (_route.path) {
        paths.push({ path: _route.path, keys: _parent_keys });
      } else if (_route.children) {
        paths = getPaths(_route.children, _parent_keys);
      }
    }
    return paths;
  };

  paths = getPaths(myRoutes, []);

  // Component to handle route authentication and access
  const MyRoute = ({ my_route_key, authenticate, children }) => {
    const { pathname } = useLocation();
    let url = pathname.split("/");
    if (url[1]) {
      let path = lodash.startCase(lodash.camelCase(url[1]));
      document.title = path + " | " + ProjectName;
    } else {
      document.title = ProjectName;
    }

    const isLoggedIn = useCheckLogin();
    const hasAccess = usePageAccess(my_route_key);
    console.log("isLoggedIn",isLoggedIn)
    console.log("hasAccess",hasAccess)

    if (!authenticate) {
      return <>{children}</>;
    }

    if (!isLoggedIn && !hasAccess) {
      return <>{children}</>;
    }

    if (!isLoggedIn) {
      return <Login />; // Redirect to Login component if not logged in
    }

    if (!hasAccess) {
      return <NotAllowed />; // Redirect to NotAllowed component if no access
    }
  };

  // Function to render nested routes recursively
  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const { key, path, component: Component, children } = route;

      return (
        <Route
          key={key}
          path={path}
          element={
            <MyRoute
              my_route_key={key}
              authenticate={route.authenticate}
            >
              <Component />
            </MyRoute>
          }
        >
          {children && renderRoutes(children)}
        </Route>
      );
    });
  };

  const BrowserRoute = () => {
    const history = useNavigate();
    historyRef.current = history;
    return (
      <Routes>
        {renderRoutes(myRoutes)}
        <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <BrowserRoute />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
