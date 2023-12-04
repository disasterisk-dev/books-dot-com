import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookPreview from "../components/BookPreview";
import BookForm from "../components/BookForm";
import { useBooksContext } from "../hooks/useBooksContext";

const Search = () => {
    const { search, dispatch } = useBooksContext();
    const { query } = useParams();
    const [results, setResults] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const { fetchData, isPending, error } = useFetch();

    useEffect(() => {
        fetchData(`https://openlibrary.org/search.json?q=${query}`, (data) => {
            setResults(data);
        });
    }, [query]);

    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-4">
                <BookForm />
            </div>
            <div className="col-span-12 md:col-span-8">
                {isPending && !results && <h4>Loading</h4>}
                {results && (
                    <>
                        <h2>Showing results for "{search}"</h2>
                        {results.docs.map((doc) => (
                            <BookPreview book={doc} />
                        ))}
                    </>
                )}
                {results && results.num_found === 0 && <h4>No Results</h4>}
                {error && (
                    <h4>Oops! We couldn't find any results for {search}</h4>
                )}
            </div>
        </div>
    );
};

export default Search;
