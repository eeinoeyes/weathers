import '../components/css/NotFound.css'
import HomeIcon from '@mui/icons-material/Home'
import Main from './Main'
import { Link } from 'react-router-dom'
function NotFound() {
   return (
      <div className="Notfound">
         <div className="top">
            <h2 style={{ fontSize: '80px' }}>
               Sorry! <br />
               Unable to load data{' '}
            </h2>
            <p style={{ fontSize: '40px' }}> Error: </p>
         </div>
         <div className="bottom">
            <Link to={'/'}>
               <HomeIcon style={{ fontSize: '90px' }} />
            </Link>
            <p> ↑Go back to Home!</p>
         </div>
      </div>
   )
}

export default NotFound
