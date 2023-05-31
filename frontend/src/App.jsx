
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../src/Pages/Home'
import Map from '../src/Pages/map'
import Hospitals from '../src/Pages/hospitals'
import Bot from '../src/Pages/bot'
import Ambulance from '../src/Pages/ambulance'
function App() {
  return (
    <>
{/* 
     <Home />
     <Footer /> */}

     <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<Home/>} />
        <Route path='/map' element ={<Map/>} />
        <Route path='/bot' element ={<Bot/>} />
        <Route path='/ambulance' element ={<Ambulance/>} />
        <Route path='/hospitals' element ={<Hospitals/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
