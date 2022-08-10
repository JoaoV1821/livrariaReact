import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Livros from './pages/Livros/Livros.jsx';

import Dashboard from './pages/Dashboard/Dashboard.jsx';
import DashboardForm from './pages/Dashboard/DashboardForm.jsx';
import Login from './pages/Login/Login.jsx';


const App = () => {
  return (

    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' element={<Home />}></Route>
        <Route path='/livros' element={<Livros />}></Route>
        <Route path='/livros' element={<Livros />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/edit/:id' element={<DashboardForm />}></Route>
        <Route path='/dashboard/:new' element={<DashboardForm />}></Route>
        <Route path='/log-in' element={<Login />}></Route>
      </Switch>

      {/* <Footer/> */}
    </BrowserRouter>


  )
}

export default App;