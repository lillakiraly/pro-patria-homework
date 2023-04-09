import { v4 as uuidv4 } from 'uuid';

function DataPopup(props) {
    const properties = props.feature.properties;

    if (Object.keys(properties).length > 0) {
        return (
            <ul>
                {Object.keys(properties).map((key) => (
                    <li key={uuidv4()}><strong>{key}</strong>: {properties[key]}</li>
                ))}
            </ul>
        )
    } else {
        return (
            <span>There is no available information.</span>
        )
    }
}

export default DataPopup;
