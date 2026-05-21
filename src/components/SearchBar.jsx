import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for a Pokémon"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar