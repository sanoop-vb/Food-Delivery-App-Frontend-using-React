
import './App.css';
import './index.css';
import  Navbar  from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPop from './Components/LoginPopup/LoginPop';


function App() {

  const [showlogin,setshowlogin]=useState(false)

  return (
    <>
    {showlogin?<LoginPop setshowlogin={setshowlogin}/>:<></>}
    <div className="app">
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
