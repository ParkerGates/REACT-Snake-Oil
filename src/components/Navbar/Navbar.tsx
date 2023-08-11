import react from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function NavBar() {

    return(
        <div className='nav_cont'>
            <div className='nav_left_sec'>
                <span>Asp</span>
            </div>
            <div className='nav_mid_sec'>
                <div>
                    <NavLink to="/" className='nav_item'>Home</NavLink>
                    <NavLink to="/about" className='nav_item'>About</NavLink>
                    <NavLink to="/shop" className='nav_item'>Shop</NavLink>
                </div>
            </div>
            <div className='nav_right_sec'>
                <span>Cart</span>
            </div>
        </div>
    );
}

export default NavBar;