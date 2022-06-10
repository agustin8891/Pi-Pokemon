import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import PokemonCreate from './components/PokemonCreate/PokemonCreate'
import Detail from './components/Detail/Detail'
import Home from "./components/Home/Home";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
	      <Route path='/' element = {<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/pokemons' element={<PokemonCreate/>} />
        <Route path="/home/:id" element={<Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


