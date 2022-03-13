import axios from "axios";

export const directionsAPI = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
    params: {
        alternatives: false,
        geometries: "geojson",
        overview: "simplified",
        steps: false,
        access_token:
            "pk.eyJ1IjoibmVvbGlnaHQxMDEwIiwiYSI6ImNsMG9jNDFoazFoc2ozbXJ2cGpxOHg5MDcifQ.U_AteKFy2dZ_2UjmUbtPxw",
    },
});
