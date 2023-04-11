import {isFeature, isFeatureCollection} from "geojson-validation";
import {useContext} from "react";
import {GeoJsonDataContext} from "../App.jsx";

function AddDataForm(props) {
    const {setGeoJsonDataContext} = useContext(GeoJsonDataContext);

    function addNewGeoJson(geoJsonData) {
        setGeoJsonDataContext(prevState => {
                return [
                    ...prevState,
                    geoJsonData
                ]
            }
        );
    }
    function handleSubmit(event) {
        event.preventDefault();
        try {
            const submittedGeoJson = JSON.parse(event.target.geojsondata.value);

            if (isFeature(submittedGeoJson) || isFeatureCollection(submittedGeoJson)) {
                addNewGeoJson(submittedGeoJson);
                props.onClose();

            } else {
                alert("Not valid format.")
            }

        } catch (error) {
            alert("Not valid format.")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-geojson">Add new GeoJSON data here:</label><br/>
            <textarea name="geojsondata" id="new-geojson" placeholder="Insert data here..." rows="7" cols="50"/><br/>
            <span><small>At the moment, Feature and FeatureCollection Objects can be submitted
                    <br/>
                    For more information:
                        <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.2" target="_blank">check the geoJSON documentation here</a>.
                    </small></span>
            <br/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddDataForm;