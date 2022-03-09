import "./App.css";
import { Product, ProductButtons, ProductCard, ProductImage, ProductTitle } from "neolight-product-card";

const product1: Product = {
    title: "My Title!",
    img: "./logo512.png"
}

const product2: Product = {
    title: "My Product :D",
}

function App() {
    return (
        <div className="App App-header">
            <h1>Hello World!</h1>

            <ProductCard product={product1} initialValues={{
                count: 5,
                maxCount: 12,
                }}>
                {({count, reset}) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />

                        <span>{count}</span>
                        <button onClick={reset}>Reset</button>
                    </>
                )}
            </ProductCard>

            <ProductCard product={product2} initialValues={{
                count: 5,
                maxCount: 12,
                }}>
                {() => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
        </div>
    );
}

export default App;
