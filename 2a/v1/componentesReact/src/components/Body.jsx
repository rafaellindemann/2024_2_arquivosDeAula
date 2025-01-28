import BarbieAriel from './BarbieAriel'
import './Body.css'
import Ken from './Ken'
function Body() {
  return (
    <div className='body-container'>
        <h2>Barbie Moana</h2>
        <img className="imagens-body" src="./images/moana.webp" alt="" />

        <BarbieAriel />
        <Ken />
    </div>
  )
}

export default Body

