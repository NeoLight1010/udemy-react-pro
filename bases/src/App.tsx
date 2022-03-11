import { MyLabel } from "neolight-storybook-components";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./counter-reducer/CounterReducer";

function App() {
    return (
        <div>
            <h1>Hello World!</h1>

            <br />

            <MyLabel label="Welcome to my React project!" backgroundColor="white" />

            <hr />

            <Counter initialValue={15} />
            <br />
            <CounterBy />
            <br />
            <CounterEffect initialValue={9} />
            <br />
            <CounterEffect initialValue={8} />
            <br />
            <CounterHook initialValue={8} />
            <br />
            <CounterReducer />
        </div>
    );
}

export default App;
