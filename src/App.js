import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogFormPage from "./Pages/BlogFormPage";
import Layout from "./Layouts/Layout";
import BlogListPage from "./Pages/BlogListPage";
import "./App.css";

const urlEndPoint = process.env.REACT_APP_BACKEND;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/blog-form",
          element: <BlogFormPage 
          urlEndPoint = {urlEndPoint}
          />,
        },
        {
          index: true,
          path: "/list",
          element: <BlogListPage 
          urlEndPoint = {urlEndPoint}
          />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
