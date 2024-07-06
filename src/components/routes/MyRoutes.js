import Login from "../defaultPage/login";
import Layout from "../../components/layout/layout";
import Products from "../pages/products";

const ROUTES = {
  LOGIN: "/",
  PRODUCTS: "products",
};

const myRoutes = [
  {
    path: ROUTES.LOGIN,
    name: "Login",
    key: "Login",
    authenticate: false,
    component: Login,
  },
  {
    path: ROUTES.LAYOUT,
    name: "Admin",
    key: "Admin",
    component: Layout,
    authenticate: false,
    children: [
      {
        path: ROUTES.PRODUCTS,
        name: "Products",
        key: "Products",
        authenticate: false,
        component: Products,
      },
    ],
  },
];

export default myRoutes;
export { ROUTES };
