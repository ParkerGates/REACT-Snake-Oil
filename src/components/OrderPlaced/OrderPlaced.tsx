import React from 'react';
import { useContextData } from '../../context/context';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Colors from '../../svgs/colors.svg'
import './OrderPlaced.css';

export default function OrderPlaced() {
    const { dispatch } = useContextData();

    return (
        <div className='order_placed'>
            <div className='order_placed_header'>
                <div className='order_placed_header_title'>ORDER PLACED</div>
            </div>
            <div className='order_placed_header_hr'></div>
            <div className='order_placed_cont'>
                <span className='order_placed_truck_cont'>
                    <LocalShippingIcon fontSize='large' sx={{fontSize:'8rem'}}/>
                </span>
                <img className='order_placed_colors' src={Colors} alt='colors' />
            </div>
            <button className='order_placed_return_btn' onClick={()=>{dispatch({type:'changeCheckoutStage', checkoutStage:'cart'})}}>BACK TO CART</button>
        </div>
    );
}