import { GiDiceFire, GiDiceTarget, GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";
import { BiSolidDice1 } from "react-icons/bi";

import { useState } from "react";
function Dado() {
    const dados = [<BsDice1 />, <BsDice2 />, <BsDice3 />, <BsDice4 />, <BsDice5 />, <BsDice6 /> ]
    const [dado, setDado] = useState()
    function jogarDado(){
        let n = Math.floor(Math.random()*6)

        setDado(dados[n])
    }
  return (
    <div>
        <GiDiceTarget />
        <GiPerspectiveDiceSixFacesFive />
        <GiDiceFire />
        <div>
            <BsDice1 />
            <BsDice2 />
            <BsDice3 />
            <BsDice4 />
            <BsDice5 />
            <BsDice6 />

        </div>
        {dado}
        <button onClick={jogarDado}>Sortear</button>
    </div>
  )
}

export default Dado
