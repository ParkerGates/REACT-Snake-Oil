import React, { useState, useEffect } from 'react';
import { StoreItem } from '../../interface/interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { useContextData } from '../../context/context';
import Stars from '../Stars/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './DisplayItemTile.css';

interface Props {
    item: any;
}

export default function DisplayItemTile({item}: Props) {
    const navigate = useNavigate();
    const { appData, dispatch } = useContextData(); 
    const [lastAdded, setLastAdded] = useState<StoreItem|undefined>(undefined);

    const addToCart = (storeItem: StoreItem) => {
        dispatch({type:'addToCart',storeItem:storeItem});
        setLastAdded(storeItem);

    }

    useEffect(() => {
        if (lastAdded !== undefined) {
            const addCartTimout = setTimeout(() => {
                setLastAdded(undefined);
            }, 1500);
        }
    },[lastAdded]);


    return (
        <div className='shp_tile' key={item.name}>
            <div className='shp_tile_img_cont'>
                <img className="shp_tile_img" src={item.image} alt={item.name} />
                <div className='shp_tile_interaction' onClick={(e)=>{e.target === e.currentTarget && navigate('/shop/'+item.alias)}}>
                    {   lastAdded?.alias !== item.alias ?
                        <button className="shp_tile_interaction_cart" onClick={()=>{addToCart(item)}}>
                                <AddShoppingCartIcon fontSize='large' sx={{fontSize:'4.2rem'}}/>
                        </button>
                        :
                        <div className='shp_tile_added_title'>Added</div>
                    }
                    <Link to={'/shop/'+ item.alias}><button className="shp_tile_interaction_details">Details</button></Link>
                </div>
            </div>
            <div onClick={()=>{navigate('/shop/'+item.alias)}}>
                <div className='shp_tile_title'>{item.name}</div>
                <div className='shp_tile_stars'><Stars rating={item.stars} /></div>
                <div className='shp_tile_price'>${item.price}</div>
            </div>
    </div>
    );
}