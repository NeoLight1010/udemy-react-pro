import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import React from "react";
import { useProduct } from "../hooks/useProduct";

interface Product {
    title: string;
    img?: string;
}

export const ProductImage = ({ img = "", alt = "" }): JSX.Element => {
    return (
        <img
            className={styles.productImg}
            src={img || noImage}
            alt={alt || "Product"}
        />
    );
};

export const ProductTitle = ({
    title,
}: {
    title: Product["title"];
}): JSX.Element => {
    return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
}

export const ProductButtons = ({
    increaseBy,
    counter,
}: ProductButtonsProps): JSX.Element => {
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
};

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <ProductImage img={product.img} alt={product.title} />

            <ProductTitle title={product.title} />

            <ProductButtons increaseBy={increaseBy} counter={counter} />
        </div>
    );
};
