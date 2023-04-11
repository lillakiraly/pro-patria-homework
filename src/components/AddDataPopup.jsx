import ReactDOM from "react-dom";
import "./AddDataPopup.css";
import AddDataForm from "./AddDataForm.jsx";

function AddDataPopup(props) {
    return ReactDOM.createPortal(
        <div className="popup-bg">
            <div className="popup-container">
                <button className="popup-close-btn"
                        onClick={props.onClose}>
                    X
                </button>
                <AddDataForm onClose={props.onClose}/>
            </div>
        </div>,
        document.body
    )
}

export default AddDataPopup;