import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css"
import "./Chat.css"

import App from './App'

import Home from './pages/Home'
import Login from './pages/Login'
import Ticket from './pages/Ticket.jsx'
import NotFound from "./pages/NotFound.jsx";
import ChatIA from "./pages/ChatIA.jsx";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/ticket", element: <Ticket /> },
      { path: "/mascote", element: <ChatIA /> },
      {path:"*",
        element: <NotFound />
      }
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
