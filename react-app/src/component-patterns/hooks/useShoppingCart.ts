import { useState } from "react";
import { OnProductChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({ product, count }: OnProductChangeArgs) => {
        setShoppingCart((oldShoppingCart) => {
            if (count === 0) {
                const { [product.title]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.title]: {...product, count}
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
