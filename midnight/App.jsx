import './styles.css'
import React from 'react'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import Discover from './components/DiscoverLand'
import Favorites from './components/Favorites'
import ShowDetails from './components/ShowDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {

  return (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Preview />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </div>
  )
}