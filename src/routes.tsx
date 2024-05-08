import { Layout } from "components";
import Home from "pages";
import AuthGuard from "pages/auth/AuthGuard";
import LoginPage from "pages/auth/Login";
import RegisterPage from "pages/auth/Register";
import Bills from "pages/Bill";
import OrderHistory from "pages/OrderHistory";
import Result from "pages/Result";
import Single from "pages/single";
import Standard from "pages/standard";
import { Navigate } from "react-router-dom";

const routes = [
  {
    element: <Layout />,

    children: [
      {
        path: "/sequency",
        element: <Home />,
      },
      {
        path: "/sequency/standard",
        element: <Standard />,
      },
      {
        path: "/sequency/single",
        element: <Single />,
      },
      {
        path: "/order",
        element: (
          <AuthGuard>
            <OrderHistory />
          </AuthGuard>
        ),
      },
      {
        path: "/bill",
        element: (
          <AuthGuard>
            <Bills />
          </AuthGuard>
        ),
      },
      {
        path: "/result",
        element: (
          <AuthGuard>
            <Result />
          </AuthGuard>
        ),
      },
    ],
  },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/", element: <Navigate to="sequency" /> },
  // { path: '*', element: < /> },
];

export default routes;
