import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import React from "react";
import {useProduct} from "../hooks/useProduct";

interface ProductCardProps {
    product: Product;
}

interface Product {
    title: string;
    img?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <img
                className={styles.productImg}
                src={product.img || noImage}
                alt={product.title}
            />

            <span className={styles.productDescription}>{product.title}</span>

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >
                    -
                </button>

                <div className={styles.countLabel}>{counter}</div>

                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};
