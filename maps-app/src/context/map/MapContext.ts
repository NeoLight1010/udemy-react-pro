import mapboxgl from "mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
    isMapReady: boolean;
    map?: mapboxgl.Map;

    setMap: (map: mapboxgl.Map) => void;
    getRouteBetweenPoints: (
        start: [number, number],
        end: [number, number]
    ) => void;
}

export const MapContext = createContext({} as MapContextProps);
