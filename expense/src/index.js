import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import DashboardLayout from './DashboarLayout';
import FinalPage1 from './Components/LogDash/Page1/FinalPage1';
import FinalPage2 from './Components/LogDash/Page2/FinalPage2';
import FinalPage3 from './Components/LogDash/Page3/FinalPage3';
import { GlobalProvider } from './context/globalContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoutesFromElements, Route } from 'react-router-dom';
import SignUp from './Components/Login/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<DashboardLayout/>}>
      <Route path='' element = {<Dashboard/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element ={<SignUp/>}/>
      <Route path = '/dashboard' element = {<FinalPage1/>}/>
      <Route path='/add-income' element = {<FinalPage2/>}/>
      <Route path = '/add-expense' element = {<FinalPage3/>}/>
      {/* <Route path = "/dashboard" element = {<App/>}></Route> */}
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  </React.StrictMode>
);

