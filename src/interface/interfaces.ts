interface StoreItem {
    name: string;
    alias: string;
    price: number;
    stars: number;
    image: any;
    description: string;
    details: string[];
    remedy: "miracle"|'natural'|'daily';
    form: 'creams'|'drops'|'oils'|'pills'|'powders'|'rubs';
}

interface FilterForm {
    remedy: []| ('miracle'|'natural'|'daily')[],
    form: []| ('oils'|'drops'|'creams'|'rubs')[],
    priceMin: number|undefined,
    priceMax: number|undefined,
    sales: boolean,
}

type FilterFormOptions = 'miracle'|'natural'|'daily'|'oils'|'drops'|'creams'|'rubs';
type SelectSortOptions = 'featured'|'alphabet'|'rated'|'priceLow'|'priceHigh';

export type { StoreItem, FilterForm, FilterFormOptions, SelectSortOptions }