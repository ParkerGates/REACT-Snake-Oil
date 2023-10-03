import react, { useState } from 'react';
import { FilterForm, FilterFormOptions } from '../../interface/interfaces';
import {CheckboxArray, CheckboxSimple} from '../Checkbox/Checkbox';
import PlusMinus from '../PlusMinus/PlusMinus';
import './ShopFilter.css';

interface Props {
    form: FilterForm;
    setForm: Function;
}

export default function ShopFilter({form, setForm}: Props) {
    const [priceLow, setPriceLow] = useState(form.priceMin === undefined ? '':String(form.priceMin));
    const [priceHigh, setPriceHigh] = useState(form.priceMax === undefined ? '':String(form.priceMax));
    const [t, setT] = useState<boolean>(true);
    const [section, setSection] = useState<{remedy:boolean,form:boolean,price:boolean}>({
        remedy: true,
        form: true,
        price: true
    });

    const onApply = () => {
        let newForm = {...form}; 
        if (priceLow === "" && priceHigh === "") {
            setForm({...newForm, priceMax: undefined, priceLow: undefined});
            setPriceLow(''); setPriceHigh(''); return;
        }
        newForm.priceMin = Number(+priceLow > +priceHigh ?  priceHigh:priceLow);
        newForm.priceMax = Number(+priceLow > +priceHigh ? priceLow:priceHigh);
        setForm(newForm);
        setPriceLow(newForm.priceMin === 0 ?  '': String(newForm.priceMin));
        setPriceHigh(newForm.priceMax === 0 ? '' : String(newForm.priceMax));
    }

    const toggleSection = (title: 'remedy'|'form'|'price') => {
        let newSection = {...section};
        newSection[title] = !section[title];
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
                    <CheckboxArray name={"miracle"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Miracle Cures</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"natural"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Natural Remedies</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"daily"} catagory={"remedy"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Daily Heatlh</label>
                </div>
            </div>


            <div className={section.form ? 'filter_sec_cont' : "filter_sec_cont filter_sec_cont_collapsed"}>
                <div onClick={()=>toggleSection('form')} className="filter_title">
                    <PlusMinus status={section.form} />
                    <div className='filter_title_text'>Form</div>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"oils"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Oils</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"drops"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Drops</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"creams"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Creams</label>
                </div>
                <div className='filter_checkbox_sec'>
                    <CheckboxArray name={"rubs"} catagory={"form"} form={form} changeForm={setForm} />
                    <label className='filter_checkbox_name' >Rubs</label>
                </div>
            </div>


            <div  className={section.price ? 'filter_sec_cont' : "filter_sec_cont filter_sec_cont_collapsed"}>
                <div onClick={()=>toggleSection('price')} className="filter_title">
                    <PlusMinus status={section.price} />
                    <div className='filter_title_text'>Price</div>
                </div>
                <input className='filter_price_input' value={priceLow} type="text" maxLength={3} placeholder='$' autoComplete="off" onChange={e=>setPriceLow(e.target.value.replace(/\D/g, ''))} />
                <span>to</span>
                <input className='filter_price_input' value={priceHigh} type="text" maxLength={3} placeholder='$$$' autoComplete="off" onChange={e=>setPriceHigh(e.target.value.replace(/\D/g, ''))} />
                <div className='filter_price_btn_cont'>
                    <button onClick={onApply}>Apply</button>
                </div>
                <div className='filter_checkbox_sec filter_price_checkbox'>
                    <CheckboxSimple bool={form.sales} toggle={()=>setForm({...form, sales: !form.sales})}/>
                    <label className='filter_checkbox_name' >Sales</label>
                </div>
            </div>
        </div>
     );
}