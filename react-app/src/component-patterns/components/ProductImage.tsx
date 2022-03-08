import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface ProductImageProps {
    img?: string;
    alt?: string;
    className?: string;
}

export const ProductImage = ({ img = "", alt = "", className }: ProductImageProps): JSX.Element => {
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
            className={`${styles.productImg} ${className}`}
            src={imageToShow}
            alt={alt || "Product"}
        />
    );
};
