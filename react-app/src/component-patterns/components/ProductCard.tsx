import styles from "../styles/styles.module.css";
import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
    OnProductChangeArgs,
    Product,
    ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext<ProductContextProps>(
    {} as ProductContextProps
);

interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnProductChangeArgs) => void;
}

export const ProductCard = ({
    product,
    children,
    className,
    style,
    onChange,
}: ProductCardProps): JSX.Element => {
    const { counter, increaseBy } = useProduct({ onChange, product });
    const { Provider } = ProductContext;

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
