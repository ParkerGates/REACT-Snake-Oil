import react from 'react';
import './Checkbox.css';

interface Props {
    status: boolean;
    changeStatus: Function;
}

export default function Checkbox({status, changeStatus}: Props) {
    return (
        <span className="filter_checkbox" onClick={()=>{changeStatus()}}>
            <div className={(status && 'filter_checkbox_checked') || 'filter_checkbox_unchecked'}></div>
        </span>
    );
}