import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import ParticleCanvas from './components/canvas/ParticleCanvas'

const App = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <ParticleCanvas />
      <Home/>
    </div>
  )
}

export default App