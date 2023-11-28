import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <header className="bg-white py-5 font-zilla text-blue-900">
            <div className="mx-auto flex max-w-[80%] items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-4xl  font-bold">Books.com</h1>
                </Link>
                <Link
                    to={"https://github.com/JoelRobinsonUK/books-dot-com"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
