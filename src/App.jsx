// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './components/navbar'
import Items from './pages/Items'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />

      </Routes>
    </Router>
  )
}

export default App
