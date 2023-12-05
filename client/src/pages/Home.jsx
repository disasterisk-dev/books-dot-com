import { useEffect, useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const Home = () => {
    const { books, dispatch } = useBooksContext();

    const { fetchData, isPending, error } = useFetch();

    useEffect(() => {
        fetchData("http://localhost:4000/api/books", (data) => {
            dispatch({ type: "SET_BOOKS", payload: data });
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
                    {isPending && <Loading />}
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
