import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return (
        <div>
            <FontAwesomeIcon
                className="animate-spin text-center text-5xl text-gray-500"
                icon={faSpinner}
            />
        </div>
    );
};

export default Loading;
