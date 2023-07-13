
import './App.css'
import Home from './components/Home'
import Carrossel from './components/Carrossel'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar'
import Container from './components/Container'
function App() {
  
  return(
    
      <BrowserRouter>
      
      

      
      <NavBar/>
      <Container customClass="minHeight">
        <Routes>
        <Route path='/Carrossel' element={<Carrossel/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/Home' element={<Home/>}/>
        </Routes>
        
      
      
      </Container>
      </BrowserRouter>

      
    
  )
}

export default App