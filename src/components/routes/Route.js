import React, { createRef } from "react";
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
import { ProjectName } from "../common/constans";

export const historyRef = createRef();

export const Router = () => {
  let paths = [];
  const getPaths = (routes, parent_keys = []) => {
    for (let i = 0; i < routes.length; i++) {
      let _route = routes[i];
      let _key = _route.key;
      let _parent_keys = [...parent_keys, _key];
      if (_route.path) {
        paths.push({ path: _route.path, keys: _parent_keys });
      } else {
        paths = getPaths(_route.children, _parent_keys);
      }
    }
    return paths;
  };
  paths = getPaths(myRoutes, []);

  const MyRoute = (my_route_props) => {
    const { pathname } = useLocation();
    let url = pathname.split("/");
    if (url[1]) {
      let path = lodash.startCase(lodash.camelCase(url[1]));
      document.title = path + " | " + ProjectName;
    } else document.title = ProjectName;
  
    const isLoggedIn = useCheckLogin();
    const hasAccess = usePageAccess(my_route_props.my_route_key);
  
    if (!my_route_props.authenticate) {
      return <>{my_route_props.children}</>;
    }
  
    if (isLoggedIn && hasAccess) {
      return <>{my_route_props.children}</>;
    }
  
    if (!isLoggedIn || !hasAccess) {
      return <NotAllowed />;
    }
  };
  

  const getRoutes = (routers, not_found) => {
    return (
      <Routes>
        {routers.map((router) => {
          if (router.path) {
            let Component = router.component;
            return (
              <Route
                exact={router.exact}
                key={`${router.key}`}
                path={router.path}
              >
                <MyRoute
                  my_route_key={router.key}
                  authenticate={router.authenticate}
                >
                  <Component {...router} />
                </MyRoute>
              </Route>
            );
          } else {
            let _paths = paths
              .filter((x) => x.keys.indexOf(router.key) > -1)
              .map((x) => x.path);
            let Component = router.component;
            let _children = getRoutes(router.children);
            return (
              <Route exact={router.exact} key={`${router.key}`} path={_paths}>
                <MyRoute
                  my_route_key={router.key}
                  authenticate={router.authenticate}
                >
                  <Component>{_children}</Component>
                </MyRoute>
              </Route>
            );
          }
        })}
        {not_found && <Route path="*" component={NotFound} />}
      </Routes>
    );
  };

  const BrowserRoute = () => {
    const history = useNavigate();
    historyRef.current = history;
    let _children = getRoutes(myRoutes, "not_found");
    return <>{_children}</>;
  };

  return (
    <BrowserRouter>
      <BrowserRoute />
    </BrowserRouter>
  );
};
