import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./LoadingPlaces";

export const SearchResults = () => {
    const [activeID, setActiveID] = useState("");

    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const onResultClick = (place: Feature) => {
        setActiveID(place.id);

        const [lng, lat] = place.center;

        map?.flyTo({
            zoom: 14,
            center: [lng, lat],
        });
    };

    const getRoute = (place: Feature) => {
        if (!userLocation) return;

        const [lng, lat] = place.center;
        getRouteBetweenPoints(userLocation, [lng, lat]);
    };

    if (isLoadingPlaces) {
        return <LoadingPlaces />;
    }

    if (places.length === 0) {
        return <></>;
    }

    return (
        <ul className="list-group mt-3">
            {places.map((place) => (
                <li
                    key={place.id}
                    className={`list-group-item list-group-item-action pointer ${
                        activeID === place.id ? "active" : ""
                    }`}
                    onClick={() => onResultClick(place)}
                >
                    <h6>{place.text}</h6>
                    <p style={{ fontSize: "12px" }}>{place.place_name}</p>

                    <button
                        className={`btn btn-sm ${
                            activeID === place.id
                                ? "btn-outline-light"
                                : "btn-outline-primary"
                        }`}
                        onClick={() => getRoute(place)}
                    >
                        Directions
                    </button>
                </li>
            ))}
        </ul>
    );
};