import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
    OnProductChangeArgs,
    Product,
    ProductCardHandlers,
    ProductCardInitialValues,
    ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext<ProductContextProps>(
    {} as ProductContextProps
);

interface ProductCardProps {
    product: Product;
    children: (handlers: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnProductChangeArgs) => void;
    value?: number;
    initialValues?: ProductCardInitialValues;
}

export const ProductCard = ({
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues,
}: ProductCardProps): JSX.Element => {
    const { counter, increaseBy, maxCount, reachedMaxCount, reset } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    const { Provider } = ProductContext;

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                maxCount,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    reachedMaxCount,
                    maxCount,
                    product,
                    reset,
                    increaseBy,
                })}
            </div>
        </Provider>
    );
};
