import React from 'react';
import './App.css';
import Nevigation2 from './common/Nevigation2';
import Nevigation from './common/Nevigation'
import { Route, Routes } from 'react-router-dom';
import Signup from './common/Signup';
import Home from './components/Home component/Home';
import Products from './components/ProductsPage component/Products';
import ProductDetails from './components/productDetails/ProductDetails';

function App() {
  return (
    <>
     <Routes>
       
       <Route path='/'  element ={<Nevigation2/>}/>
    
       <Route path='/sign-In'  element ={<Nevigation/>}/>
       <Route  path='/sign-Up'  element ={<Signup/>}/>
       <Route path='/Home' element ={<Home/>} />
       <Route path='/Products' element= {<Products/>}/> 
       <Route  path='/productDetails'  element={<ProductDetails/>}/>
     </Routes>

      
    </>
  );
}

export default App;
