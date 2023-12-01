import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import BookPreview from "../components/BookPreview";
import BookForm from "../components/BookForm";
import { useBooksContext } from "../utils/useBooksContext";

const Search = () => {
    const { search, dispatch } = useBooksContext();
    const { query } = useParams();
    const { data, isPending, error, fetchData } = useFetch();

    useEffect(() => {
        fetchData(`https://openlibrary.org/search.json?q=${query}`);
    }, [query]);

    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-4">
                <BookForm />
            </div>
            <div className="col-span-12 md:col-span-8">
                {isPending && !data && <h4>Loading</h4>}
                {data && (
                    <>
                        <h2>Showing results for {search}</h2>
                        {data.docs.map((doc) => (
                            <BookPreview book={doc} />
                        ))}
                    </>
                )}
                {data && data.num_found === 0 && <h4>No Results</h4>}
                {error && <h4>{error}</h4>}
            </div>
        </div>
    );
};

export default Search;
