import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid1 from '../svgs/grid1.svg';
import Grid2 from '../svgs/grid2.svg';
import AspLogo from '../svgs/AspLogoLarge.svg';
import GreenSnake from '../images/greenSnake.png';
import HomeEllipseLeft from '../svgs/HomeEllipseLeft.svg';
import HomeEllipseRight from '../svgs/HomeEllipseRight.svg';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Colors from '../svgs/colors.svg';
import './css/Home.css';

export default function Home() {

    return(
        <div>
            <div className='hm_heading'>
                <img src={AspLogo} className='hm_heading_logo' alt="asp logo" />
                <img src={Grid1} className='hm_heading_grid1' alt="grid" />
                <img src={Grid2} className='hm_heading_grid2' alt="grid" />
                <img src={GreenSnake} className="hm_heading_snake" alt="green snake" />
            </div>
            <div className="hm_scroll">
                <hr />
                <div>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span>
                </div>
                <div>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span><span>SNAKE OIL</span><span>MIRACLE CURES</span>
                    <span>SNAKE OIL</span><span>MIRACLE CURES</span>
                </div>
                <hr />
            </div>

            <div className='hm_call2action'>
                <h1>Honest To God Miracle Cures</h1>
                <h2>100% guaranteed to cure all ailments and illnesses</h2>
                <h2>Being sick is a choice, choose Asp instead</h2>
                <NavLink to='/shop'><button>Shop Now</button></NavLink>

                <div className="hm_call2action_divider1"></div>
                <div className="hm_call2action_divider2"></div>
                <img className="hm_ellipse_1" src={HomeEllipseLeft} alt="ellipse" />
                <img className="hm_ellipse_2" src={HomeEllipseRight} alt="ellipse" />
            </div>

            <div className='hm_options'>
                <div>
                    <span className='hm_options_icon_cont'><HandshakeOutlinedIcon fontSize='large' sx={{color:'#202020', height:'2.2rem'}}/></span>
                    <NavLink className='hm_options_btn' to="/about">About</NavLink>
                </div>
                <div>
                    <span className='hm_options_icon_cont'><InfoOutlinedIcon fontSize='large' sx={{color:'#202020', height:'2.2rem', marginBottom:"2px"}}/></span>
                    <a className='hm_options_btn' href="">Testimonials</a>
                </div>
                <div>
                    <span className='hm_options_icon_cont'><AttachMoneyOutlinedIcon fontSize='large' sx={{color:'#202020', height:'2.2rem', margin:"0px 0px 2px 2px"}}/></span>
                    <a className='hm_options_btn' href="">Sales</a>
                    <img className='hm_options_color' src={Colors} alt='colors' />
                </div>
            </div>

            <div className="hm_popular">

            </div>
            <div className='hm_testimonials'>

            </div>
            <div className="hm_sales">

            </div>
            <footer className='hm_footer'>

            </footer>
        </div>
    );
}