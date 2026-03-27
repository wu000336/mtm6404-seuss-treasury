import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import Quotes from './pages/Quotes'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App