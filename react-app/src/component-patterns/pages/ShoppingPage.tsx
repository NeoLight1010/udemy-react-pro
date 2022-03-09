import { ProductCard } from "../components";
import {products} from "../data/products";
import {useShoppingCart} from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = (): JSX.Element => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

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
