import React from 'react'
import './Header.css'


const Header = () => {
    const handleScroll = () => {
        document.getElementById('food-display').scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your fovourite food here </h2>
        <p>Order your favorite food easily with our app—browse, select, and enjoy delicious meals delivered right to your door.</p>
        <button onClick={handleScroll}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
