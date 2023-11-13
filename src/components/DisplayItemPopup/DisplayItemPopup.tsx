import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContextData } from '../../context/context';
import { StoreItem } from '../../interface/interfaces';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stars from '../Stars/Stars';
import './DisplayItemPopup.css';

interface Props {
    item: StoreItem | undefined;
}


export default function DisplayItemPopup({item}: Props) {
    const { appData, dispatch } = useContextData(); 
    const navigate = useNavigate();
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

    if (item === undefined) { return <></> }

    return (
        <div className="shp_popup_cont" onClick={(e)=>{e.target === e.currentTarget && navigate('/shop')}}>
            <div className='shp_popup'>
            { item.sale !== false && <div className='shp_popup_sale_tag'>-{Math.round((1 - item.sale) * 100)}%</div>}
                <div className='shp_popup_img_sec'>
                    <img className='shp_popup_img' src={item.image} alt={item.alias} />
                    <div className='shp_popup_img_legalese'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className='shp_popup_details_sec'>
                    <div className='shp_popup_title_sec'>
                        <div className='shp_popup_title'>{item.name}</div>
                        <div className='shp_popup_big'><Stars rating={item.stars} size={1.8}/></div>
                        <div className='shp_popup_medium'><Stars rating={item.stars} size={1.2}/></div>
                    </div>
                    <div className='shp_popup_details_list_cont'>
                        <div>
                        { item.sale !== false ?
                            <>
                                <span className='shp_popup_price shp_popup_sale_old_price'>${item.price}</span>
                                <span className='shp_popup_price shp_popup_sale_price_color'>${ Math.round(item.price * item.sale * 100) / 100}</span>
                            </> 
                            :
                            <span className='shp_popup_price'>${item.price}</span>
                        }
                        </div>
                        <div className='shp_popup_subsec'>Description:</div>
                        <div className='shp_popup_description'>{item.description}</div>
                        <div className='shp_popup_subsec shp_popup_details_title'>Details:</div>
                        <ul className='shp_popup_details_list'>
                            {item.details.map((detail, i)=>{
                                return <li key={i} className='shp_popup_details_list_item'>{detail}</li>   
                            })}
                        </ul>
                    </div>
                </div>
                {   lastAdded?.alias !== item.alias ?
                <button className='shp_popup_cart_btn' onClick={()=>{addToCart(item)}}>
                    <span>Add to cart </span>
                    <span className='shp_popup_big shop_popup_cart_icon_big'><AddShoppingCartIcon fontSize='small' sx={{fontSize:"28px",position:'absolute',top:'8px',right:'22px'}}/></span>
                    <span className='shp_popup_medium shp_popup_cart_icon_medium'><AddShoppingCartIcon fontSize='small' sx={{fontSize:"20px",position:'absolute',top:'6px',right:'16px'}}/></span>
                </button>
                :
                <div className='shp_popup_cart_btn shp_popup_added_title'>Added</div>
                }
            </div>
        </div>
    );
}