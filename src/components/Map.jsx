import {MapContainer, TileLayer} from "react-leaflet";
import GeoJsonLayer from "./GeoJsonLayer.jsx";
import "./Map.css";

function Map() {
    return (
        <MapContainer center={[47.50974, 19.08128]}
                      zoom={13}
                      scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
            <GeoJsonLayer/>
        </MapContainer>
    )
}

export default Map;