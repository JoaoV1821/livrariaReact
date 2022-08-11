import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import style from './header.module.css'

const Header = () => {
  const { header, navbar } = style

  return (
    <header className={header}>
      <Logo />

      <nav className={navbar}>
        <Link to="/">Home</Link>
        <Link to="/livros">Livros</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Link to='login'>
        <Button primary text='Log in' />
      </Link>
    </header>
  )
}

export default Header
