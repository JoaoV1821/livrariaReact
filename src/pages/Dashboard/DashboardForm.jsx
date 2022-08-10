import React from 'react'
import style from './Dashboard.module.css'
import Fieldsets from '../../components/Fieldsets/Fieldsets'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addBook, getBookById, removeBook, updateBook } from '../../services/API'

const DashboardForm = () => {
  const { container, aside, sidePanel, navDashboard, formContainer, form } = style
  const navigate = useNavigate()
  const params = useParams()

  const [formData, setFormData] = useState({
    id: '',
    titulo: '',
    autor: '',
    editora: '',
    preco: '',
    categoria: '',
    img: ''
  })

  const fields = [
    { keyState: 'id', label: 'id', type: 'number' },
    { keyState: 'titulo', label: 'Titulo do livro', type: 'text' },
    { keyState: 'autor', label: 'Autor do livro', type: 'text' },
    { keyState: 'editora', label: 'Editora do livro', type: 'text' },
    { keyState: 'preco', label: 'Preco do livro', type: 'text' },
    { keyState: 'categoria', label: 'categoria', type: 'text' },
    { keyState: 'img', label: 'img', type: 'text' }
  ]

  useEffect(() => {
    const setOldBookData = async () => {
      const response = await getBookById(params.id)
      console.log(response[0])
      setFormData(response[0])
    }
    setOldBookData()
  }, [])

  console.log(formData)

  function handleChange(target, key) {
    const value = target.value
    setFormData({ ...formData, [key]: value })
  }

  async function handleDelete() {
    await removeBook(params.id)
    navigate('/dashboard', { replace: true })
  }

  async function handleSave() {
    params.new != 'new' ? await updateBook(params.id, formData) : await addBook(formData)
    navigate('/dashboard', { replace: true })
  }

  return (
    <section className={container}>
      <div className={sidePanel}>
        <aside className={aside}>
          <h1>Dashboard</h1>


          <nav className={navDashboard}>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={() => navigate('/dashboard', { replace: true })}>Voltar</button>
          </nav>
        </aside>


      </div>

      <div className={formContainer}>
        <form className={form}>

          {fields.map((field, index) => {
            return <Fieldsets
              style={{ gridArea: fields.keyState }}
              key={index}
              label={field.label}
              type={field.type}
              keyState={field.keyState}
              value={formData[field.keyState]}
              onChange={handleChange}
            />
          })}
        </form>
      </div>

    </section>
  )
}

export default DashboardForm