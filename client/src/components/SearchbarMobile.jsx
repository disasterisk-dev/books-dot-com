import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBooksContext } from "../utils/useBooksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchbarMobile = () => {
    const { dispatch } = useBooksContext();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        let searchString = searchTerm.replaceAll(" ", "+");
        navigate(`/query/${searchString}`);
        dispatch({
            type: "SET_SEARCH",
            payload: searchTerm,
        });
        setSearchTerm("");
    };

    return (
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
                    handleClick(e);
                }}
            >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-2xl"
                />
            </button>
        </div>
    );
};

export default SearchbarMobile;
