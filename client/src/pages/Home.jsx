import { useEffect, useState } from "react";
import { useBooksContext } from "../utils/useBooksContext";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import useFetch from "../utils/useFetch";

const Home = () => {
    const { books, dispatch } = useBooksContext();
    const [isPending, setIsPending] = useState("true");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/books")
            .then((response) => {
                if (!response.ok) {
                    throw Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: "SET_BOOKS", payload: data });
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);

    document.title = "Books";

    return (
        <div className="home">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-4">
                    <BookForm />
                </div>
                <div className="col-span-12 md:col-span-8">
                    {isPending && <h2>Loading</h2>}
                    {books && books.length <= 0 && <h1>No books yet</h1>}
                    {books &&
                        books.map((book) => (
                            <BookDetails key={book._id} book={book} />
                        ))}
                    {error && <h2>{error}</h2>}
                </div>
            </div>
        </div>
    );
};

export default Home;
