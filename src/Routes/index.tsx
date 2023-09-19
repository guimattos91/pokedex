import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Pokemon from 'pages/Pokemon'
import Pokemons from 'pages/Pokemons'
import Contact from 'pages/Contact'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
