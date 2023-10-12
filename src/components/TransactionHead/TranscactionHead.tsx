import React from 'react';
import { useContextData } from '../../context/context';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout ';
import OrderPlaced from '../OrderPlaced/OrderPlaced';
import './TransactionHead.css';

export default function TransactionHead() {
    const { appData } = useContextData();

    return (
        <div className='transaction_head'>
            { appData.checkoutStage === 'cart' && <Cart /> }
            { appData.checkoutStage === 'checkout' && <Checkout /> }
            { appData.checkoutStage === 'complete' && <OrderPlaced />}
        </div>
    );
}