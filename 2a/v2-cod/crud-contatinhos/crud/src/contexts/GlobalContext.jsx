import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const[contatinho, setContatinho] = useState('')

    return(
        <GlobalContext.Provider value={{
                usuarioLogado,
                contatinho,
                setContatinho
            }}>

            {children}
        </GlobalContext.Provider>
    )
}
