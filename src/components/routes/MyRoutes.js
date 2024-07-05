import Login from "../defaultPage/login";
import Layout from "../layout/layout";
import Products from "../pages/products";

export const ROUTES = {
  LOGIN: "/",
  LAYOUT: "layout",
  PRODUCTS: "/products",
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
    ],
  },
];

export default my_routes;
