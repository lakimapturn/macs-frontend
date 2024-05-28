import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

const AppRouter = (props) => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
