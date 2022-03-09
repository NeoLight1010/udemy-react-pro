import { useEffect, useState } from "react";
import { OnProductChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnProductChangeArgs) => void;
    value?: number;
}

export const useProduct = ({
    onChange,
    product,
    value = 0,
}: UseProductArgs) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(0, counter + value);

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return { counter, increaseBy };
};
