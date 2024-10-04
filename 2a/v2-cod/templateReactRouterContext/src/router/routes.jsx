import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragoes from "../pages/Dragoes";
import Login from "../pages/Login";

const router = createBrowserRouter(
[
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/dragoes", element: <Dragoes />},
    {path: "/login", element: <Login />},
]
)

export default router;
