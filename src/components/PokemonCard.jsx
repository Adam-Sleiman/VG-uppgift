import './PokemonCard.css'

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <h2 className="pokemon-card__name">{capitalize(pokemon.name)}</h2>
      <img
        className="pokemon-card__image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="pokemon-card__types">
        {pokemon.types.map((typeEntry) => (
          <span
            key={typeEntry.type.name}
            className="pokemon-card__type"
            style={{ backgroundColor: typeColors[typeEntry.type.name] ?? '#6b7280' }}
          >
            {capitalize(typeEntry.type.name)}
          </span>
        ))}
      </div>
    </article>
  )
}

export default PokemonCard