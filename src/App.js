import React from 'react'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='Nav-bar'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}