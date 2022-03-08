import React, { lazy } from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

interface Route {
    to: string;
    path: string;
    name: string;
    Component: React.ComponentType;
}

const LazyLayout = lazy(() =>  import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
    {
        to: "/lazyload/",
        path: "lazyload/*",
        Component: LazyLayout,
        name: "Lazy Layout",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy",
    },
];
