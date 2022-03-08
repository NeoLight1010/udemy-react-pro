import { useReducer } from "react";
import { CounterProps } from "../bases/Counter";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

export const CounterReducer: React.FC<CounterProps> = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncrement = (incrementer: number) => {
        dispatch({
            type: "increaseBy",
            payload: {
                value: incrementer,
            },
        });
    };

    const handleReset = () => {
        dispatch({
            type: "reset",
        });
    };

    return (
        <>
            <h1>CounterReducer</h1>
            <pre>{JSON.stringify(state)}</pre>

            <button onClick={() => handleIncrement(1)}>+1</button>
            <button onClick={() => handleIncrement(5)}>+5</button>
            <button onClick={() => handleIncrement(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};
