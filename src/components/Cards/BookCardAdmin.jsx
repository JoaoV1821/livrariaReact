import React from 'react'
import { Link } from 'react-router-dom'
import style from './cards.module.css'

const BookCard = ({ data }) => {
  const { bookContainer, imgContainer, titleStyle, priceStyle, authorStyle } = style
  const { id, titulo, autor, preco, img } = data

  return (
    <div className={bookContainer}>
      <div className={imgContainer}>
        <img src={img} height='200' width='150'></img>
      </div>

      <h3 className={titleStyle}>{titulo}</h3>
      <span className={priceStyle}>Por {autor}</span>
      <p className={authorStyle}>{preco} R$</p>

      <Link to={`/dashboard/edit/${id}`}>
        <button>🪶</button>
      </Link>
    </div>
  )
}

export default BookCard