import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/courses",
      element: <><Courses/></>
    },
    {
      path: "/contact",
      element: <><Contact/></>
    },
    {
      path: "/aboutus",
      element: <><AboutUs/></>
    },
    {
      path: "/signin",
      element: <><Signin/></>
    },
    {
      path: "/signup",
      element: <><Signup/></>
    },
    {
      path: "/dashboards",
      element: <><Dashboard/></>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
