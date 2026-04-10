import '../App.css'
import { useState } from 'react'
import { LandingExperience } from '../features/landing'
import { SpatialCareerNarrative } from '../features/spatial-career-narrative'

function App() {
  const [hasEnteredWorld, setHasEnteredWorld] = useState(false)

  return (
    <main className="app-shell">
      {hasEnteredWorld ? (
        <SpatialCareerNarrative />
      ) : (
        <LandingExperience onStart={() => setHasEnteredWorld(true)} />
      )}
    </main>
  )
}

export default App
