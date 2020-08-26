import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
