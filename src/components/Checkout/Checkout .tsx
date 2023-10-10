import React, { useState } from 'react';
import { useContextData } from '../../context/context';
import { AddressForm, CardForm } from '../../interface/interfaces';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Checkout.css';

export default function Checkout() {
    const { appData, dispatch } = useContextData();
    const cartPriceTotal = Math.round(100 * (appData.cart.reduce((total, cartItem)=>(total + (cartItem.item.price * cartItem.amount)),0))) / 100;
    const [cardForm, setCardForm] = useState<CardForm>({
        name: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });
    const [addressForm, setAddressForm] = useState<AddressForm>({
        address: '',
        country: '',
        state: '',
        city: '',
        zip: '',
    });

    return (
        <div className='checkout'>
            <div className='checkout_header'>
                <div className='checkout_header_title'>CHECKOUT</div>
                <div className='checkout_header_price'>${cartPriceTotal}</div>
            </div>
            <div className='checkout_header_hr'></div>
            <div className='checkout_item_cont'>
                <form className='checkout_form_sect'>
                    <div className='checkout_title'>
                        <div>Credit Card</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className='checkout_input_cont'>
                        <div className='checkout_input_title'>Full Name</div>
                        <input
                            className='checkout_input'
                            value={cardForm.name}
                            type='text'
                            onChange={e=>{setCardForm({...cardForm, name:e.target.value})}}
                        />
                    </div>
                    <div className='checkout_input_cont'>
                        <div className='checkout_input_title'>Card Number</div>
                        <input
                            className='checkout_input'
                            value={cardForm.cardNumber}
                            type='text'
                            maxLength={19}
                            onChange={e=>{setCardForm({...cardForm, cardNumber:e.target.value.replace(/\D/g, '')})}}
                        />
                    </div>
                    <div className='checkout_double_input_cont'>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>Exp</div>
                            <input
                                className='checkout_input'
                                value={cardForm.expiration}
                                type='text'
                                maxLength={4}
                                onChange={e=>{setCardForm({...cardForm, expiration:e.target.value})}}
                            />
                        </div>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>Cvv</div>
                            <input
                                className='checkout_input'
                                value={cardForm.cvv}
                                type='text'
                                maxLength={4}
                                onChange={e=>{setCardForm({...cardForm, cvv:e.target.value})}}
                            />
                        </div>
                    </div>
                </form>

                <form className='checkout_form_sect'>
                    <div className='checkout_title'>
                        <div>Shipping Address</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className='checkout_input_cont'>
                        <div className='checkout_input_title'>Address</div>
                        <input
                            className='checkout_input'
                            value={addressForm.address}
                            type='text'
                            onChange={e=>{setAddressForm({...addressForm, address:e.target.value})}}
                        />
                    </div>
                    <div className='checkout_double_input_cont'>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>Country</div>
                            <input
                                className='checkout_input'
                                value={addressForm.country}
                                type='text'
                                onChange={e=>{setAddressForm({...addressForm, country:e.target.value})}}
                            />
                        </div>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>State</div>
                            <input
                                className='checkout_input'
                                value={addressForm.state}
                                type='text'
                                onChange={e=>{setAddressForm({...addressForm, state:e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className='checkout_double_input_cont'>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>City</div>
                            <input
                                className='checkout_input'
                                value={addressForm.city}
                                type='text'
                                onChange={e=>{setAddressForm({...addressForm, city:e.target.value})}}
                            />
                        </div>
                        <div className='checkout_input_cont'>
                            <div className='checkout_input_title'>Zip Code</div>
                            <input
                                className='checkout_input'
                                value={addressForm.zip}
                                type='text'
                                onChange={e=>{setAddressForm({...addressForm, zip:e.target.value})}}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className='checkout_checkout_btn_cont'>
                <button className='checkout_back_btn' onClick={()=>{dispatch({type:'changeCheckoutStage', checkoutStage:'cart'})}}>
                    <ArrowBackIcon sx={{color:'white'}}/>
                </button>
                <button className='checkout_checkout_btn'>PURCHASE</button>
            </div>
        </div>
    );
}