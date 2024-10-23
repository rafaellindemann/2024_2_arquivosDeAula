import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import AlterarProduto from "../pages/AlterarProduto";
import CadastroProduto from "../pages/CadastroProduto";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/alterarproduto", element: <AlterarProduto />},
    {path: "/cadastroproduto", element: <CadastroProduto />},
])

export default router;
