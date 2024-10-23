import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [produtoMagico, setProdutoMagico] = useState("Vassoura")
const[produtos, setProdutos] = useState([])

    return(
        <GlobalContext.Provider value={{produtoMagico, setProdutoMagico, produtos, setProdutos}}>
            {children}
        </GlobalContext.Provider>
    )
}
