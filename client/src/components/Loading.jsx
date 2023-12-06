import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return (
        <div className="flex justify-center">
            <FontAwesomeIcon
                className="animate-spin-slow text-5xl text-gray-500"
                icon={faSpinner}
            />
        </div>
    );
};

export default Loading;
