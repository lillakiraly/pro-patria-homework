import {useEffect, useState, createContext} from 'react'
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

    const [geoJsonDataContext, setGeoJsonDataContext] = useState(
        JSON.parse(localStorage.getItem("geoData")));

    useEffect(() => {
        localStorage.setItem("geoData", JSON.stringify(geoJsonDataContext));
    }, [geoJsonDataContext]);

    return (
        <GeoJsonDataContext.Provider value={{geoJsonDataContext, setGeoJsonDataContext}}>
            <Map/>
        </GeoJsonDataContext.Provider>
    )
}

export const GeoJsonDataContext = createContext();

export default App;