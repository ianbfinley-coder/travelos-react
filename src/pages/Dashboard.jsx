import { useState, useEffect } from 'react'

function Dashboard({ onNavigate }) {
  const [stats, setStats] = useState([
    { id: 1, label: 'Total Trips', value: '12', icon: '✈️' },
    { id: 2, label: 'Countries Visited', value: '8', icon: '🌍' },
    { id: 3, label: 'Total Days Traveled', value: '156', icon: '📅' },
    { id: 4, label: 'Upcoming Trips', value: '3', icon: '🎯' },
  ])

  const renderStatBox = (stat) => (
    <div key={stat.id} className="stat-box">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-value">{stat.value}</div>
    </div>
  )

  return (
    <div className="page">
      <div className="header">
        <h1>📊 Dashboard</h1>
        <p>Your Travel Statistics</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => renderStatBox(stat))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="button" onClick={onNavigate}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Dashboard
