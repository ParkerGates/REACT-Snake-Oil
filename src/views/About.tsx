import React from 'react';
import { useContextData } from '../context/context';
import Grid1 from '../svgs/grid1.svg';
import Grid2 from '../svgs/grid2.svg';
import './css/About.css';

export default function About() {
    const appData = useContextData(); 

    return(
        <div className='about'>
            <div className='ab_grid_cont'>
                <img src={Grid1} className='ab_grid1' alt="grid" />
                <img src={Grid2} className='ab_grid2' alt="grid" />
            </div>
            <div className='ab_faq'>
                <h1 className='ab_faq_title'>Faq</h1>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>What the hell?</h2>
                    <div className='ab_faq_sect_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Why did you do something?</h2>
                    <div className='ab_faq_sect_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>How could you let this happen?</h2>
                    <div className='ab_faq_sect_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Where will we go?</h2>
                    <div className='ab_faq_sect_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Can you please let me know?</h2>
                    <div className='ab_faq_sect_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
            </div>
        </div>
    );
}