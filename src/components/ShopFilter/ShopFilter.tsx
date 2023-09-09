import react from 'react';

export default function ShopFilter() {
     return (
        <div>
            <div>
                <div>Remedy</div>
                <div>
                    <input type="checkbox" />
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