import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './StatsChart.css'

const statOrder = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
]

function capitalizeStatName(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function StatsChart({ baseStats = [] }) {
  const chartData = statOrder.map((statName) => {
    const matchedStat = baseStats.find((entry) => entry.stat.name === statName)

    return {
      name: capitalizeStatName(statName),
      value: matchedStat?.base_stat ?? 0,
    }
  })

  return (
    <section className="stats-chart">
      <h2 className="stats-chart__title">Base Stats</h2>
      <div className="stats-chart__frame">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData} layout="vertical" margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
            <defs>
              <linearGradient id="stats-bar-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" allowDecimals={false} />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip cursor={{ fill: 'rgba(37, 99, 235, 0.08)' }} />
            <Bar dataKey="value" fill="url(#stats-bar-gradient)" radius={[0, 10, 10, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default StatsChart