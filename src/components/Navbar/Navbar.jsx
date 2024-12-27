import React,{useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.webp';
import cart from '../assets/images/istockphoto-1206806317-612x612.jpg';
import { ShopContext } from '../../Context/ShopContext';



const Navbar =() => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img className='logoImage' src={logo} alt="logo" />
          <p>GROCER</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none',color:'#626262'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("grocery")}}><Link style={{textDecoration: 'none', color:'#626262'}} to='/grocery'>Grocery</Link>{menu==="grocery"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("milk")}}><Link style={{textDecoration: 'none',color:'#626262'}} to='/milk'>Milk Products</Link>{menu==="milk"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("fresh")}}><Link style={{textDecoration: 'none',color:'#626262'}} to='/fresh'>Fresh Foods</Link>{menu==="fresh"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("drinks")}}><Link style={{textDecoration: 'none',color:'#626262'}} to='/drinks'>Beverages</Link>{menu==="drinks"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><img className='cartImage' src={cart} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        
    </div>
  )
};

export default Navbar;
