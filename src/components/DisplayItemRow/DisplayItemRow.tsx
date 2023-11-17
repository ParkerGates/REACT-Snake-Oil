import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StoreItem } from '../../interface/interfaces';
import { useContextData } from '../../context/context';
import itemImg from '../../images/itemImageIndex';
import Stars from '../Stars/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './DisplayItemRow.css';

interface Props {
    item: StoreItem;
}

export default function DisplayItemRow({item}: Props) {
    const {appData, dispatch} = useContextData();
    const [lastAdded, setLastAdded] = useState<StoreItem|undefined>(undefined);

    const addToCart = (storeItem: StoreItem) => {
        dispatch({type:'addToCart',storeItem:item})
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
        <div className="shp_row" key={item.name} >
            { item.sale !== false && <div className='shp_row_sale_tag'>-{Math.round((1 - item.sale) * 100)}%</div>}
            <img className="shp_row_img" src={itemImg[item.image]} alt={item.name} />
            <div className="shp_row_details_cont">
                <div className="shp_row_header">
                    <div className="shp_row_title">{item.name}</div>
                    <Stars rating={item.stars} />
                </div>
                <div className="shp_row_description">{item.description}</div>
                <div className="shp_row_footer">
                    <div>
                        { item.sale !== false ?
                            <>
                                <span className='shp_row_sale_old_price'>${item.price}</span>
                                <span className='shp_row_price shp_row_sale_price_color'>${ Math.round(item.price * item.sale * 100) / 100}</span>
                            </> 
                            :
                            <span className='shp_row_price'>${item.price}</span>
                        }
                    </div>
                    <div className="shp_row_btns">
                        <Link to={'/shop/'+ item.alias}><button>Details</button></Link>
                        {   lastAdded?.alias !== item.alias ?
                            <button style={{position:'relative'}} onClick={()=>{addToCart(item)}}>
                                <span>Add to cart </span>
                                <AddShoppingCartIcon fontSize='small' sx={{fontSize:"17px",position:'absolute',right:'8px'}}/>
                            </button>
                            :
                            <button className='shp_row_added_title'>Added</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}