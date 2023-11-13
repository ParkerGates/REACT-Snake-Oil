import { Link } from 'react-router-dom';
import DarkDisplaySection from '../components/DarkDisplaySection/DarkDisplaySection';
import FlexToCarousel from '../components/FlexToCarousel/FlexToCarousel';
import DisplayItemCard from '../components/DisplayItemCard/DisplayItemCard';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import Grid1 from '../svgs/grid1.svg';
import Grid2 from '../svgs/grid2.svg';
import AspLogo from '../svgs/AspLogoLarge.svg';
import GreenSnake from '../images/designImages/greenSnake.png';
import Man1 from '../images/testimonials/man1.jpg';
import Man2 from '../images/testimonials/man2.jpg';
import Man3 from '../images/testimonials/man3.jpg';
import HomeEllipseLeft from '../svgs/HomeEllipseLeft.svg';
import HomeEllipseRight from '../svgs/HomeEllipseRight.svg';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ColorsDiv from '../components/ColorsDiv/ColorsDiv';
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
                <FlexToCarousel
                    item1={<DisplayItemCard imageName='dropBasket' itemName='Third Eye Drops' price='79.99'/>}
                    item2={<DisplayItemCard imageName='creamGreen' itemName='Quick Heal Rub' price='54.99'/>}
                    item3={<DisplayItemCard imageName='dropPlate' itemName='Covid Cure' price='64.99'/>}
                />
            </DarkDisplaySection>


            <div id="testimonial_section" className='hm_testimonials'>
                <h2>Testimonials</h2>
                <div className="hm_testimonial_sub_heading">
                    <div className='testimonial_sect_colors'>
                        <ColorsDiv direction='row' height='3px' />
                    </div>
                    <div className='testimonial_sect_tag'>hear from our happy customers</div>
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
                <FlexToCarousel
                    item1={<DisplayItemCard imageName='dropPlant' itemName='Hear Again' price='99.99' sale='79.99' />}
                    item2={<DisplayItemCard imageName='oilPurple' itemName='Resonate ii' price='75.99' sale='56.99' />}
                    item3={<DisplayItemCard imageName='powderBrown' itemName='Brown Powder' price='49.99' sale='44.99' />}
                />
            </DarkDisplaySection>

            <Footer />
        </div>
    );
}