import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { createContext, ReactElement, useContext } from "react";
import { useProduct } from "../hooks/useProduct";

interface Product {
    title: string;
    img?: string;
}

interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

const ProductContext = createContext<ProductContextProps>(
    {} as ProductContextProps
);

const ProductImage = ({ img = "", alt = "" }): JSX.Element => {
    const { product } = useContext(ProductContext);

    let imageToShow;

    if (img) {
        imageToShow = img;
    } else if (product.img) {
        imageToShow = product.img;
    } else {
        imageToShow = noImage;
    }

    return (
        <img
            className={styles.productImg}
            src={imageToShow}
            alt={alt || "Product"}
        />
    );
};

const ProductTitle = ({ title }: { title?: Product["title"] }): JSX.Element => {
    const { product } = useContext(ProductContext);

    return (
        <span className={styles.productDescription}>
            {title || product.title}
        </span>
    );
};

const ProductButtons = (): JSX.Element => {
    const { counter, increaseBy, product } = useContext(ProductContext);

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

const { Provider } = ProductContext;

interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export const ProductCard = ({
    product,
    children,
}: ProductCardProps): JSX.Element => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}

                {/*<ProductImage img={product.img} alt={product.title} />

            <ProductTitle title={product.title} />

            <ProductButtons increaseBy={increaseBy} counter={counter} />*/}
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
