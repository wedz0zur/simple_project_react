import React from "react";
import Header from "./components/header/header";
import Page from './pages/page'
import { Route, Routes } from "react-router-dom";

const img404 = 'https://i.pinimg.com/originals/94/1c/4e/941c4e873a54eee50a7a208950804a49.jpg'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Page img='images/1.jpg' title='Модель 01'/>}/>
        <Route path='/shop' element={<Page img='images/2.jpg' title='Модель 02'/>}/>
        <Route path='/products' element={<Page img='images/3.jpg' title='Модель 03'/>}/>
        <Route path='*' element={<Page img={img404} title='We lost. 404'/>}/>
      </Routes>
    </div>
  );
}

export default App;
