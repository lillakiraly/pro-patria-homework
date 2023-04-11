import {GeoJsonDataContext} from "../App.jsx";
import {useContext} from "react";

function ResetDataButton(props) {
    const {setGeoJsonDataContext} = useContext(GeoJsonDataContext);

    function resetGeoJsonData() {
        setGeoJsonDataContext(props.resetTo)
    }

    return (
        <button onClick={resetGeoJsonData}>Reset GeoJSON data</button>
    )
}

export default ResetDataButton;