import React, { useState, useEffect } from 'react'
import BookCard from '../../components/Cards/BookCard'
import style from './livros.module.css'
import { getBooks } from '../../services/API'

const Livros = () => {
  const { container, categorias, livros, aside, navCategorias, livrosGrid } = style
  const [response, setResponse] = useState([])
  const [books, setBooks] = useState([])

  const requestBooks = async () => {
    const response = await getBooks()
    console.log(response)
    setResponse(response)
    setBooks(response)
  }

  useEffect(() => {
    requestBooks()
  }, [])

  console.log(books)

  const handleClick = (target) => {
    const categoria = target.innerHTML

    setBooks([...response].filter(el => el.categoria == categoria))
  }


  return (
    <section className={container}>

      <div className={categorias}>
        <aside className={aside}>
          <h1>Categorias</h1>

          <nav className={navCategorias}>
            {[...new Set(response.map(el => el.categoria))].map(el => <button onClick={({ target }) => handleClick(target)}>{el}</button>)}

            <button onClick={requestBooks}>Limpar filtro</button>
          </nav>
          <br />

        </aside>

      </div>

      <div className={livros}>
        <div className={livrosGrid}>
          {books.map(el => <BookCard data={el} />)}


        </div>
      </div>
    </section>
  )
}

export default Livros

