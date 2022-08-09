import React from 'react'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import landingAnimation from '../../assets/landing-animation.svg'
import style from './home.module.css'

const Home = () => {
  const { container, callToAction, imageContainer, image } = style

  return (
    <section className={container}>
      <div className={callToAction}>
        <h1>Compre seu livro com o pior preço da internet</h1>
        <p>Duis consequat do consectetur ea ut quis ea. Magna qui elit magna sunt ad. Lorem laboris minim ex in dolore.</p>

        <Link to='/livros'>
          <Button text='Explorar livros' />
        </Link>

        {/* <Logo /> */}
      </div>

      <div className={imageContainer}>
        <img src={landingAnimation} className={image}></img>
      </div>

    </section>
  )
}

export default Home
