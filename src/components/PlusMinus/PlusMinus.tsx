import react from 'react';
import './PlusMinus.css';

interface Props {
    status: boolean;
}

export default function PlusMinus({status}: Props) {
    return (
        <div className='pm_cont'>
            <div className={status ? "pm_action_ln" : "pm_action_ln pm_action_ln_active"}></div>
            <div className='pm_static_ln'></div>
        </div>
    );
}