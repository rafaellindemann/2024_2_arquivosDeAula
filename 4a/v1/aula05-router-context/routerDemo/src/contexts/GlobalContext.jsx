import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    // informações globais
    let usuarioLogado = 'Gill Bates'
    
    // /informações globais
    return (
        <GlobalContext.Provider value={{usuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}