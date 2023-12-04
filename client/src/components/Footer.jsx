import { Tooltip } from "@mui/material";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-4 text-center text-white">
            <Tooltip title="GitHub">
                <Link
                    to={"https://github.com/JoelRobinsonUK/books-dot-com"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
            </Tooltip>
            <h6>Copyright &copy; Joel Robinson 2023</h6>
        </footer>
    );
};

export default Footer;
