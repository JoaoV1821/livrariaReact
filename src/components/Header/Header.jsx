import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import style from './Header.module.css'

const Header = () => {
  const { header, navbar } = style

  return (
    <header className={header}>
      <h1>
        bookstore
      </h1>

      <nav className={navbar}>
        <Link to="/">Home</Link>
        <Link to="/livros">Livros</Link>
        <Link to="/trending">Tendências</Link>
      </nav>

      <Link to='log-in'>
        <Button primary text='Log in' />
      </Link>
    </header>
  )
}

export default Header