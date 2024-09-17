import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    // informações globais
    let usuarioLogado = 'Gill Bates'
    const [usuarios, setUsuarios] = useState([
        {
            id: Date.now(),
            nome: 'ET Bilu',
            email: 'busquem@conhecimento.com.br'
        },
        {
            id: Date.now()+1,
            nome: 'Mano Juca',
            email: 'mj-vidaloka@email.com'
        },
        {
            id: Date.now()+2,
            nome: 'Gill Bates',
            email: 'gill@sicromoft.com'
        },
    ])
    
    // /informações globais
    return (
        <GlobalContext.Provider value={{usuarioLogado, usuarios, setUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )
}