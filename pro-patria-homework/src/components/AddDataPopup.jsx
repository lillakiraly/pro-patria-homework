import ReactDOM from "react-dom";
import {isFeature} from "geojson-validation";
import {useContext} from "react";
import {GeoJsonDataContext} from "../App.jsx";
import "./AddDataPopup.css";

function AddDataPopup(props) {
    const {setGeoJsonDataContext} = useContext(GeoJsonDataContext);

    function addNewGeoJson(geoJsonData) {
        setGeoJsonDataContext(prevState => {
            return {
                    ...prevState,
                    features: [...prevState.features, geoJsonData]
                }
            }
        );
    }
    function handleSubmit(event) {
        event.preventDefault();
        try {
            // check if it is valid json
            const submittedGeoJson = JSON.parse(event.target.geojsondata.value);
            // check if it is valid geojson
            if (isFeature(submittedGeoJson)) {
                addNewGeoJson(submittedGeoJson);
                props.onClose();
            // not valid geojson
            } else {
                alert("Not valid format.")
            }
        //not valid json
        } catch (error) {
            alert("Not valid format.")
        }
    }

    return ReactDOM.createPortal(
        <div className="popup-bg">
            <div className="popup-container">
                <button className="popup-close-btn"
                        onClick={props.onClose}>
                    CLOSE
                </button>
                {/*TODO: maybe put the form in a separate component? */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="new-geojson">Add new GeoJSON data here:</label><br/>
                    <textarea name="geojsondata" placeholder="Insert data here..." rows="7" cols="50"/><br/>
                    <span><small>At the moment only Feature Objects can be submitted
                    <br/>
                    For more information:
                        <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.2" target="_blank">check the geoJSON documentation here</a>.
                    </small></span>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>,
        document.body
    )
}

export default AddDataPopup;