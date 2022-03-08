import { useState } from "react";
import { OnProductChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnProductChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: UseProductArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(0, counter + value);

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    return { counter, increaseBy };
};
