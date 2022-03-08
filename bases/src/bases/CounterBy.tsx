import { useState } from "react";
import {CounterProps} from "./Counter";

interface CounterByState {
    counter: number;
    clicks: number;
}

export const CounterBy: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [{ counter, clicks }, setState] = useState<CounterByState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleClick = (incrementer: number) => {
        setState((prev) => ({
            counter: prev.counter + incrementer,
            clicks: prev.clicks + 1,
        }));
    };

    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h3>Clicks: {clicks}</h3>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    );
};
