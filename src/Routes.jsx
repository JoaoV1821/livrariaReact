import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (

    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' element={<Home />}></Route>
      </Switch>

      <Footer/>
    </BrowserRouter>

   
  )
}

export default App;