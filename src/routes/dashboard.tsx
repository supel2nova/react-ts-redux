import { RouteObject } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/dashboard-layout";
import DashHome from "../pages/dashboard/dashhome";
import DashRoom from "../pages/dashboard/dashroom";

const routeDashboard: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashHome />,
      },
      {
        path: "room",
        element: <DashRoom />,
      },
    ],
  },
];

export default routeDashboard;
