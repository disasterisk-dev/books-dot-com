import { Link, useNavigate } from "react-router-dom";
import {
    faMagnifyingGlass,
    faRightToBracket,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import Searchbar from "./Searchbar";
import SearchbarMobile from "./SearchbarMobile";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { user } = useAuthContext();
    const { dispatch } = useBooksContext();
    const [searchTerm, setSearchTerm] = useState("false");
    const [searchDisplay, setSearchDisplay] = useState(false);
    const navigate = useNavigate();
    const { logout } = useLogout();

    const handleLogOut = () => {
        logout();
    };

    return (
        <header className="sticky top-0 z-10 bg-white font-zilla text-blue-900">
            <div className="mx-auto my-3 flex max-w-[80%] items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-4xl  font-bold">Books</h1>
                </Link>
                <div className="flex items-center gap-3">
                    <Searchbar />
                    <nav className="flex gap-3">
                        <Tooltip title="search" className="md:hidden">
                            <button>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="text-xl"
                                    onClick={() => {
                                        searchDisplay === false
                                            ? setSearchDisplay(true)
                                            : setSearchDisplay(false);
                                    }}
                                />
                            </button>
                        </Tooltip>
                        {!user && (
                            <Tooltip title="Login">
                                <Link
                                    to={"/login"}
                                    className="flex items-center gap-2 rounded-3xl bg-blue-900 p-2 text-xl text-white md:rounded-lg"
                                >
                                    <span className="hidden md:block">
                                        Log In
                                    </span>
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                </Link>
                            </Tooltip>
                        )}
                        {user && (
                            <Tooltip title="Log out">
                                <button
                                    onClick={handleLogOut}
                                    className="flex items-center gap-2 rounded-3xl bg-blue-900 p-2 text-xl text-white md:rounded-lg"
                                >
                                    <span className="hidden md:block">
                                        Sign Out
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="text-2xl"
                                    />
                                </button>
                            </Tooltip>
                        )}
                    </nav>
                </div>
            </div>
            {searchDisplay && (
                <div className="gap-3 bg-gray-200 px-7 py-3">
                    <SearchbarMobile />
                </div>
            )}
        </header>
    );
};

export default Navbar;
