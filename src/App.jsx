import {useEffect, useState, createContext} from 'react'
import Map from "./components/Map.jsx";
import "leaflet/dist/leaflet.css";
import geoDataStore from "../data/geojson/geodatastore.json";
import AddDataButton from "./components/AddDataButton.jsx";
import ResetDataButton from "./components/ResetDataButton.jsx";
import "./App.css";


function App() {

    const initialData = geoDataStore.geoData;

    const [geoJsonDataContext, setGeoJsonDataContext] = useState(
        () => JSON.parse(localStorage.getItem("geoData")));


    useEffect(() => {
        if (geoJsonDataContext === null) {
            setGeoJsonDataContext(initialData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("geoData", JSON.stringify(geoJsonDataContext));
    }, [geoJsonDataContext]);

    return (
        <div className="app">
            <GeoJsonDataContext.Provider value={{geoJsonDataContext, setGeoJsonDataContext}}>
                <div className="feat-btn-container">
                    <AddDataButton/>
                    <ResetDataButton resetTo={initialData}/>
                </div>
                <Map/>
            </GeoJsonDataContext.Provider>
        </div>
    )
}

export const GeoJsonDataContext = createContext();

export default App;