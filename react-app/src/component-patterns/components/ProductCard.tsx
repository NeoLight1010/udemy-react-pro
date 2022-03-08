import styles from "../styles/styles.module.css";
import React from "react";
import {useProduct} from "../hooks/useProduct";

export const ProductCard: React.FC = () => {
    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <img
                className={styles.productImg}
                src={"./coffee-mug.png"}
                alt="Coffee Mug"
            />

            <span className={styles.productDescription}>Coffee Mug</span>

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
