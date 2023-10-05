import React from 'react';
import { useContextData } from '../../context/context';
import './Cart.css';

export default function Cart() {
    const { appData, dispatch } = useContextData();
    const cartPriceTotal = Math.round(100 * (appData.cart.reduce((total, cartItem)=>(total + (cartItem.item.price * cartItem.amount)),0))) / 100;

    return (
        <div>
            <div className='cart_header'>
                <div className='cart_header_title'>CART</div>
                <div className='cart_header_price'>${cartPriceTotal}</div>
            </div>
            <div className='cart_header_hr'></div>
            {appData.cart.map((cartItem, index)=>{
                return (
                    <div key={cartItem.item.alias}>
                        <div className='cart_item'>
                            <img className='cart_item_img' src={cartItem.item.image} alt={cartItem.item.alias} />
                            <div className='cart_item_info'>
                                <div className='cart_item_name'>{cartItem.item.name}</div>
                                <div className='cart_item_price'>{cartItem.item.price}</div>
                                <div className='cart_item_interact'>
                                    <div className='cart_item_interact_amount'>{cartItem.amount}</div>
                                    <div className='cart_item_interact_index'>{index}</div>
                                    <div className='cart_item_interact_delete' onClick={()=>{ dispatch({type:"removeFromCart",itemIndex:index})}}>delete</div>
                                </div>
                            </div>
                        </div>
                        <div className='cart_item_hr'></div>
                    </div>
                );
            })}
        </div>
    );
}