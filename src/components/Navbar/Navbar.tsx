import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { ShoppingCartOutlined, Menu }  from '@mui/icons-material';
import AspLogo from '../../svgs/AspLogo.svg';
import TransactionHead from '../TransactionHead/TranscactionHead';
import './Navbar.css';

function NavBar() {
    const location = useLocation();
    const params = useParams();
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const toggleSideNav = (id: string) => {
        if (location.pathname === '/shop' && window.innerWidth > 1100) { return }
        const nav: HTMLElement = document.getElementById(id);
        const background: HTMLElement = document.getElementById("background_nav");

        if (nav.classList.length === 1) {
            nav.classList.add("side_" + id + "_open");
            background.classList.add("side_nav_background_open");
            return;
        }
        nav.classList.remove("side_" + id + "_open");
        background.classList.remove("side_nav_background_open");
    }

    const closeSideNav = () => {
        setScreenWidth(window.innerWidth);
        if (document.getElementById("background_nav").classList.length > 1) {
            document.getElementById("nav_left").classList.remove("side_nav_left_open");
            document.getElementById("nav_right").classList.remove("side_nav_right_open");
            document.getElementById("background_nav").classList.remove("side_nav_background_open");
            if (document.getElementById("shp_filter") !== null) {
                document.getElementById("shp_filter").classList.remove("shp_filter_open");
            }
            return;
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', closeSideNav);
        return () => {
            window.removeEventListener('resize', closeSideNav);
        }
    }, []);


    return(
        <div className='nav_cont'>

            <div className={'nav_left_sec ' + (location.pathname === '/shop' && (screenWidth||window.innerWidth) >= 1500 && 'nav_left_sec_shp_lg')}>
                <img src={AspLogo} alt='asp logo' className='nav_asp_logo' />
                <button onClick={() => {toggleSideNav('nav_left')}} className='empty_btn nav_menu'>
                    <Menu fontSize='large' sx={{color:'hsla(0, 0%, 0%, 0.7);', height:'1.8rem'}}/>
                </button>
            </div>
            <div className='nav_mid_sec'>
                <div onClick={closeSideNav}>
                    <NavLink to="/" className='nav_item'>Home</NavLink>
                    <NavLink to="/about" className='nav_item'>About</NavLink>
                    <NavLink to="/shop" className='nav_item'>Shop</NavLink>
                </div>
            </div>
            <div className={'nav_right_sec ' + (location.pathname === '/shop' && (screenWidth||window.innerWidth) >= 1100 && 'nav_right_sec_shp_lg')}>
                <button 
                    onClick={() => {toggleSideNav('nav_right')}}
                    className='empty_btn nav_cart'>
                    <ShoppingCartOutlined className='nav_cart' fontSize='large' sx={{color:'hsla(0, 0%, 0%, 0.7);', height:'1.8rem'}} />
                </button>
            </div>


            <div className='side_nav_cont'>
                <div id='background_nav' onClick={closeSideNav} className='side_nav_background'></div>

                <div id='nav_left' className='side_nav_left'>
                    <div className='nav_item_mobile'>
                        <button onClick={() => {toggleSideNav('nav_left')}} className='empty_btn nav_menu'>
                            <Menu fontSize='large' sx={{color:'hsla(0, 0%, 0%, 0.7);', height:'1.8rem'}}/>
                        </button>
                    </div>
                    <NavLink to="/" onClick={closeSideNav} className='nav_item_mobile'>Home</NavLink>
                    <NavLink to="/about" onClick={closeSideNav} className='nav_item_mobile'>About</NavLink>
                    <NavLink to="/shop" onClick={closeSideNav} className='nav_item_mobile'>Shop</NavLink>
                </div>

                <div id='nav_right' className="side_nav_right">
                    <div className='nav_item_mobile align_right '>
                        <button onClick={() => {toggleSideNav('nav_right')}} className='empty_btn nav_menu nav_cart_side_nav'>
                            <ShoppingCartOutlined className='nav_cart' fontSize='large' sx={{color:'hsla(0, 0%, 0%, 0.7);', height:'1.8rem'}} />
                        </button>
                    </div>
                    <TransactionHead />
                </div>
            </div>

        </div>
    );
}

export default NavBar;