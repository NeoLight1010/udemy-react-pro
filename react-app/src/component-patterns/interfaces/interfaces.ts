export interface Product {
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface OnProductChangeArgs {
    product: Product; 
    count: number;
}
