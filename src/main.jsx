import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Main from './Components/layout/Main.jsx';
import Login from './Components/Login.jsx';
import Reister from './Components/Reister.jsx';
let router = createBrowserRouter(
  [
    {
      path: "/",
      Element: <Main></Main>,
      children: [
        {
          path: "/",
          Element: <Home></Home>
        },

        {
          path: "/",
          Element: <Login></Login>
        },
        {
          path: "/",
          Element: <Reister></Reister>
        },


      ]
    }
  ]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
