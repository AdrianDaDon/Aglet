import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="site-logo">
                <Link to="/">
                    <img className="site-logo-img" src="/Logo/aglet_logo.svg" alt="Aglet Logo" />
                </Link>
            </div>

            <nav className="main-nav">
                <Link to="/">home</Link>
                <Link to="/contact">contact</Link>
            </nav>
        </div>
    </header>
  )
}
