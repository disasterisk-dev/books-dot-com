import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";

function Book() {
    const { id } = useParams();
    const { fetchData, isPending, error } = useFetch();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchData(`http://localhost:4000/api/books/${id}`, (data) => {
            setBook(data);
            document.title = data.title;
        });
    }, []);

    return (
        <>
            {book && (
                <div className="book grid grid-cols-12 gap-3">
                    <BookCard book={book} />
                    <p className="col-span-8 whitespace-pre-wrap">
                        {book.thoughts}
                    </p>
                </div>
            )}
        </>
    );
}

export default Book;
