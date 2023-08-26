interface storeItem {
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

export type { storeItem }