import '../components/css/NotFound.css'
import HomeIcon from '@mui/icons-material/Home'
import Main from './Main'
import { Link } from 'react-router-dom'

function NotFound({ error }) {
   console.log(error)
   return (
      <div className="Notfound">
         <div className="top">
            <h2 style={{ fontSize: '80px' }}>
               Sorry! <br />
               Unable to load data{' '}
            </h2>
            <p style={{ fontSize: '40px' }}>{error ? error : 'undefined'} </p>
         </div>
         <div className="bottom">
            <Link to={'/'}>
               <HomeIcon className="icon" style={{ fontSize: '90px' }} />
            </Link>
            <p> ↑Go back to Home!</p>
         </div>
      </div>
   )
}

export default NotFound
