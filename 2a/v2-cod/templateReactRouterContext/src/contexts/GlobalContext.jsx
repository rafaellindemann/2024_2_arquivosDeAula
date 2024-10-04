import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates, dono da Sicromoft'
// let diaDeHoje = 'Quarta, ou não'
const [diaDeHoje, setDiaDeHoje] = useState('Quinta')

    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiaDeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}
