export interface Product {
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface OnProductChangeArgs {
    product: Product; 
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface ProductCardInitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    reachedMaxCount: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number) => void;
    reset: () => void;
}
