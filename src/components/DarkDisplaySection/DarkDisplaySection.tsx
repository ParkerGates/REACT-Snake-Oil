import React from 'react';
import './DarkDisplaySection.css';

interface Props {
    id: string;
    name: string
    children: any;
}

export default function DarkDisplaySection({id, name, children}: Props) {
    const text = name.toUpperCase()

    return (
        <div id={id} className="dds_popular">
        <div className="dds_item_heading_top">
            <div className='dds_item_heading_hr'></div>
            <div className="dds_item_heading_top_text">
                <div>{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}</div>
                <h3>{text}</h3>
                <div>{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}</div>
            </div>
            <div className='dds_item_heading_hr'></div>
        </div>

        { children }

        <div className="dds_item_heading_top">
            <div className='dds_item_heading_hr'></div>
            <div className="dds_item_heading_top_text dds_item_heading_bottom_text">
                <div>{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}</div>
                <h3>{text}</h3>
                <div>{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}</div>
            </div>
            <div className='dds_item_heading_hr'></div>
        </div>
    </div>
    );
}