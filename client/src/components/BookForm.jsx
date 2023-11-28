import { useState } from "react";
import usePost from "../utils/usePost";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [finished, setFinished] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const book = { title, author, rating, finished };

        const { error, json } = usePost(
            "http://localhost:4000/api/books",
            book,
        );

        if (error) {
            console.log(error);
        } else {
            setTitle("");
            setAuthor("");
            setRating(0);
            setFinished(false);
        }
    };

    return (
        <form className="flex flex-col bg-white px-3 py-5">
            <h3 className="font-zilla text-lg font-semibold">Add a new Book</h3>

            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
                className="mb-2 rounded-md border-2 border-gray-500 px-2 py-1"
            />

            <label>Author:</label>
            <input
                type="text"
                onChange={(e) => {
                    setAuthor(e.target.value);
                }}
                value={author}
                className="mb-2 rounded-md border-2 border-gray-500 px-2 py-1"
            />

            <label>Rating:</label>
            <div className="mb-2 flex items-center">
                <input
                    type="range"
                    min={0}
                    max={5}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                    value={rating}
                    className="mr-3"
                />
                <span>{rating} stars</span>
            </div>
            <div className="mb-2">
                <label className="mr-3">Finished?</label>
                <input
                    type="checkbox"
                    onChange={() => {
                        finished ? setFinished(false) : setFinished(true);

                        console.log(finished);
                    }}
                />
            </div>
            <button
                className="rounded-md bg-blue-900 p-3 font-zilla text-white"
                onClick={(e) => handleSubmit(e)}
            >
                Add Book
            </button>
            {error && <div className="text-red-500">{error}</div>}
        </form>
    );
};

export default BookForm;
