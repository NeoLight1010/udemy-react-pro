import { ProductCard } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

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
                {({ reset, increaseBy, reachedMaxCount, count }) => (
                    <>
                        <ProductCard.Image />
                        <ProductCard.Title className="text-bold" />
                        <ProductCard.Buttons />

                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        {!reachedMaxCount && (
                            <button onClick={() => increaseBy(2)}>+2</button>
                        )}
                        <span>{count}</span>
                    </>
                )}
            </ProductCard>
        </div>
    );
};
