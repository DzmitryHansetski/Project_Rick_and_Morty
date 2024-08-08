import './App.css';
import {HomePage} from "./pages/HomePage/HomePage";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage";
import {LocationPage} from "./pages/LocationPage/LocationPage";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {Header} from "./common/components/Header/Header";
import { Character } from './pages/CharacterPage/Character/Character';

const router = createBrowserRouter([
  {
      path: "/",
      element: <div>
          <Header/>
          <Outlet/>
      </div>,
      children: [
          {
              path: "/",
              element: <HomePage/>,
          },
          {
              path: "characters",
              element: <CharacterPage/>,
          },
          {
              path: "characters/:id",
              element: <Character/>,
          },
          {
              path: "locations",
              element: <LocationPage/>,
          },
          {
              path: "episodes",
              element: <EpisodePage/>,
          },
      ]
  },
]);

export const App = () => {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}