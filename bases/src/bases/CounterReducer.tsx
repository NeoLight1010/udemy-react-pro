import { Reducer, useReducer } from "react";
import { CounterProps } from "./Counter";

interface CounterState {
    counter: CounterProps["initialValue"];
    previous: CounterProps["initialValue"];
    changes: number;
}

type CounterAction =
    | { type: "increaseBy"; payload: { value: number } }
    | { type: "reset" };

const counterReducer: Reducer<CounterState, CounterAction> = (
    state,
    action
) => {
    switch (action.type) {
        case "reset":
            return {
                counter: 0,
                previous: 0,
                changes: 0,
            };

        case "increaseBy":
            return {
                counter: (state.counter ?? 0) + action.payload.value,
                changes: state.changes + 1,
                previous: state.counter,
            };

        default:
            return state;
    }
};

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
