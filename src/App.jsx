import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import Knitwear from './pages/Knitwear'
import ImportsTrading from './pages/ImportsTrading'
import Manufacturing from './pages/Manufacturing'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Knitwear />} />
          <Route path="imports" element={<ImportsTrading />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
