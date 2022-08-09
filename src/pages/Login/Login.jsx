import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import style from'./login.module.css'

const Login = () => {
  return (
    <main className={style.main}>
        <form action="" className={style.container}>
            <h1>Login</h1>
            
                <label>Email</label>
                <input type="email" />
          
            
                <label>Senha</label>
                <input type="password" />
            
            <Link to={'/dashboard'}><Button text='Entrar'/></Link>
        </form>
       
    </main>
  )
}

export default Login