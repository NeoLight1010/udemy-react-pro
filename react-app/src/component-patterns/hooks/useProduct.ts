import { useEffect, useRef, useState } from "react";
import {
    OnProductChangeArgs,
    Product,
    ProductCardInitialValues,
} from "../interfaces/interfaces";

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnProductChangeArgs) => void;
    value?: number;
    initialValues?: ProductCardInitialValues;
}

export const useProduct = ({
    onChange,
    product,
    value = 0,
    initialValues,
}: UseProductArgs) => {
    const [counter, setCounter] = useState<number>(
        initialValues?.count ?? value
    );

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newCounter = Math.max(0, counter + value);

        newCounter = Math.min(
            initialValues?.maxCount ?? Number.MAX_VALUE,
            newCounter
        );

        setCounter(newCounter);

        onChange && onChange({ count: newCounter, product });
    };

    const reset = () => {
        setCounter(initialValues?.count ?? value);
    };

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        reachedMaxCount:
            !!initialValues?.maxCount && counter === initialValues.maxCount,
        reset,
    };
};
