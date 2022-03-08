import { ReactElement } from "react";

export interface Product {
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}