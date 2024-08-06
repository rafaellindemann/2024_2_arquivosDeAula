import './Conteudo.css'
import { Duck } from './Duck'
function Conteudo() {

  return (
    <div className='conteudo-container'>
        <Duck />
        <img src="./vite.svg" alt="Img de svg do vite" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla quasi vero, animi temporibus odit labore illum, tempora quis similique sapiente quisquam ullam nobis! Corporis quis ipsam asperiores nihil tenetur.
        </p>
        <img className='imagem-conteudo' src="./images/css-bruno.jfif" alt="imagem do Bruno com CSS, uma história de amor intensa" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla quasi vero, animi temporibus odit labore illum, tempora quis similique sapiente quisquam ullam nobis! Corporis quis ipsam asperiores nihil tenetur.
        </p>
        
    </div>
  )
}

export default Conteudo

// react
// functional 
// component
// export

