import axios from "axios";

export const searchAPI = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        limit: 5,
        language: "en",
        access_token:
            "pk.eyJ1IjoibmVvbGlnaHQxMDEwIiwiYSI6ImNsMG9jNDFoazFoc2ozbXJ2cGpxOHg5MDcifQ.U_AteKFy2dZ_2UjmUbtPxw",
    },
});
