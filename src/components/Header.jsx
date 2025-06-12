
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <header className="main-header">
        <div className="header-content-wrapper">
          <div className="logo-container">
            <img
              src="assets/logo.jpg"
              alt="TP Land Farm Logo"
              className="header-logo"
            />
            <h1 className="header-title">ทีพีแลนด์ ฟาร์ม</h1>
          </div>
          <button
            id="menu-toggle"
            className="menu-toggle"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <nav id="main-nav" className="main-nav">
          <Link 
            to="/camping" 
            className={`nav-link ${isActive('/camping') ? 'active' : ''}`}
          >
            CAMPING
          </Link>
          <Link 
            to="/activity" 
            className={`nav-link ${isActive('/activity') ? 'active' : ''}`}
          >
            ACTIVITY
          </Link>
          <Link 
            to="/store" 
            className={`nav-link ${isActive('/store') ? 'active' : ''}`}
          >
            STORE
          </Link>
          <Link 
            to="/login" 
            className={`nav-link ${isActive('/login') ? 'active' : ''}`}
          >
            LOGIN
          </Link>
        </nav>
      </header>

      <div 
        id="mobile-menu" 
        className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
      >
        <Link 
          to="/camping" 
          className="mobile-menu-item"
          onClick={() => setMobileMenuOpen(false)}
        >
          CAMPING
        </Link>
        <Link 
          to="/activity" 
          className="mobile-menu-item"
          onClick={() => setMobileMenuOpen(false)}
        >
          ACTIVITY
        </Link>
        <Link 
          to="/store" 
          className="mobile-menu-item"
          onClick={() => setMobileMenuOpen(false)}
        >
          STORE
        </Link>
        <Link 
          to="/login" 
          className="mobile-menu-item"
          onClick={() => setMobileMenuOpen(false)}
        >
          LOGIN
        </Link>
      </div>
    </>
  )
}

export default Header
