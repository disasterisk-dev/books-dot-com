import { useEffect, useState } from "react";

//components
import BookDetails from "../components/BookDetails";

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
        // const fetchBooks = async () => {
        //     const response = await fetch("http://localhost:4000/api/books");
        //     const json = await response.json();

        //     if (response.ok) {
        //         setBooks(json);
        //         console.log(json);
        //     }
        // };

        // fetchBooks();
    }, []);

    return (
        <div className="home">
            <div>
                {!books && <h2>Loading</h2>}
                {books &&
                    books.map((book) => (
                        <BookDetails key={book._id} book={book} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
