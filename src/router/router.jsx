import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Error from "../components/pages/Error/Error";
import Home from "../components/shared/Home/Home";
import About from "../components/pages/page/About";
import Contact from "../components/pages/page/Contact";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/login/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },       
      { path: "about", element: <About /> },   
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },    
      { path: "register", element: <Register /> }, 
    ],
  },
]);
