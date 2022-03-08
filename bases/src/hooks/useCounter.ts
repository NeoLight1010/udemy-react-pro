import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CounterProps } from "../bases/Counter";

interface UseCounterProps {
    initialValue: CounterProps["initialValue"];
    maxValue: number;
}

export const useCounter = ({ initialValue = 0, maxValue }: UseCounterProps) => {
    const [counter, setCounter] = useState(initialValue);
    const elementToAnimate = useRef<any>(null);
    const timeline = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter((prev) => Math.min(prev + 1, maxValue));
    };

    useLayoutEffect(() => {
        timeline.current
            .to(elementToAnimate.current, {
                y: -10,
                duration: 0.2,
                ease: "ease.out",
            })

            .to(elementToAnimate.current, {
                y: 0,
                duration: 1,
                ease: "bounce.out",
            })

            .pause();

        console.log(
            "%cMaximum reached!",
            "color: red; background-color: black"
        );
    }, []);

    useEffect(() => {
        timeline.current.play(0);
    }, [counter]);

    return {
        counter,
        counterElement: elementToAnimate,
        handleClick,
    };
};
