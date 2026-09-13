import { useState, useEffect } from 'react'

function LandingPage({ onNavigate }) {
  const [trips, setTrips] = useState([
    { id: 1, destination: 'Paris', startDate: '2024-06-15', endDate: '2024-06-22' },
    { id: 2, destination: 'Tokyo', startDate: '2024-07-01', endDate: '2024-07-14' },
    { id: 3, destination: 'New York', startDate: '2024-08-10', endDate: '2024-08-17' },
  ])

  return (
    <div className="page">
      <div className="header">
        <h1>🌍 TravelOS</h1>
        <p>Your Entire Trip. One Intelligent App.</p>
      </div>

      <div className="trips-grid">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <h3>{trip.destination}</h3>
            <p>From: {trip.startDate}</p>
            <p>To: {trip.endDate}</p>
            <button className="button" onClick={onNavigate}>
              View Details
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="button" onClick={onNavigate}>
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default LandingPage
