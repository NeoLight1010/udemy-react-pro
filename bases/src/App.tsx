import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";
import {CounterEffect} from "./bases/CounterEffect";
import {CounterHook} from "./bases/CounterHook";
import {CounterReducer} from "./bases/CounterReducer";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect initialValue={9} />
      <CounterEffect initialValue={8} />
      <CounterHook initialValue={8} />
      <CounterReducer />
    </>
  );
}

export default App;
