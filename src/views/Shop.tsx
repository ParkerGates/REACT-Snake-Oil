import React, { useState, useEffect } from 'react';
import itemData from '../data/data';
import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TuneIcon from '@mui/icons-material/Tune';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stars from '../components/Stars/Stars';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import './css/Shop.css';

export default function Shop() {
    const [orgSort, setOrgSort] = useState<string>("featured");
    const [orgLayout, setOrgLayout] = useState<"tile"|"row">("tile");

    const testPlz = () => {
        // console.log("Bo bo BO bO BO");
        console.log(document.getElementById("shp_filter").classList);
        document.getElementById("background_nav").classList.add("side_nav_background_open");
        document.getElementById('shp_filter').classList.add("shp_filter_open");
        console.log(document.getElementById("shp_filter").classList);
    }

    const openFilter = () => {
        document.getElementById('shp_filter').classList.add("shp_filter_open");
    }

    // useEffect(()=> {
    //     window.addEventListener('resize', closeSideNav);
    //     return () => {
    //         window.removeEventListener('resize', closeSideNav);
    //     }
    // }, []);

    return(
        <div className="shp_cont">
            <div id="shp_filter" className="shp_filter">
                <ShopFilter />

            </div>


            <div className='shp_display'>
                <div className='shp_display_org'>
                    <div className="shp_display_org_layout_filter">
                        <button onClick={() => {testPlz()}} className="shp_filter_toggle"><TuneIcon fontSize='large' sx={{color:'#696969', marginRight:'1rem'}}/></button>
                        <button onClick={() => {setOrgLayout("tile")}}><AppsIcon fontSize='large' sx={orgLayout === "tile" ? {color:'#696969'} : {color:'#CACACA'}} /></button>
                        <button onClick={() => {setOrgLayout("row")}}><TableRowsIcon fontSize='large' sx={orgLayout === "tile" ? {color:'#CACACA'} : {color:'#696969'}} /></button>
                    </div>
                    <div className='shp_display_org_sort'>
                        <span>Sort by</span>
                        <select value={orgSort} onChange={(e)=>{setOrgSort(e.target.value)}}>
                            <option value='featured'>Featured</option>
                            <option value='lowToHigh'>Price: Low to High</option>
                            <option value='highToLow'>Price: High to Low</option>
                            <option value='rated'>Highest Rated</option>
                            <option value='alphabet'>Alphabetically</option>
                        </select>
                    </div>
                </div>
                <div className='shp_display_org_hr'></div>

                <div className={orgLayout === 'tile' ? 'shp_display_tile' : 'shp_display_row'}>
                    { itemData.map((item) => {
                        if (orgLayout === "tile") {
                            return (
                                <div className='shp_tile' key={item.name}>
                                    <div className='shp_tile_img_cont'>
                                        <img className="shp_tile_img" src={item.image} alt={item.name} />
                                        <div className='shp_tile_interaction'>
                                            <button className="shp_tile_interaction_cart">
                                                <AddShoppingCartIcon fontSize='large' sx={{fontSize:'4.2rem'}}/>
                                            </button>
                                            <button className="shp_tile_interaction_details">Details</button>
                                        </div>
                                    </div>
                                    <div className='shp_tile_name'>{item.name}</div>
                                    <div className='shp_tile_stars'><Stars rating={item.stars} /></div>
                                    <div className='shp_tile_price'>${item.price}</div>
                                </div>
                            );
                        }
                        if (orgLayout === "row") {
                            return (
                                <div className="shp_row" key={item.name} >
                                    <img className="shp_row_img" src={item.image} alt={item.name} />
                                    <div className="shp_row_details_cont">
                                        <div className="shp_row_header">
                                            <div>{item.name}</div>
                                            <Stars rating={item.stars} />
                                        </div>
                                        <div className="shp_row_description">{item.description}</div>
                                        <div className="shp_row_footer">
                                            <div className='shp_row_footer_price'>${item.price}</div>
                                            <div className="shp_row_footer_btn">
                                                <button>Details</button>
                                                <button style={{position:'relative'}}><span>Add to cart </span><AddShoppingCartIcon fontSize='small' sx={{fontSize:"17px",position:'absolute',right:'8px'}}/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }) }
                </div>
            </div>


            <div className='shp_cart'>


            </div>
        </div>
    );
}