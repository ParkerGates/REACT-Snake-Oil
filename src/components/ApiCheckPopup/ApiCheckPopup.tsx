import React from 'react';
import ColorsDiv from '../ColorsDiv/ColorsDiv';
import './ApiCheckPopup.css';

interface Props {
    hasApi: undefined | boolean;
}

export default function ApiCheckPopup({hasApi}:Props) {

    if (hasApi === undefined || hasApi === true) return(<></>);
    return (
        <div className='no_api_cont'>
            <div className='no_api_sect'>
                <div>Api not detected</div>
                <div>
                    Please run 
                    <span className="no_api_command_text">npm run serve-json</span>
                     in another terminal then reload react app</div>
                <div className='no_api_colors'>
                    <ColorsDiv direction='row' width='100%' />
                </div>
            </div>
        </div>
    );
}