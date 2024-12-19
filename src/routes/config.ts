import React from "react";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

const Home = React.lazy(() => import("../pages/Home"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

export const routes = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
    protected: true,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: AuthLayout,
    protected: false,
  },
  {
    path: "*",
    component: ErrorPage,
    layout: AuthLayout,
    protected: false,
  },
];
