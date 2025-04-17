import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popular from './Components/Popular'
import AnimeItem from './Components/AnimeItem'
import HomePage from './Components/HomePage'
import Gallery from './Components/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
