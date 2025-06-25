import './css/Header.css'
import StarsIcon from '@mui/icons-material/Stars'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

function Header({ title = 'weather dashboard' }) {
   const navigate = useNavigate()
   return (
      <div className="Wrap">
         <div className="Header">
            <h1>{title}</h1>
            <div className="buttons">
               {' '}
               <button onClick={() => navigate('/')} className="home">
                  <div className="icon">
                     <HomeIcon style={{ fontSize: '40px' }} /> <p>go Home</p>
                  </div>
               </button>
               <button onClick={() => navigate('/bookmarks')} className="bookmark">
                  <div className="icon">
                     <StarsIcon style={{ fontSize: '40px' }} /> <p>bookmark</p>
                  </div>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Header
