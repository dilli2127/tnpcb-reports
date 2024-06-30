import React from "react";
import lodash from "lodash";

import { ProjectName } from "../common/constants"; 
import { Navigate } from "react-router-dom";

export default function MyRoute({ name, authenticate, children }) {
  if (name) {
    let page_name = lodash.startCase(lodash.camelCase(name));
    document.title = page_name + " | " + ProjectName;
  } else document.title = ProjectName;

  const isAuthenticated =true;
  return isAuthenticated || !authenticate ? (
    children
  ) : (
    <Navigate to="/not-allowed" />
  );
}
