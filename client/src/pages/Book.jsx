import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function Book() {
    const { user } = useAuthContext();
    const { id } = useParams();
    const { fetchDataAuth, isPending, error } = useFetch();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetchDataAuth(
                `http://localhost:4000/api/books/${id}`,
                user.token,
                (data) => {
                    setBook(data);
                    document.title = data.title;
                },
            );
        }
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
