import { useState } from "react";
import { OnProductChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
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

    return {
        shoppingCart,
        onProductCountChange,
    };
};
