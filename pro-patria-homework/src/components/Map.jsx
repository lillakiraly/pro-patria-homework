import {MapContainer, TileLayer} from "react-leaflet";
import GeoJsonLayer from "./GeoJsonLayer.jsx";
import "./Map.css";

function Map() {
    return (
        <MapContainer center={[51.505, -0.09]}
                      zoom={2}
                      scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
            <GeoJsonLayer/>
        </MapContainer>
    )
}

export default Map;