import { Reducer } from "react";
import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer: Reducer<CounterState, CounterAction> = (
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
