import React, { useState, useEffect } from 'react';
import itemData from '../data/data';
import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TuneIcon from '@mui/icons-material/Tune';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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

                <div className='shp_display_items'>
                    { itemData.map((item) => {
                        return (
                            <div className='shp_display_item' key={item.name}>
                                <div className='shp_display_item_img_cont'>
                                    <img className="shp_display_item_img" src={item.image} alt={item.name} />
                                    <div className='shp_display_item_interaction'>
                                        <button className="shp_display_item_interaction_cart">
                                            <AddShoppingCartIcon fontSize='large' sx={{fontSize:'4.2rem'}}/>
                                        </button>
                                        <button className="shp_display_item_interaction_details">Details</button>
                                    </div>
                                </div>
                                <div className='shp_display_item_name'>{item.name}</div>
                                <div className='shp_display_item_stars'>{item.stars}</div>
                                <div className='shp_display_item_price'>${item.price}</div>
                            </div>
                        );
                    }) }
                </div>
            </div>


            <div className='shp_cart'>


            </div>
        </div>
    );
}