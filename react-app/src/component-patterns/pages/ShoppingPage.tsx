import { ProductCard } from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = (): JSX.Element => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                product={product}
                key={product.title}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {() => (
                    <>
                        <ProductCard.Image />
                        <ProductCard.Title className="text-bold" />
                        <ProductCard.Buttons />
                    </>
                )}
            </ProductCard>
        </div>
    );
};
