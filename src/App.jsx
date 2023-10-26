import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Filter from './pages/Filter'
import ToDo from './pages/ToDo'
import Validate from './pages/Validate'
import Consume from './pages/Consume'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/consume" element={<Consume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404: Page not found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App
