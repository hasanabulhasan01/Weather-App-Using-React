import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import History from '../views/History'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/History",
      element: <History />,
    },
  ]);
  function Router() {
    return <RouterProvider router={router} />;
  }
  export default Router;
  