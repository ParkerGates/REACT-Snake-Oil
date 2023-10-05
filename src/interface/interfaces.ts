type ItemAlias = 'creamGreen'|'creamPink'|'dropPlate'|'dropBasket'|'dropPink'|'dropPlant'|'oilBlue'|'oilGreen'|'oilLavender'|'oilOrange'|'oilPurple'|'oilWhite'|'oilYellow'|'pillColor'|'pillFruit'|'pillGreen'|'pillYellow'|'powderBrown'|'powderOrange'|'powderRed'|'soapBrown'|'soapGreen'|'soapPink';

interface StoreItem {
    name: string;
    alias: ItemAlias;
    price: number;
    stars: number;
    image: any;
    description: string;
    details: string[];
    remedy: "miracle"|'natural'|'daily';
    form: 'creams'|'drops'|'oils'|'pills'|'powders'|'rubs';
}

interface CartItem  {
    amount: number;
    item: StoreItem
}

interface AppContext {
    cart: CartItem[];
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


export type { StoreItem, AppContext, CartItem, FilterForm, FilterFormOptions, SelectSortOptions, ItemAlias }