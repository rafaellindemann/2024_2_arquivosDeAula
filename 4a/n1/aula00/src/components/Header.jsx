import './Header.css'
import { Rose } from './icons/Rose'

function Header() {
  const iconBig = {
    width: '148px',
    height: '148px'
  };
  return (
    <div className="header-container">
        <h1>Página bonita</h1>
        <Rose style={iconBig}/>
    </div>

  )
}

export default Header
