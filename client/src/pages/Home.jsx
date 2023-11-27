import { useEffect, useState } from "react";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/books")
            .then((response) => {
                if (!response.ok) {
                    throw Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setBooks(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="home">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                    {!books && <h2>Loading</h2>}
                    {books &&
                        books.map((book) => (
                            <BookDetails key={book._id} book={book} />
                        ))}
                </div>
                <div className="col-span-4">
                    <BookForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
