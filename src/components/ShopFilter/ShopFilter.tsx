import react, { useState } from 'react';
import { FilterForm } from '../../interface/interfaces';
import Checkbox from '../Checkbox/Checkbox';

interface Props {
    form: FilterForm;
    setForm: Function;
}

export default function ShopFilter({form, setForm}: Props) {

     return (
        <div>
            <div className='filter_remedy_cont'>
                <div className='filter_remedy_title'>Remedy</div>
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
            <div className='filter_form_cont'>
                <div className='filter_form_title'>Form</div>
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
            <div className='filter_price_cont'>
                <div className='filter_price_title' onClick={()=>{console.log(form)}}>Price</div>
                <input value={form.priceLow} onChange={e=>setForm({...form, priceLow: e.target.value })} type="number" />
                <span>to</span>
                <input value={form.priceHigh} onChange={e=>setForm({...form, priceHigh: e.target.value })} type="number" />
            </div>
        </div>
     );
}