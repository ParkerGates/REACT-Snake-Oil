import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../svgs/colors.svg';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

export default function Footer() {

    return(
        <footer className='footer'>
            <div className='footer_outlinks'>
                <a href="https://github.com/ParkerGates/REACT-Snake-Oil"><GitHubIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://www.linkedin.com/in/parker-gates-943242167/"><LinkedInIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://www.reddit.com/r/snakes/"><RedditIcon fontSize='large' sx={{color:'white'}}/></a>
            </div>
            <div className='footer_links'>
                <Link to='/' className='footer_link'>Home</Link>
                <Link to='/about' className='footer_link'>About</Link>
                <Link to='/shop' className='footer_link'>Shop</Link>
                <Link to='/shop' className='footer_link'>Snake</Link>
            </div>
            <div className='footer_resume_project'>
                <span>2023 Parker Gates | Resume Project</span>
            </div>
            <div className='colors_footer'>
                <img src={Colors} alt='colors' />
            </div>
        </footer>
    );
}