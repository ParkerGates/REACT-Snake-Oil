import react from 'react';
import './Checkbox.css';

interface Props {
    name: string;
    catagory: string;
    form: any;
    changeForm: Function;
}

export default function Checkbox({name, catagory, form, changeForm}: Props) {
    const exists = form[catagory].includes(name);
    
    const toggleCheckbox = () => {
        let newForm = {...form};

        if (exists) {
            newForm[catagory].splice(newForm[catagory].indexOf(name), 1);
            changeForm(newForm);
            return;
        }
        newForm[catagory].push(name);
        changeForm(newForm);
    }

    return (
        <span className="filter_checkbox" onClick={toggleCheckbox}>
            <div className={(exists && 'filter_checkbox_checked') || 'filter_checkbox_unchecked'}></div>
        </span>
    );
}