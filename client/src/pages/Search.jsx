import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookPreview from "../components/BookPreview";
import BookForm from "../components/BookForm";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Loading from "../components/Loading";

const Search = () => {
    const { user } = useAuthContext();
    const { search, dispatch } = useBooksContext();
    const { query } = useParams();
    const [results, setResults] = useState(null);

    const { fetchData, isPending, error } = useFetch();

    useEffect(() => {
        setResults(null);

        fetchData(`https://openlibrary.org/search.json?q=${query}`, (data) => {
            setResults(data);
        });
    }, [query]);

    return (
        <div className="search">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-4">
                    {!user && (
                        <>
                            <h3 className="font-zilla text-3xl text-blue-900">
                                Welcome to Books!
                            </h3>
                            <span>
                                <Link
                                    to={"/login"}
                                    className="text-blue-900 underline"
                                >
                                    Sign Up or Login
                                </Link>{" "}
                                to save books to your library
                            </span>
                        </>
                    )}
                    {user && <BookForm />}
                </div>
                <div className="col-span-12 md:col-span-8">
                    {isPending && !results && <Loading />}
                    {results && (
                        <>
                            <h2>Showing results for "{search}"</h2>
                            {results.docs.map((doc) => (
                                <BookPreview key={doc.key} book={doc} />
                            ))}
                        </>
                    )}
                    {results && results.num_found === 0 && <h4>No Results</h4>}
                    {error && (
                        <h4>Oops! We couldn't find any results for {search}</h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
