import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  return (
    <div className="app">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={() => setCurrentPage('dashboard')} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={() => setCurrentPage('landing')} />
      )}
    </div>
  )
}

export default App
