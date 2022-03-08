import React from "react";
import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

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
                    className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" style={{
                        fontStyle: "oblique",
                    }} />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={{
                        title: "Coffe Mug",
                        img: "./coffee-mug.png",
                    }}

                    style={{
                        backgroundColor: "darkcyan",
                    }}
                >
                    <ProductCard.Image />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons style={{
                        color: "white",
                    }} />
                </ProductCard>
            </div>
        </div>
    );
};
