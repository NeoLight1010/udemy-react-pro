import { ChangeEventHandler, useContext, useRef } from "react";
import { SearchResults } from ".";
import { PlacesContext } from "../context";

export const SearchBar = () => {
    const { searchPlacesByTerm } = useContext(PlacesContext);

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(event.target.value);
        }, 350);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Search location"
                onChange={onQueryChanged}
            />

            <SearchResults />
        </div>
    );
};
