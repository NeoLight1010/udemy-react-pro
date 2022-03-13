import {MapProvider, PlacesProvider} from "./context";
import { HomePage } from "./pages";

import "./styles.css";

export const MapsApp = (): JSX.Element => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomePage />
            </MapProvider>
        </PlacesProvider>
    );
};
