import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Accueil from './components/accueil/accueil';
import Apropos from "./components/apropos/apropos"
import Contact from "./components/contact/contact"
import LaBoutique from "./components/laBoutique/laBoutique"
import NotreSavoirFaire from "./components/notreSavoirFaire/notreSavoirFaire"
import NotreHistoire from "./components/notreHistoire/notreHostoire"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:"/accueil",
    element: <Accueil />,
  },
   {
    path:"/apropos",
    element: <Apropos />,
  },
   {
    path:"/contact",
    element: <Contact />,

  },
  {
    path:"/laBoutique",
    element: <LaBoutique />,
  },
  {
    path:"/notreSavoirFaire",
    element: <NotreSavoirFaire />,
  },
  {
    path:"/notreHistoire",
    element: <NotreHistoire />,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

