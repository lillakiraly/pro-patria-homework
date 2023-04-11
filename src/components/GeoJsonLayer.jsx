import {useContext, useEffect, useState} from "react";
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import {GeoJsonDataContext} from "../App.jsx";
import DataPopup from "./DataPopup.jsx";

function GeoJsonLayer() {
    const {geoJsonDataContext} = useContext(GeoJsonDataContext);
    const [geoJsonLayerKey, setGeoJsonLayerKey] = useState(0);

    useEffect(() => {
        setGeoJsonLayerKey(geoJsonLayerKey + 1)
    }, [geoJsonDataContext]);

    function addPopUp(feature, layer) {
        layer.bindPopup(ReactDOMServer
            .renderToStaticMarkup(<DataPopup feature={feature}/>));
    }

    return (
        <GeoJSON key={geoJsonLayerKey} data={geoJsonDataContext} onEachFeature={addPopUp}/>
    )
}

export default GeoJsonLayer;