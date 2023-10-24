import { ComponentState } from "react";
import routes from ".";
import Seller from "@/view/auth/SellerForm/seller";
import AuthLayout from "@/layout/AuthLayout";
import Buyer from "@/view/auth/BuyerForm/buyer";
import Home from "@/view/pages/Home";
import DefaultLayout from "@/layout/DefaultLayout";
import Category from "@/view/pages/Category";

interface PublicRoute {
  path: string;
  element: ComponentState;
  layout?: any;
}
export const publicRoutes: PublicRoute[] = [
  {
    path: routes.signupSeller,
    element: <Seller></Seller>,
    layout: AuthLayout,
  },
  {
    path: routes.loginSeller,
    element: <Seller></Seller>,
    layout: AuthLayout,
  },
  {
    path: routes.signupBuyer,
    element: <Buyer></Buyer>,
    layout: AuthLayout,
  },
  {
    path: routes.loginBuyer,
    element: <Buyer></Buyer>,
    layout: AuthLayout,
  },

  {
    path: routes.home,
    element: <Home></Home>,
    layout: DefaultLayout,
  },
  {
    path: routes.home,
    element: <Home></Home>,
    layout: DefaultLayout,
  },
  {
    path: routes.category,
    element: <Category></Category>,
    layout: DefaultLayout,
  },
];
