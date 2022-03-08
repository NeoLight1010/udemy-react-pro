import React from "react";
import { ProductCard } from "../components/ProductCard";

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
                />
            </div>
        </div>
    );
};
