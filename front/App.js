import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/index';
import Compte from './pages/Compte/index';
import NotFound from './pages/NotFound/index';
import Panier from './pages/Panier/index';
import Produits from './pages/Produits/index';
import Contact from './pages/Contact/index';

import Nozama from './components/img/Nozama.PNG'

import './App.css';

const App = () => {


  return (
    
    <div className="App">

      <BrowserRouter>
    
        <nav className="navbar"> 
          <Link to="/Panier" className="Panier"><i class="fa fa-shopping-cart"></i></Link>
          <Link to="/"><img src={Nozama} alt="" className="Nozama"></img> </Link>
          <Link to="/Compte" className="compte">Nifholo<i class="glyphicon glyphicon-user usericon" ></i></Link>
          

        </nav>
        <img src='Piscine.jpg' alt=''></img>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Compte" element={<Compte/>} />
          <Route path="/Compte/:id" element={<Compte/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Panier/:id" element={<Panier/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Contact/:id" element={<Contact/>} />
          <Route path="/Produits" element={<Produits/>} />
          <Route path="/Produits/:id" element={<Produits/>} />  
          
          <Route path="*" element={<NotFound />} />
        </Routes>     

        <footer>
        <Link to="/Produits">Produit.id</Link><br></br>
          <Link to="/Contact">Contact</Link>
        </footer>
      </BrowserRouter> 
    </div>
  );
}

export default App;
