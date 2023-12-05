import { faEye as eyeShowing } from "@fortawesome/free-solid-svg-icons";
import { faEye as eyeHiding } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const PasswordField = ({ value, setValue }) => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeHiding);
    return (
        <div className="mb-4 rounded-lg bg-white focus:border-2">
            <input
                type={type}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                className="rounded-lg px-3 py-2"
            />
            <button
                className="mx-3"
                onClick={(e) => {
                    e.preventDefault();

                    if (type === "password") {
                        setType("text");
                        setIcon(eyeShowing);
                    } else {
                        setType("password");
                        setIcon(eyeHiding);
                    }
                }}
            >
                <FontAwesomeIcon icon={icon} />
            </button>
        </div>
    );
};

export default PasswordField;
