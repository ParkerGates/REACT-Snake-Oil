import React from 'react';
import './ColorsDiv.css';

interface Props {
    direction: 'row' | 'column';
    width?: string;
    height?: string;
}

export default function ColorsDiv({direction, width='', height=''}: Props) {

    return (
        <div style={{
            display: 'flex',
            flexDirection: direction,
            width: width,
            height: height,
        }}>
            <div style={{flex:'1',backgroundColor:'#F85045'}}>&nbsp;</div>
            <div style={{flex:'1',backgroundColor:'#FFDF36'}}>&nbsp;</div>
            <div style={{flex:'1',backgroundColor:'#4AFFA8'}}>&nbsp;</div>
            <div style={{flex:'1',backgroundColor:'#5754E7'}}>&nbsp;</div>
        </div>
    );
}