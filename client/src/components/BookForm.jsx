import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import usePost from "../hooks/usePost";
import {
    Rating,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

const BookForm = () => {
    const { dispatch } = useBooksContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [finished, setFinished] = useState(false);
    const [thoughts, setThoughts] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError("You must be logged in");
            return;
        }

        const book = { title, author, rating, finished, thoughts };

        usePost(
            "http://localhost:4000/api/books",
            user.token,
            book,
            (err, data) => {
                if (err) {
                    console.log(err);
                    setError(err);
                    setEmptyFields(data.emptyFields);
                } else {
                    console.log(data);
                    setTitle("");
                    setAuthor("");
                    setRating(0);
                    setFinished(false);
                    setThoughts("");

                    dispatch({ type: "ADD_BOOK", payload: data });
                }
            },
        );
    };

    return (
        <>
            <form className="sticky top-3 hidden flex-col rounded-lg bg-white px-3 py-5 md:flex">
                <h3 className="text-center font-zilla text-xl font-semibold">
                    Add a new Book
                </h3>

                <label>Title*</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    className={`mb-2 rounded-md border-2 px-2 py-1 ${
                        emptyFields.includes("title")
                            ? "border-red-500"
                            : "border-gray-500"
                    }`}
                />

                <label>Author*</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                    value={author}
                    className={`mb-2 rounded-md border-2 px-2 py-1 ${
                        emptyFields.includes("author")
                            ? "border-red-500"
                            : "border-gray-500"
                    }`}
                />

                <label className="mb-2 flex items-center">
                    Rating*
                    <Rating
                        size="large"
                        precision={0.5}
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        className={`ml-3 ${
                            emptyFields.includes("rating")
                                ? "border-b-2 border-red-500"
                                : null
                        }`}
                    />
                </label>

                <div className="mb-2">
                    <label className="mr-3">Finished*</label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            finished ? setFinished(false) : setFinished(true);

                            console.log(finished);
                        }}
                    />
                </div>

                <label>Thoughts</label>
                <textarea
                    rows={5}
                    className="mb-2 rounded-md border-2 border-gray-500 px-2 py-1"
                    value={thoughts}
                    onChange={(e) => {
                        setThoughts(e.target.value);
                    }}
                ></textarea>
                <button
                    className="rounded-md bg-blue-900 p-3 font-zilla text-white"
                    onClick={(e) => handleSubmit(e)}
                >
                    Add Book
                </button>
                {error && <div className="text-red-500">{error}</div>}
            </form>
            <Accordion className="md:hidden">
                <AccordionSummary>
                    <h3 className="text-center font-zilla text-xl font-semibold">
                        Add a new Book
                    </h3>
                </AccordionSummary>
                <AccordionDetails className="flex flex-col">
                    <label>Title*</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                        className={`mb-2 rounded-md border-2 px-2 py-1 ${
                            emptyFields.includes("title")
                                ? "border-red-500"
                                : "border-gray-500"
                        }`}
                    />

                    <label>Author*</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                        value={author}
                        className={`mb-2 rounded-md border-2 border-gray-500 px-2 py-1 ${
                            emptyFields.includes("author")
                                ? "border-red-500"
                                : "border-gray-500"
                        }`}
                    />

                    <label className="mb-2 flex items-center">
                        Rating*
                        <Rating
                            size="large"
                            precision={0.5}
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            className={`ml-3 ${
                                emptyFields.includes("rating")
                                    ? "border-b-2 border-red-500"
                                    : null
                            }`}
                        />
                    </label>

                    <div className="mb-2">
                        <label className="mr-3">Finished*</label>
                        <input
                            type="checkbox"
                            onChange={() => {
                                finished
                                    ? setFinished(false)
                                    : setFinished(true);

                                console.log(finished);
                            }}
                        />
                    </div>

                    <label>Thoughts</label>
                    <textarea
                        rows={5}
                        className="mb-2 rounded-md border-2 border-gray-500 px-2 py-1"
                        value={thoughts}
                        onChange={(e) => {
                            setThoughts(e.target.value);
                        }}
                    ></textarea>
                    <button
                        className="rounded-md bg-blue-900 p-3 font-zilla text-white"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Add Book
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default BookForm;
