import { Link, useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useBooksContext } from "../utils/useBooksContext";

const Navbar = () => {
    const { dispatch } = useBooksContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDisplay, setSearchDisplay] = useState("hidden");
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-10 bg-white font-zilla text-blue-900">
            <div className="mx-auto my-3 flex max-w-[80%] items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-4xl  font-bold">Books</h1>
                </Link>
                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-2 rounded-lg bg-blue-200 px-3 py-2 md:flex">
                        <input
                            type="text"
                            className="bg-blue-200 focus:outline-0"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                let searchString = searchTerm.replaceAll(
                                    " ",
                                    "+",
                                );
                                navigate(`/query/${searchString}`);
                                dispatch({
                                    type: "SET_SEARCH",
                                    payload: searchTerm,
                                });
                                setSearchTerm("");
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-2xl"
                            />
                        </button>
                    </div>
                    <Tooltip title="search" className="md:hidden">
                        <button>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-2xl"
                                onClick={() => {
                                    searchDisplay === "hidden"
                                        ? setSearchDisplay("block")
                                        : setSearchDisplay("hidden");
                                }}
                            />
                        </button>
                    </Tooltip>
                    <Tooltip title="GitHub">
                        <Link
                            to={
                                "https://github.com/JoelRobinsonUK/books-dot-com"
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-2xl"
                            />
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className={`${searchDisplay} gap-3 bg-gray-200 px-7 py-3`}>
                <div className="flex items-center gap-2 rounded-lg bg-blue-200 px-3 py-2">
                    <input
                        type="text"
                        className="grow bg-blue-200 focus:outline-0"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            let searchString = searchTerm.replaceAll(" ", "+");
                            navigate(`/query/${searchString}`);
                            dispatch({
                                type: "SET_SEARCH",
                                payload: searchTerm,
                            });
                            setSearchTerm("");
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-2xl"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
