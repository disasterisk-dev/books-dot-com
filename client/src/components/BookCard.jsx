import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const BookCard = ({ book }) => {
    const { dispatch } = useBooksContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `http://localhost:4000/api/books/${book._id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            },
        );

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_BOOK", payload: json });
            console.log("Deleted");
        }

        navigate(-1);
    };

    return (
        <div
            className={`col-span-4 flex flex-col items-center gap-3 rounded-lg bg-white p-3 text-center`}
        >
            <h4 className="text-2xl">
                <strong>{book.title}</strong>
            </h4>
            <p>{book.author}</p>
            <Rating readOnly size="large" precision={0.5} value={book.rating} />
            <button
                className="w-full rounded-md bg-red-500 p-3 font-zilla text-white"
                onClick={(e) => handleSubmit(e)}
            >
                Delete Book
            </button>
        </div>
    );
};

export default BookCard;
