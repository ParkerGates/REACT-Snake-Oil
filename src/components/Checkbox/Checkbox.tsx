import react from 'react';

interface Props {
    status: boolean;
    changeStatus: () => void;
}

export default function Checkbox({status, changeStatus}: Props) {
    return (
        <span className="filter_checkbox" onClick={changeStatus}>
            <div className=""></div>
        </span>
    );
}