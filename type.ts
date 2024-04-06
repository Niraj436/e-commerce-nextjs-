export interface IProducts {
    _id:number;
    title: string;
    isNew:boolean;
    oldPrice: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating:number;
    quantity:number;
    
}

export interface ItemProps {
    item: IProducts;
}