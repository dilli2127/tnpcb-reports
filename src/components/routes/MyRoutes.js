import Login from "../defaultPage/login";
import Layout from "../layout/layout";
import Products from "../pages/products";
import Category from "../pages/category";
import Units from "../pages/units";
import Inventory from "../pages/Inventory";

export const ROUTES = {
  LOGIN: "/",
  LAYOUT: "layout",
  PRODUCTS: "/products",
  CATEGORY: "/category",
  UNITS: "/units",
  INVENTORY: "/inventory",
};

const my_routes = [
  {
    path: ROUTES.LOGIN,
    name: "Login",
    key: "Login",
    authenticate: true,
    component: <Login />,
  },
  {
    name: "Admin",
    key: "Admin",
    component: <Layout />,
    authenticate: false,
    children: [
      {
        path: ROUTES.PRODUCTS,
        name: "Products",
        key: "Products",
        authenticate: false,
        component: <Products />,
      },
      {
        path: ROUTES.CATEGORY,
        name: "Category",
        key: "Category",
        authenticate: false,
        component: <Category />,
      },
      {
        path: ROUTES.UNITS,
        name: "Units",
        key: "Units",
        authenticate: false,
        component: <Units />,
      },
      {
        path: ROUTES.INVENTORY,
        name: "Units",
        key: "Units",
        authenticate: false,
        component: <Inventory />,
      },
    ],
  },
];

export default my_routes;
