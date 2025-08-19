import { BrowserRouter, Routes, Route} from "react-router-dom"

import Hootlayout from './layouts/hootlayout.jsx'
import Home from './pages/home.jsx'
import Favoritos from './pages/favoritos.jsx'
import DetalheFilmes from './pages/detalheFilmes.jsx'

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hootlayout/>}>
          <Route index element={<Home/>} />
          <Route path="favoritos" element={<Favoritos/>}/>
          <Route path="detalhes" element={<DetalheFilmes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


