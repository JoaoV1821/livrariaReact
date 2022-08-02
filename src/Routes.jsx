import React from 'react'
import { BrowserRouter, Route as Swicth, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
   
    <BrowserRouter>
      <Header/>
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App;