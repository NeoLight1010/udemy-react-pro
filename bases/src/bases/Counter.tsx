import { useState } from "react";

export interface CounterProps {
    initialValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <>
            <h1>Counter: {counter}</h1>

            <button onClick={handleClick}>+1</button>
        </>
    );
};
