import React from "react";
import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

export const ShoppingPage: React.FC = () => {
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
                <ProductCard
                    product={{
                        title: "Coffe Mug",
                        img: "./coffee-mug.png",
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard
                    product={{
                        title: "Coffe Mug",
                        img: "./coffee-mug.png",
                    }}
                >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
