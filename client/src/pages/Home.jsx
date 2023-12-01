import { useEffect, useState } from "react";
import { useBooksContext } from "../utils/useBooksContext";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import useFetch from "../utils/useFetch";

const Home = () => {
    const { books, dispatch } = useBooksContext();
    // const { data, isPending, error, fetchData } = useFetch();

    useEffect(() => {
        // fetchData("http://localhost:4000/api/books", () => {});

        const fetchBooks = async () => {
            const response = await fetch("http://localhost:4000/api/books");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_BOOKS", payload: json });
            }
        };

        fetchBooks();
    }, []);

    document.title = "Books";

    return (
        <div className="home">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-4">
                    <BookForm />
                </div>
                <div className="col-span-12 md:col-span-8">
                    {/* {isPending && <h2>Loading</h2>} */}
                    {books &&
                        books.map((book) => (
                            <BookDetails key={book._id} book={book} />
                        ))}
                    {/* {!data && !error && <h1>No Book</h1>}
                    {error && <h2>{error}</h2>} */}
                </div>
            </div>
        </div>
    );
};

export default Home;
