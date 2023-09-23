import react, { useState } from 'react';
import { FilterForm } from '../../interface/interfaces';
import Checkbox from '../Checkbox/Checkbox';
import PlusMinus from '../PlusMinus/PlusMinus';
import './ShopFilter.css';

interface Props {
    form: FilterForm;
    setForm: Function;
}

export default function ShopFilter({form, setForm}: Props) {
    const [price, setPrice] = useState(form.priceMax === undefined ? '':String(form.priceMax));
    const [t, setT] = useState<boolean>(true);
    const [section, setSection] = useState<{remedy:boolean,form:boolean,price:boolean}>({
        remedy: true,
        form: true,
        price: true
    });

    const onReset = () => {
        setPrice("");
        let newForm = {...form};

    }

    const onApply = () => {
        console.log("apply", )
    }

    const isDisabled = () => {
        console.log(Number(''))
    }

    const toggleSection = (title: 'remedy'|'form'|'price') => {
        let newSection = {...section};
        newSection[title] = !section[title];
        console.log(section[title], newSection[title]);
        setSection(newSection);
    }

     return (
        <div className='filter_cont'>
            <div className={section.remedy ? 'filter_sec_cont' : "filter_sec_cont filter_sec_cont_collapsed"}>
                <div onClick={()=>toggleSection('remedy')} className="filter_title">
                    <PlusMinus status={section.remedy} />
                    <div className='filter_title_text'>Remedy</div>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"miracle"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Miracle Cures</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"natural"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Natural Remedies</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"daily"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Daily Heatlh</label>
                </div>
            </div>


            <div className={section.form ? 'filter_sec_cont' : "filter_sec_cont filter_sec_cont_collapsed"}>
                <div onClick={()=>toggleSection('form')} className="filter_title">
                    <PlusMinus status={section.form} />
                    <div className='filter_title_text'>Form</div>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"oils"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Oils</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"drops"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Drops</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"creams"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Creams</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <Checkbox name={"rubs"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Rubs</label>
                </div>
            </div>


            <div  className={section.price ? 'filter_sec_cont' : "filter_sec_cont filter_sec_cont_collapsed"}>
                <div onClick={()=>toggleSection('price')} className="filter_title">
                    <PlusMinus status={section.price} />
                    <div className='filter_title_text'>Price</div>
                </div>
                <span>0</span>
                <span>to</span>
                <input id='priceHigh' value={price} type="text" autoComplete="off" onChange={e=>setPrice(e.target.value.replace(/\D/g, ''))} />
                <div>
                    <button onClick={onReset}>Reset</button>
                    <button onClick={onApply}>Apply</button>
                    <button onClick={isDisabled} >test</button>
                </div>
            </div>
        </div>
     );
}