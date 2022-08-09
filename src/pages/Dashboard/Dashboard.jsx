import React from 'react'
import style from './Dashboard.module.css'
import { useState, useEffect } from 'react'
import { getBooks } from '../../services/API'
import BookCardAdmin from '../../components/Cards/BookCardAdmin'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const { container, aside, sidePanel, navDashboard, formContainer, formBookContainer } = style
  const [response, setResponse] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()


  const requestBooks = async () => {
    const response = await getBooks()
    console.log(response)
    setResponse(response)
    setBooks(response)
  }

  useEffect(() => {
    requestBooks()
  }, [])

  return (
    <section className={container}>
      <div className={sidePanel}>
        <aside className={aside}>
          <h1>Dashboard</h1>


          <nav className={navDashboard}>
            <button onClick={() => {
              navigate('/dashboard/new', { replace: true })
            }}>Inserir livro</button>
            <button onClick={() => {
              navigate('/dashboard', { replace: true })
            }}>Livros cadastrados</button>
          </nav>
        </aside>


      </div>

      <div className={formBookContainer}>
        {books.map(el => <BookCardAdmin data={el} />)}
      </div>

    </section>
  )
}

export default Dashboard