import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Livros from './pages/Livros/Livros.jsx';

const App = () => {
  return (

    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' element={<Home />}></Route>
        <Route path='/livros' element={<Livros/>}></Route>
      </Switch>

      <Footer/>
    </BrowserRouter>

   
  )
}

export default App;