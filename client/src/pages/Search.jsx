import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import BookPreview from "../components/BookPreview";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isPending, error, fetchData } = useFetch();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4">
                <div className="bg-white">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <button
                        className="rounded-md bg-green-500 p-3 font-zilla text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            let searchString = searchTerm.replaceAll(" ", "+");
                            fetchData(
                                `https://openlibrary.org/search.json?q=${searchString}`,
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="col-span-8">
                {isPending && !isPending && <h4>Loading</h4>}
                {data && data.docs.map((doc) => <BookPreview book={doc} />)}
                {data && data.num_found === 0 && <h4>No Results</h4>}
                {error && <h4>{error}</h4>}
            </div>
        </div>
    );
};

export default Search;
