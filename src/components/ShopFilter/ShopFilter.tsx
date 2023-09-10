import react, { useState } from 'react';
import { FilterForm } from '../../interface/interfaces';
import Checkbox from '../Checkbox/Checkbox';

interface Props {
    form: FilterForm;
    setForm: Function;
}

export default function ShopFilter({form, setForm}: Props) {
    const [status, setStatus] = useState(false);

     return (
        <div>
            <div>
                <div>Remedy</div>
                <div>
                    <Checkbox status={status} changeStatus={setStatus} />
                    <label>Test</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Test</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Test</label>
                </div>
            </div>
            <div>
                <div>Form</div>
                <div>
                    <input type="checkbox" />
                    <label>Oils</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Drops</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Creams</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Rubs</label>
                </div>
            </div>
            <div>
                <div>Price</div>
                <input type="number" /><span>to</span><input type="number" />
            </div>
        </div>
     );
}