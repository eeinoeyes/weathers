// import { useLocation } from 'react-router-dom'
import './css/Header.css'
import StarsIcon from '@mui/icons-material/Stars'

function Header() {
   return (
      <div className="Wrap">
         <div className="Header">
            <h1>title</h1>
            <div className="icon">
               <StarsIcon style={{ fontSize: '40px' }} />
               <p>Bookmark</p>
            </div>
         </div>
      </div>
   )
}

export default Header
