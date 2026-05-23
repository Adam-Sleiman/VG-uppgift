import { useState } from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'
import PokemonCard from './components/PokemonCard'
import StatsChart from './components/StatsChart'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isCardVisible, setIsCardVisible] = useState(false)

  const handleSearch = async (searchTerm) => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      setPokemon(null)
      setError('')
      setIsCardVisible(false)
      return
    }

    setLoading(true)
    setError('')
    setIsCardVisible(false)

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      setPokemon(response.data)
      requestAnimationFrame(() => setIsCardVisible(true))
    } catch (requestError) {
      setPokemon(null)
      setError('Pokemon not found.')
      setIsCardVisible(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="app-shell">
      <section className="search-panel">
        <h1>Pokémon Search</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="status-message">Loading...</p>}
        {error && <p className="status-message status-message--error">{error}</p>}
        {!loading && !error && pokemon && (
          <div className="results-stack">
            <PokemonCard pokemon={pokemon} isVisible={isCardVisible} />
            <StatsChart baseStats={pokemon.stats} />
          </div>
        )}
      </section>
    </main>
  )
}

export default App