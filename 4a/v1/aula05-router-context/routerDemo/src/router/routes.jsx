import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Musicas from "../pages/Musicas";
import Filmes from "../pages/Filmes";
import Seriados from "../pages/Seriados";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/musicas", element: <Musicas />},
    {path: "/filmes", element: <Filmes />},
    {path: "/seriados", element: <Seriados />},
])

export default router;