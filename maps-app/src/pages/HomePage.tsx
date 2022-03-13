import {MapView, MyLocationBtn, ReactLogo, SearchBar} from "../components";

export const HomePage = (): JSX.Element => {
    return (
        <div>
            <MapView />
            <MyLocationBtn />
            <SearchBar />

            <ReactLogo />
        </div>
    );
}
