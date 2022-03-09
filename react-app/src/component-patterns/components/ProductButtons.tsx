import styles from "../styles/styles.module.css";
import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface ProductButtonsInterface {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({
    className,
    style,
}: ProductButtonsInterface): JSX.Element => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const reachedMaxCount = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            {/* TODO: disable dynamically */}
            <button
                className={`${styles.buttonAdd} ${
                    reachedMaxCount() ? styles.disabled : ""
                }`}
                onClick={() => increaseBy(1)}
                disabled={reachedMaxCount()}
            >
                +
            </button>
        </div>
    );
};
