import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../styles/StyledComponent'
import Header from '../components/header'
import '../components/css/Main.css'
import SearchIcon from '@mui/icons-material/Search'

function Main() {
   const [city, setCity] = useState('')
   const navigate = useNavigate()

   const inputChange = (e) => setCity(e.target.value)
   const handleChange = (e) => {
      e.preventDefault()
      navigate(`&q=${city.trim()}`)
   }
   return (
      <div className="Wrap">
         <Header />
         <div className="Main">
            <form onSubmit={handleChange}>
               <Input $height="80px" onChange={inputChange} placeholder="Insert here!" />
               <button>
                  <SearchIcon className="icon" />
               </button>
            </form>
         </div>
      </div>
   )
}

export default Main
