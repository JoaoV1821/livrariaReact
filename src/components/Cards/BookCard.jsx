import React from 'react'
import style from './Cards.module.css'

const BookCard = ({ data }) => {
  const { bookContainer, imgContainer, titleStyle, priceStyle, authorStyle } = style
  const { titulo, autor, preco, img } = data

  return (
    <div className={bookContainer}>
      <div className={imgContainer}>
        <img src={img} height='200' width='150'></img>
      </div>

      <h3 className={titleStyle}>{titulo}</h3>
      <span className={priceStyle}>Por {autor}</span>
      <p className={authorStyle}>{preco} R$</p>
    </div>
  )
}

export default BookCard