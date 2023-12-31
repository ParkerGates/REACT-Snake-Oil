import React from 'react';
import { useContextData } from '../../context/context';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import itemImg from '../../images/itemImageIndex';
import './Cart.css';

export default function Cart() {
    const { appData, dispatch } = useContextData();
    const cartPriceTotal = Math.round(100 * (appData.cart.reduce((total, cartItem)=>{
        if (cartItem.item.sale !== false) { return total + (Math.round(100*(cartItem.item.price * cartItem.item.sale)) / 100 * cartItem.amount) }
        return total + (cartItem.item.price * cartItem.amount)
    },0))) / 100;

    return (
        <div className='cart'>
            <div className='cart_header'>
                <div className='cart_header_title'>CART</div>
                { appData.cart.length !== 0 && <div className='cart_header_price'>${cartPriceTotal.toFixed(2)}</div> }
            </div>
            <div className='cart_header_hr'></div>

            { appData.cart.length !== 0 ?
                <div className='cart_item_cont'>
                {appData.cart.map((cartItem, index)=>{
                    return (
                        <div key={cartItem.item.alias}>
                            <div className='cart_item'>
                                <img className='cart_item_img' src={itemImg[cartItem.item.image]} alt={cartItem.item.alias} />
                                <div className='cart_item_info'>
                                    <div className='cart_item_name'>{cartItem.item.name}</div>
                                    <span>
                                    { cartItem.item.sale !== false ?
                                        <>
                                            <span className='cart_sale_old_price cart_item_price'>${cartItem.item.price}</span>
                                            <span className='cart_item_price cart_item_price_color'>${ Math.round(cartItem.item.price * cartItem.item.sale * 100) / 100}</span>
                                        </> 
                                        :
                                        <span className='cart_item_price'>${cartItem.item.price}</span>
                                    }
                                    </span>
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