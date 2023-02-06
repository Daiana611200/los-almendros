import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => { 
  return (
    <nav>
        <hi><b>Los Almendros • Frutos secos</b></hi>
        <div>
            <ul>
                <li><a href="#">Frutos secos</a></li>
                <li><a href="#">Cereales</a></li>
                <li><a href="#">Condimentos</a></li>
            </ul>
        </div>
        
        <div>
            <CartWidget />
        </div>
    </nav>
  );
};

export default NavBar