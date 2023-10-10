import React, { useState } from 'react';
import { useContextData } from '../../context/context';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout ';
import './TransactionHead.css';

export default function TransactionHead() {
    const { appData, dispatch } = useContextData();

    return (
        <>
            { appData.checkoutStage === 'cart' && <Cart /> }
            { appData.checkoutStage === 'checkout' && <Checkout /> }
        </>
    );
}