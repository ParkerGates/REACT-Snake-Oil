interface StoreItem {
    name: string;
    alias: string;
    price: number;
    stars: number;
    image: any;
    description: string;
    details: string[];
    remedy: "maricle"|'remedy'|'daily';
    form: 'cream'|'drop'|'oil'|'pill'|'powder'|'soap';
}

interface FilterForm {
    remedy: []|['miracle'|'natural'|'daily'],
    form: []|['oils'|'drops'|'creams'|'rubs'],
    priceMax: number|undefined,
    sales: boolean,
}

export type { StoreItem, FilterForm }