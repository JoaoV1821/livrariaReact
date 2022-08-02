import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>
            Livraria
        </h1>

        <nav>
            <Link to="/livros">Livros</Link>
            <Link to="/clientes">Clientes</Link>
        </nav>
    </header>
  )
}

export default Header