import { useEffect, useState } from "react";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import useFetch from "../utils/useFetch";

const Home = () => {
    const { data, isPending, error } = useFetch(
        "http://localhost:4000/api/books",
    );

    return (
        <div className="home">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                    {isPending && <h2>Loading</h2>}
                    {data &&
                        data.map((book) => (
                            <BookDetails key={book._id} book={book} />
                        ))}
                    {error && <h2>{error}</h2>}
                </div>
                <div className="col-span-4">
                    <BookForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
