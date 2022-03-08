import React, { useState } from "react";
import { ProductCard } from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const products: Product[] = [
    {
        title: "Coffe Mug",
        img: "./coffee-mug.png",
    },
    {
        title: "Coffe Mug 2",
        img: "./coffee-mug2.png",
    },
];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage: React.FC = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {products.map((product) => (
                    <ProductCard product={product}>
                        <ProductCard.Image />
                        <ProductCard.Title className="text-bold" />
                        <ProductCard.Buttons />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                <ProductCard
                    product={products.at(-1)!}
                    style={{
                        width: "100px",
                    }}
                >
                    <ProductCard.Image />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
