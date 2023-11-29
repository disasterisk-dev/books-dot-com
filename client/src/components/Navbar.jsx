import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-white py-5 font-zilla text-blue-900">
            <div className="mx-auto flex max-w-[80%] items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-4xl  font-bold">Books</h1>
                </Link>
                <Tooltip title="GitHub">
                    <Link
                        to={"https://github.com/JoelRobinsonUK/books-dot-com"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </Tooltip>
            </div>
        </header>
    );
};

export default Navbar;
