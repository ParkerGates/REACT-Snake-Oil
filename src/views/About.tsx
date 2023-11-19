import { useEffect } from 'react';
import axios from 'axios';
import Grid1 from '../svgs/grid1.svg';
import Grid2 from '../svgs/grid2.svg';
import './css/About.css';

export default function About() {

    return(
        <div className='about'>
            <div className='ab_grid_cont'>
                <img src={Grid1} className='ab_grid1' alt="grid" />
                <img src={Grid2} className='ab_grid2' alt="grid" />
            </div>
            <div className='ab_faq'>
                <h1 className='ab_faq_title'>Faq</h1>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>What is Asp?</h2>
                    <div className='ab_faq_sect_text'>
                        Asp is a friendly collection of healthcare enthusiasts specializing in procuring, crafting and distributing remedies, herbal treatment and miracle cures. Our mission is to cure the world of its ills, all for a semi reasonable price!
                    </div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Are Asp Products Safe?</h2>
                    <div className='ab_faq_sect_text'>
                        Our products are made with tender love and care, and were never meant to harm any of our consumers. Our closed door tests unequivocally prove all products are safe. If any harm is felt following use, remember, correlation is not causation!
                    </div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Are Asp Products Claims Legit?</h2>
                    <div className='ab_faq_sect_text'>
                        Since day one, our company motto has always been, “Honesty.” If we can’t hold faith in our fellow man, then who can we trust? Asp, that’s who! All claims are legitimate. If a Asp product doesn’t work as intended, simply buy more and try again!
                    </div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>Is Asp FDA Approved?</h2>
                    <div className='ab_faq_sect_text'>
                        All Asp products are FDA compliant and fit within strict guidelines set by ourselves. In many ways Asp and the FDA are like a pair of ex lovers, still longing for each other long after parting ways. As they say, if you love something let it go.
                    </div>
                </div>

                <div className='ab_faq_sect'>
                    <h2 className='ab_faq_sect_title'>What's Our Contact Info?</h2>
                    <div className='ab_faq_sect_text'>
                        Asp proudly boasts a no contact model of business, thus easing up the customers time to devote to other things. Even so, if you still wish to interact with us in some way, freit not. You can always do so by simply buying more products! 
                    </div>
                </div>
            </div>
        </div>
    );
}