
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './components/pokedex/Pokedex'
import PokemonDetails from './components/pokemonDetails/PokemonDetails'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Pokedex/>}  />
        <Route path="/pokemon/:id" element={<PokemonDetails/>}  />
        <Route path="*" element={<h1>Not Found</h1>}  />
      </Routes>
   
  )
}

export default App
