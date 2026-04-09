import '../App.css'
import { appPanelClassNames } from './styles'
import { SpatialCareerNarrative } from '../features/spatial-career-narrative'

function App() {
  return (
    <main className="app-shell">
      <SpatialCareerNarrative panelClassNames={appPanelClassNames} />
    </main>
  )
}

export default App
