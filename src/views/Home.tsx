import React from 'react';
import { Link } from 'react-router-dom';
import DarkDisplaySection from '../components/DarkDisplaySection/DarkDisplaySection';
import DisplayItemCard from '../components/DisplayItemCard/DisplayItemCard';
import Testimonials from '../components/Testimonials/Testimonials';
import Grid1 from '../svgs/grid1.svg';
import Grid2 from '../svgs/grid2.svg';
import AspLogo from '../svgs/AspLogoLarge.svg';
import GreenSnake from '../images/designImages/greenSnake.png';
import itemImg from '../images/itemImageIndex';
import Man1 from '../images/testimonials/man1.jpg';
import Man2 from '../images/testimonials/man2.jpg';
import Man3 from '../images/testimonials/man3.jpg';
import HomeEllipseLeft from '../svgs/HomeEllipseLeft.svg';
import HomeEllipseRight from '../svgs/HomeEllipseRight.svg';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <Link to='/shop'><button>Shop Now</button></Link>

                <div className="hm_call2action_divider1"></div>
                <div className="hm_call2action_divider2"></div>
                <img className="hm_ellipse_1" src={HomeEllipseLeft} alt="ellipse" />
                <img className="hm_ellipse_2" src={HomeEllipseRight} alt="ellipse" />
            </div>


            <div className='hm_options'>
                <div className="hm_options_btn_cont">
                    <span className='hm_options_icon_cont'>
                        <HandshakeOutlinedIcon
                            fontSize='large'
                            sx={{color:'#202020',fontSize:'1.7rem',marginBottom:"1px",width:'100%',textAlign:'center'}}
                        />
                    </span>
                    <Link className='hm_options_btn' to="/about">About</Link>
                </div>
                <div className='hm_options_btn_cont'>
                    <span className='hm_options_icon_cont'>
                        <InfoOutlinedIcon
                            fontSize='large'
                            sx={{color:'#202020',fontSize:'1.7rem',marginBottom:"1px",width:'100%',textAlign:'center'}}
                        />
                    </span>
                    <a className='hm_options_btn' href="#testimonial_section">Testimonials</a>
                </div>
                <div>
                    <div className='hm_options_btn_cont'>
                        <span className='hm_options_icon_cont'>
                            <AttachMoneyOutlinedIcon
                                fontSize='large'
                                sx={{color:'#202020',fontSize:'1.7rem',marginBottom:"1px",width:'100%',textAlign:'center'}}
                            />
                        </span>
                        <a className='hm_options_btn' href="#sales_section">Sales</a>
                    </div>
                    <img className='hm_options_color' src={Colors} alt='colors' />
                </div>
            </div>


            <DarkDisplaySection id='popular_section' name='popular items'>
                <div className='hm_item_display'>
                    <Link to='/shop/dropBasket' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['dropBasket']} itemName='Third Eye Drops' price='79.99'/>
                    </Link>
                    <Link to='/shop/creamGreen' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['creamGreen']} itemName='Quick Heal Rub' price='54.99'/>
                    </Link>
                    <Link to='/shop/dropPlate' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['dropPlate']} itemName='Covid Cure' price='64.99'/>
                    </Link>
                </div>
            </DarkDisplaySection>


            <div id="testimonial_section" className='hm_testimonials'>
                <h2>Testimonials</h2>
                <div className="hm_testimonial_sub_heading">
                    <img src={Colors} alt="colors" />
                    <div>hear from our happy customers</div>
                </div>

                <Testimonials image={Man1} name="Joe King" location="Chicago Illinois">
                    Asp oils have allowed me to live a better, healthier, pain free life. I can't imagine living without these miracle products
                </Testimonials>

                <Testimonials image={Man2} name="Amy Stake" location="Toronto Ontario">
                    I was born blind. Through consistent use of Asps FDA compliant products, my vison was completely restored. A modern miracle
                </Testimonials>

                <Testimonials image={Man3} name="Noah Pinion" location="Sacramento California">
                    Asp products cured my cancer instantly. I had a cut on my arm that closed in 5 seconds. Truly you should give them money
                </Testimonials>
            </div>


            <DarkDisplaySection id='sales_section' name='SALES'>
                <div className='hm_item_display'>
                    <Link to='/sho/dropBasket' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['dropBasket']} itemName='Third Eye Drops' price='99.99' sale='79.99' />
                    </Link>
                    <Link to='/shop/creamGreen' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['creamGreen']} itemName='Quick Heal Rub' price='74.99' sale='54.99' />
                    </Link>
                    <Link to='/shop/dropPlate' className='text_dec_none'>
                        <DisplayItemCard imageName={itemImg['dropPlate']} itemName='Covid Cure' price='84.99' sale='64.99' />
                    </Link>
                </div>
            </DarkDisplaySection>


            <footer className='hm_footer'>
                <div className='hm_footer_outlinks'>
                    <a href="https://github.com/ParkerGates/REACT-Snake-Oil"><GitHubIcon fontSize='large' sx={{color:'white'}}/></a>
                    <a href="https://www.linkedin.com/in/parker-gates-943242167/"><LinkedInIcon fontSize='large' sx={{color:'white'}}/></a>
                    <a href="https://www.reddit.com/r/snakes/"><RedditIcon fontSize='large' sx={{color:'white'}}/></a>
                </div>
                <div className='hm_footer_links'>
                    <Link to='/' className='hm_footer_link'>Home</Link>
                    <Link to='/about' className='hm_footer_link'>About</Link>
                    <Link to='/shop' className='hm_footer_link'>Shop</Link>
                    <Link to='/snake' className='hm_footer_link'>Snake</Link>
                </div>
                <div className='hm_footer_resume_project'>
                    <span>2023 Parker Gates | Resume Project</span>
                </div>
                <div className='hm_colors_footer'>
                    <img src={Colors} alt='colors' />
                </div>

            </footer>
        </div>
    );
}