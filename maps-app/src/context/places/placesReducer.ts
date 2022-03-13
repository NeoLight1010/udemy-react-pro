import { Reducer } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

type PlacesAction =
    | { type: "setUserLocation"; payload: [number, number] }
    | { type: "setPlaces"; payload: Feature[] }
    | { type: "setLoadingPlaces" };

export const placesReducer: Reducer<PlacesState, PlacesAction> = (
    prevState,
    action
) => {
    switch (action.type) {
        case "setUserLocation":
            return {
                ...prevState,
                isLoading: false,
                userLocation: action.payload,
            };

        case "setLoadingPlaces":
            return {
                ...prevState,
                isLoadingPlaces: true,
                places: [],
            };

        case "setPlaces":
            return {
                ...prevState,
                isLoadingPlaces: false,
                places: action.payload,
            };

        default:
            return prevState;
    }
};
