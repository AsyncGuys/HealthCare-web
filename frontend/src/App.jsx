
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../src/Pages/Home'
import Map from '../src/Pages/map'
import Hospitals from '../src/Pages/hospitals'
import Bot from '../src/Pages/bot'
import Ambulance from '../src/Pages/ambulance'
import Landing from './Pages/Landing';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import DiabetessForm from './components/common/DiabetessForm';
import HeartForm from './components/common/HeartForm';
import Eye from './components/common/Eye';
import LiverInputForm from './components/common/LiverInputForm';
import Tumor from './components/common/Tumor';
import Alzheimer from './components/common/Alzheimer';
function App() {
  return (
    <>
{/* 
     <Home />
     <Footer /> */}

     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Landing/>} />
        <Route exact path='/checkup' element ={<Home/>}/>
        <Route exact path='/checkup/diabetes' element ={<DiabetessForm/>}/>
        <Route exact path='/checkup/heart' element ={<HeartForm/>}/>
        <Route exact path='/checkup/liver' element ={<LiverInputForm/>}/>
        <Route exact path='/checkup/eye' element ={<Eye/>}/>
        <Route exact path='/checkup/tumor' element ={<Tumor/>}/>
        <Route exact path='/checkup/alzheimer' element ={<Alzheimer/>}/>
        <Route path='/map' element ={<Map/>} />
        {/* <Route path='/bot' element ={<Bot/>} /> */}
        <Route path='/ambulance' element ={<Ambulance/>} />
        <Route path='/hospitals' element ={<Hospitals/>} />
     </Routes>
     </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
