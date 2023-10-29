import React, { useState, ReactNode } from 'react';
import './FlexToCarousel.css';

interface Props {
    item1: ReactNode;
    item2: ReactNode;
    item3: ReactNode;
}

export default function FlexToCarousel({item1, item2, item3}: Props) {
    const [carousel, setCarousel] = useState<1|2|3>(1);

    return (
        <div className='ftc_cont'>
            <div className='ftc_item_display'>
                <div className={'ftc_hidden '+(carousel === 1 ?'ftc_visable':'')}>
                    {item1}
                </div>
                <div className={'ftc_hidden '+(carousel === 2 ?'ftc_visable':'')}>
                    {item2}
                </div>
                <div className={'ftc_hidden '+(carousel === 3 ?'ftc_visable':'')}>
                    {item3}
                </div>
            </div>
            <div className='ftc_btn_cont'>
                <button className={'ftc_btn '+(carousel === 1 ?'ftc_btn_active':'')} onClick={()=>{setCarousel(1)}}></button>
                <button className={'ftc_btn '+(carousel === 2 ?'ftc_btn_active':'')} onClick={()=>{setCarousel(2)}}></button>
                <button className={'ftc_btn '+(carousel === 3 ?'ftc_btn_active':'')} onClick={()=>{setCarousel(3)}}></button>
            </div>
        </div>
    );
}