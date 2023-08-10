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
                    <span>Home</span>
                    <span>About</span>
                    <span>Shop</span>
                </div>
            </div>
            <div className='nav_right_sec'>
                <span>Cart</span>
            </div>
        </div>
    );
}

export default NavBar;