import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/browse",
        element: <BrowsePage />,
      },
    ],
    errorElement: <h2>Page not Found</h2>
  },
]);
