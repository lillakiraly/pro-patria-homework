import {useState} from "react";
import AddDataPopup from "./AddDataPopup.jsx";

function AddDataButton() {
    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <>
            <button onClick={() => setPopupVisible(true)}>Add new GeoJSON data</button>
            {popupVisible && (
                <AddDataPopup onClose={() => setPopupVisible(false)}/>
            )}
        </>
    )
}

export default AddDataButton;