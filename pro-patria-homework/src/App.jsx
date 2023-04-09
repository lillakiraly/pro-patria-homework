import {useEffect, useState} from 'react'
import Map from "./components/Map.jsx";
import "leaflet/dist/leaflet.css";
import geoDataStore from "../data/geojson/geodatastore.json";


function App() {
    useEffect(() => {
        if (!localStorage.getItem("geoData")) {
            const geoDataStoreStr = JSON.stringify(geoDataStore);
            localStorage.setItem("geoData", geoDataStoreStr);
        }
    }, []);
    return (
        <Map/>
    )
}

export default App;