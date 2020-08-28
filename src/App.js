import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import AuthDataProvider from './components/main/content/admin/loginContext';

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <div className="container-fluid">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
