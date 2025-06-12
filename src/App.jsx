
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Camping from './pages/Camping'
import Activity from './pages/Activity'
import Store from './pages/Store'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Book from './pages/Book'
import View from './pages/View'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/book" element={<Book />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  )
}

export default App
