import mapboxgl, { Marker } from "mapbox-gl";
import { Reducer } from "react";

export interface MapState {
    isMapReady: boolean;
    map?: mapboxgl.Map;
    markers: Marker[];
}

type MapAction =
    | { type: "setMap"; payload: mapboxgl.Map }
    | { type: "setMarkers"; payload: Marker[] };

export const mapReducer: Reducer<MapState, MapAction> = (prevState, action) => {
    switch (action.type) {
        case "setMap":
            return {
                ...prevState,
                isMapReady: true,
                map: action.payload,
            };

        case "setMarkers":
            return {
                ...prevState,
                markers: action.payload,
            };

        default:
            return prevState;
    }
};
