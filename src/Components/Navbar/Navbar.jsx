import React, { useContext, useState ,} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link , useNavigate} from 'react-router-dom';
import  {StoreContext} from '../../CONTEXT/StoreContext';

const Navbar = ({setshowlogin}) => {

    const [menu,setMenu] = useState('home');

    const {getTotalcartAmount}=useContext(StoreContext);

    const navigate = useNavigate(); // To navigate programmatically

     // Function to navigate and scroll
     const navigateToSection = (sectionId) => {
        navigate('/'); // Navigate to the Home page first
        setMenu(sectionId);
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // A slight delay to ensure the page has loaded
    };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <span  onClick={()=>navigateToSection("explore-menu")} className={menu==="explore-menu"?"active":""} >menu</span>
        <span  onClick={()=>navigateToSection("app-download")} className={menu==="app-download"?"active":""}>mobile-app</span>
        <span  onClick={()=>navigateToSection("footer")} className={menu==="footer"?"active":""}>contact us</span>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalcartAmount()===0?'':'dot'}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
