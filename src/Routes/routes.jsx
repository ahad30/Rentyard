import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Property from "../Pages/Home/Property";


export const routes = createBrowserRouter([
     
     {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
         {
        path: "/",
        element: <Home />,
      },
   {
        path: "/add-property",
        element: <Property />,
      },
      ]
     }
      
]);
