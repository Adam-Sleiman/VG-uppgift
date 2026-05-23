import './PokemonCard.css'

const typeColors = {
  normal: '#9CA3AF',
  fire: '#F97316',
  water: '#3B82F6',
  electric: '#FACC15',
  grass: '#22C55E',
  ice: '#38BDF8',
  fighting: '#DC2626',
  poison: '#A855F7',
  ground: '#D97706',
  flying: '#60A5FA',
  psychic: '#EC4899',
  bug: '#84CC16',
  rock: '#A16207',
  ghost: '#6366F1',
  dragon: '#4F46E5',
  dark: '#374151',
  steel: '#94A3B8',
  fairy: '#F472B6',
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function PokemonCard({ pokemon, isVisible }) {
  return (
    <article className={`pokemon-card ${isVisible ? 'pokemon-card--visible' : ''}`}>
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