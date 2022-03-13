import React from "react";
import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";
import mapboxgl from "mapbox-gl";

if (!navigator.geolocation) {
    const errorMsg = "Your browser does not support geolocation.";

    alert(errorMsg);
    throw new Error(errorMsg);
}

mapboxgl.accessToken = "pk.eyJ1IjoibmVvbGlnaHQxMDEwIiwiYSI6ImNsMG9jNDFoazFoc2ozbXJ2cGpxOHg5MDcifQ.U_AteKFy2dZ_2UjmUbtPxw";

ReactDOM.render(
    <React.StrictMode>
        <MapsApp />
    </React.StrictMode>,

    document.getElementById("root")
);
