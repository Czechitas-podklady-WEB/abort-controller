import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Planets from './components/Planets'

export const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <nav className="container">
          <Link to="/">Domů</Link>
          &nbsp;|&nbsp;
          <Link to="/planets">Planety</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
