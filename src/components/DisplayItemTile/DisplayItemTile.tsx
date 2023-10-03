import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../Stars/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './DisplayItemTile.css';

interface Props {
    item: any;
}

export default function DisplayItemTile({item}: Props) {

    return (
        <div className='shp_tile' key={item.name}>
            <div className='shp_tile_img_cont'>
                <img className="shp_tile_img" src={item.image} alt={item.name} />
                <div className='shp_tile_interaction'>
                    <button className="shp_tile_interaction_cart">
                        <AddShoppingCartIcon fontSize='large' sx={{fontSize:'4.2rem'}}/>
                    </button>
                    <Link to={'/shop/'+ item.alias}><button className="shp_tile_interaction_details">Details</button></Link>
                </div>
            </div>
            <div className='shp_tile_title'>{item.name}</div>
            <div className='shp_tile_stars'><Stars rating={item.stars} /></div>
            <div className='shp_tile_price'>${item.price}</div>
    </div>
    );
}