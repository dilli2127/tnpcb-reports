import Login from "../defaultPage/login";
import Layout from "../layout/layout";
import Products from "../pages/products"
import Category from "../pages/category"
import Units from "../pages/units"
import Inventory from "../pages/Inventory"

export const ROUTES = {
  LOGIN: "/",
  LAYOUT:"layout",
  PRODUCTS:"/products",
  CATEGORY:"/category",
  UNITS :"/units",
  INVENTORY:"/inventory"
};

const myRoutes = [
  {
    path: ROUTES.LOGIN,
    exact: true,
    key: "Login",
    authenticate: false,
    component: Login,
  },
  {
    key: "Admin",
    component: Layout,
    authenticate: false,
    children: [
      {
        path: ROUTES.PRODUCTS,
        exact: true,
        key: "Products",
        authenticate: false,
        component: Products,
      },
      {
        path: ROUTES.CATEGORY,
        exact: true,
        key: "Category",
        authenticate: false,
        component: Category,
      },
      {
        path: ROUTES.UNITS,
        exact: true,
        key: "Units",
        authenticate: false,
        component: Units,
      },
      {
        path: ROUTES.INVENTORY,
        exact: true,
        key: "Units",
        authenticate: false,
        component: Inventory,
      },
    ],
  },
];

export default myRoutes;
