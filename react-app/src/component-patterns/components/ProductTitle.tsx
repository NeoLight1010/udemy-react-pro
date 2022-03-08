import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { Product } from "../interfaces/interfaces";

interface ProductTitleProps {
    title?: Product["title"];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({
    title,
    className,
    style,
}: ProductTitleProps): JSX.Element => {
    const { product } = useContext(ProductContext);

    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title || product.title}
        </span>
    );
};
