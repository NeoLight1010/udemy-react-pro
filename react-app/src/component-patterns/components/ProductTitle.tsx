import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { Product } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({
    title,
}: {
    title?: Product["title"];
}): JSX.Element => {
    const { product } = useContext(ProductContext);

    return (
        <span className={styles.productDescription}>
            {title || product.title}
        </span>
    );
};
