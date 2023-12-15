import { createBrowserRouter } from "react-router-dom";
import Stations from '../pages/Stations'

export const routes = [
  {
    path: '/',
    element: <Stations />
  }
]

export const router = createBrowserRouter(routes);


