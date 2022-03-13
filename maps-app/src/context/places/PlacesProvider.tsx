import { useEffect, useReducer } from "react";
import { searchAPI } from "../../apis";
import { getUserLocation } from "../../helpers";
import { Feature, PlacesResponse } from "../../interfaces/places";
import { PlacesContext } from "./PlacesContext";
import { placesReducer, PlacesState } from "./placesReducer";

interface PlacesProviderProps {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
};

export const PlacesProvider = ({
    children,
}: PlacesProviderProps): JSX.Element => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation().then((coords) =>
            dispatch({ type: "setUserLocation", payload: coords })
        );
    }, []);

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if (!query) {
            dispatch({
                type: "setPlaces",
                payload: [],
            });

            return [];
        }

        if (!state.userLocation) {
            throw new Error("User location not found.");
        }

        dispatch({ type: "setLoadingPlaces" });

        const response = await searchAPI.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(","),
            },
        });

        const features = response.data.features;
        dispatch({ type: "setPlaces", payload: features });

        return features;
    };

    return (
        <PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
            {children}
        </PlacesContext.Provider>
    );
};
