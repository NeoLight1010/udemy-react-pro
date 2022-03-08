import { CounterProps } from "../../bases/Counter";

export interface CounterState {
    counter: CounterProps["initialValue"];
    previous: CounterProps["initialValue"];
    changes: number;
}
