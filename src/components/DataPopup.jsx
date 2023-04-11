import {v4 as uuidv4} from 'uuid';
import "./DataPopup.css";

function DataPopup(props) {
    const properties = props.feature.properties;

    if (Object.keys(properties).length > 0) {
        return (
            <div className="data-popup">
                <ul>
                    {Object.keys(properties).map((key) => (
                        <li key={uuidv4()}><span className="property">{key}</span>: {properties[key]}</li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <span>There is no available information.</span>
        )
    }
}

export default DataPopup;
