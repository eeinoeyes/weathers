import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Container } from '../styles/StyledComponent'
import Header from '../components/header'
import Footer from '../components/Footer'
import '../components/css/Main.css'
import SearchIcon from '@mui/icons-material/Search'

function Main() {
   const [city, setCity] = useState('')
   const navigate = useNavigate()

   const inputChange = (e) => setCity(e.target.value)
   const handleChange = (e) => {
      e.preventDefault()
      navigate(`/details/${city.trim()}`)
   }
   return (
      <div>
         <Header onBookmarks={() => navigate('/bookmarks')} />
         <Container className="Main">
            <form onSubmit={handleChange}>
               <Input $height="80px" onChange={inputChange} placeholder="Insert here!" />
               <button>
                  <SearchIcon className="icon" />
               </button>
            </form>
         </Container>
         <Footer />
      </div>
   )
}

export default Main
