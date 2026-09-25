import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";
import Categories from "../pages/Categories";

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
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
    errorElement: <h2>Page not Found</h2>,
  },
]);
