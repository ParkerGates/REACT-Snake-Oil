import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import './css/Shop.css';

export default function Shop() {
    const [orgSort, setOrgSort] = useState<string>("featured");
    const [orgLayout, setOrgLayout] = useState<"tile"|"row">("tile");

    return(
        <div>
            <div className="shp_filter">


            </div>


            <div className='shp_display'>

                <div className='shp_display_org'>
                    <div>
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




                </div>






            </div>
            <div className='shp_cart'>


            </div>
        </div>
    );
}