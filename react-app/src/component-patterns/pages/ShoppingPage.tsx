import React, { useState } from "react";
import { ProductCard } from "../components";
import { OnProductChangeArgs, Product } from "../interfaces/interfaces";

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

    const onProductCountChange = ({ product, count }: OnProductChangeArgs) => {
        setShoppingCart((oldShoppingCart) => {
            const productInCart: ProductInCart = oldShoppingCart[
                product.title
            ] || { ...product, count: 0 };

            const incrementedCount = productInCart.count + count;

            if (Math.max(incrementedCount, 0) > 0) {
                productInCart.count = incrementedCount;

                return {
                    ...oldShoppingCart,
                    [product.title]: productInCart,
                };
            }

            const { [product.title]: toDelete, ...rest } = oldShoppingCart;
            return rest;
        });
    };

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
                    <ProductCard
                        product={product}
                        onChange={onProductCountChange}
                        key={product.title}
                        value={shoppingCart[product.title]?.count || 0}
                    >
                        <ProductCard.Image />
                        <ProductCard.Title className="text-bold" />
                        <ProductCard.Buttons />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {Object.values(shoppingCart).map((product) => (
                    <ProductCard
                        key={product.title}
                        product={product}
                        style={{
                            width: "100px",
                        }}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductCard.Image />
                        <ProductCard.Buttons
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
