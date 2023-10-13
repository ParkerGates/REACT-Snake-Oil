import React from 'react';
import { useForm } from 'react-hook-form';
import { useContextData } from '../../context/context';
import { CheckoutForm } from '../../interface/interfaces';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Checkout.css';

export default function Checkout() {
    const { appData, dispatch } = useContextData();
    const cartPriceTotal = Math.round(100 * (appData.cart.reduce((total, cartItem)=>(total + (cartItem.item.price * cartItem.amount)),0))) / 100;

    const {
        register,
        setValue,
        clearErrors,
        handleSubmit: cardSubmit,
        formState
    } = useForm<CheckoutForm>();
    const { errors } = formState;

    const checkoutSubmit = (data, errors) => {
        clearErrors()
        dispatch({type:'changeCheckoutStage', checkoutStage:'complete'})
        dispatch({type:'clearCart'})
    }

    const autoFillCheckout = () => {
        clearErrors()
        setValue('name', 'John Doe');
        setValue('cardNumber', '123456789012345678');
        setValue('expiration', '1/12');
        setValue('cvv', '321');
        setValue('address', '1234 N 4321 W');
        setValue('country', 'US');
        setValue('state', 'UT');
        setValue('city', 'Salt Lake City');
        setValue('zip', '84103');
    }

    return (
        <div className='checkout'>
            <div className='checkout_header'>
                <div className='checkout_header_title'>CHECKOUT</div>
                <div className='checkout_header_price'>${cartPriceTotal}</div>
            </div>
            <div className='checkout_header_hr'></div>
            <div className='checkout_item_cont'>
                <form>
                    <div className='checkout_form_sect'>
                        <div className='checkout_title'>
                            <div>Credit Card</div>
                            <div>&nbsp;</div>
                        </div>
                        <div className='checkout_input_cont'>
                            <div className={'checkout_input_title '+(errors.name&&'checkout_title_error')}>Full Name</div>
                            <input
                                className={'checkout_input '+(errors.name&&'checkout_input_error')}
                                {...register('name', {required: 'Name required'})}
                            />
                        </div>
                        <div className='checkout_input_cont'>
                            <div className={'checkout_input_title '+(errors.cardNumber&&'checkout_title_error')}>Card Number</div>
                            <input
                                className={'checkout_input '+(errors.cardNumber&&'checkout_input_error')}
                                {...register('cardNumber', {required: 'Card numbers required'})}
                            />
                        </div>
                        <div className='checkout_double_input_cont'>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.expiration&&'checkout_title_error')}>Exp</div>
                                <input
                                    className={'checkout_input '+(errors.expiration&&'checkout_input_error')}
                                    {...register('expiration', {required: 'Expiration required'})}
                                />
                            </div>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.cvv&&'checkout_title_error')}>Cvv</div>
                                <input
                                    className={'checkout_input '+(errors.cvv&&'checkout_input_error')}
                                    {...register('cvv', {required: 'Cvv required'})}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='checkout_form_sect'>
                        <div className='checkout_title'>
                            <div>Shipping Address</div>
                            <div>&nbsp;</div>
                        </div>
                        <div className='checkout_input_cont'>
                            <div className={'checkout_input_title '+(errors.address&&'checkout_title_error')}>Address</div>
                            <input
                                className={'checkout_input '+(errors.address&&'checkout_input_error')}
                                {...register('address', {required: 'Address required'})}
                            />
                        </div>
                        <div className='checkout_double_input_cont'>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.country&&'checkout_title_error')}>Country</div>
                                <input
                                    className={'checkout_input '+(errors.country&&'checkout_input_error')}
                                    {...register('country', {required: 'Country required'})}
                                />
                            </div>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.state&&'checkout_title_error')}>State</div>
                                <input
                                    className={'checkout_input '+(errors.state&&'checkout_input_error')}
                                    {...register('state', {required: 'State required'})}
                                />
                            </div>
                        </div>
                        <div className='checkout_double_input_cont'>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.city&&'checkout_title_error')}>City</div>
                                <input
                                    className={'checkout_input '+(errors.city&&'checkout_input_error')}
                                    {...register('city', {required: 'City required'})}
                                />
                            </div>
                            <div className='checkout_input_cont'>
                                <div className={'checkout_input_title '+(errors.zip&&'checkout_title_error')}>Zip Code</div>
                                <input
                                    className={'checkout_input '+(errors.zip&&'checkout_input_error')}
                                    {...register('zip', {required: 'Zip code required'})}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className='checkout_btn_cont'>
                <div className='checkout_checkout_btn_cont'>
                    <button className='checkout_back_btn' onClick={()=>{dispatch({type:'changeCheckoutStage', checkoutStage:'cart'})}}>
                        <ArrowBackIcon sx={{color:'#555555'}}/>
                    </button>
                    <button className='checkout_auto_populate_btn' onClick={autoFillCheckout}>AUTO FILL</button>
                </div>
                <button className='checkout_checkout_btn' onClick={cardSubmit(checkoutSubmit)}>PURCHASE</button>
            </div>
        </div>
    );
}