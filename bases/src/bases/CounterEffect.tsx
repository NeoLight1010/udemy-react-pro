import { useEffect, useRef, useState } from "react";
import { CounterProps } from "./Counter";
import { gsap } from "gsap";

const MAX_COUNT = 10;

export const CounterEffect: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [counter, setCounter] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
    };

    useEffect(() => {
        if (counter < MAX_COUNT) return;

        const timeline = gsap.timeline();

        timeline
            .to(counterElement.current, {
                y: -10,
                duration: 0.2,
                ease: "ease.out",
            })

            .to(counterElement.current, {
                y: 0,
                duration: 1,
                ease: "bounce.out",
            });

        console.log(
            "%cMaximum reached!",
            "color: red; background-color: black"
        );
    }, [counter]);

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>+1</button>
        </>
    );
};
