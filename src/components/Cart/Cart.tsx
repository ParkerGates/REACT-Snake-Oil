import React from 'react';
import { useContextData } from '../../context/context';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Cart.css';

export default function Cart() {
    const { appData, dispatch } = useContextData();
    const cartPriceTotal = Math.round(100 * (appData.cart.reduce((total, cartItem)=>(total + (cartItem.item.price * cartItem.amount)),0))) / 100;

    return (
        <div className='cart'>
            <div className='cart_header'>
                <div className='cart_header_title'>CART</div>
                { appData.cart.length !== 0 && <div className='cart_header_price'>${cartPriceTotal}</div> }
            </div>
            <div className='cart_header_hr'></div>

            { appData.cart.length !== 0 ?
                <div className='cart_item_cont'>
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
                                        <div className='cart_item_interact_increment'>
                                            <button onClick={()=>dispatch({type:'incrementCartItem', itemIndex: index, increment:1})}>
                                                <KeyboardArrowUpIcon fontSize='small' sx={{}}/>
                                            </button>
                                            <button onClick={()=>dispatch({type:'incrementCartItem', itemIndex: index, increment:-1})}>
                                                <KeyboardArrowDownIcon fontSize='small' sx={{}}/>
                                            </button>
                                        </div>
                                        <div className='cart_item_interact_delete' onClick={()=>{ dispatch({type:"removeFromCart",itemIndex:index})}}>delete</div>
                                    </div>
                                </div>
                            </div>
                            <div className='cart_item_hr'></div>
                        </div>
                    );
                })}
                </div>
                :
                <div className='cart_is_empty'><div>Cart Is Empty</div></div>
            }
            <button
                className='cart_checkout'
                disabled={appData.cart.length === 0}
                onClick={()=>{dispatch({type:'changeCheckoutStage', checkoutStage:'checkout'})}}
                >CHECK OUT
            </button>
        </div>
    );
}