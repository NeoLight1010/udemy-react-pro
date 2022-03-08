import { useCounter } from "../hooks/useCounter";
import { CounterProps } from "./Counter";

export const CounterHook: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const { counterElement, counter, handleClick } = useCounter({
        initialValue,
        maxValue: 15,
    });

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>+1</button>
        </>
    );
};
