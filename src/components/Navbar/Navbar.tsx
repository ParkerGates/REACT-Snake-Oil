import react from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined }  from '@mui/icons-material';
import './Navbar.css';
import AspLogo from '../../svgs/AspLogo.svg';

function NavBar() {

    return(
        <div className='nav_cont'>
            <div className='nav_left_sec'>
                <img src={AspLogo} alt='asp logo' className='nav_asp_logo' />
            </div>
            <div className='nav_mid_sec'>
                <div>
                    <NavLink to="/" className='nav_item'>Home</NavLink>
                    <NavLink to="/about" className='nav_item'>About</NavLink>
                    <NavLink to="/shop" className='nav_item'>Shop</NavLink>
                </div>
            </div>
            <div className='nav_right_sec'>
                <ShoppingCartOutlined fontSize='large' sx={{color:'hsla(0, 0%, 0%, 0.7);', height:'1.8rem'}} />
            </div>
        </div>
    );
}

export default NavBar;