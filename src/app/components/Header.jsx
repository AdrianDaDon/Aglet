import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="site-logo">
                <a href="./">
                    <img className="site-logo-img" src="/Logo/aglet_logo.svg" alt="Aglet Logo" />
                </a>
            </div>

            <nav className="main-nav">
                <a href="./">home</a>
                <a href="../Contact">contact</a>
            </nav>
        </div>
    </header>
  )
}
