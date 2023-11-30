import { useState } from "react";
import usePost from "../utils/usePost";
import {
    Rating,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [finished, setFinished] = useState(false);
    const [thoughts, setThoughts] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const book = { title, author, rating, finished, thoughts };

        usePost("http://localhost:4000/api/books", book, (err, data) => {
            if (err) {
                console.log(err);
                setError(err);
            } else {
                console.log(data);
                setTitle("");
                setAuthor("");
                setRating(0);
                setFinished(false);
                setThoughts("");
            }
        });
    };

    return (
        <>
            <form className="sticky top-24 hidden flex-col rounded-lg bg-white px-3 py-5 md:flex">
                <h3 className="text-center font-zilla text-xl font-semibold">
                    Add a new Book
                </h3>

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

                <label className="mb-2 flex items-center">
                    Rating:
                    <Rating
                        className="ml-3"
                        size="large"
                        precision={0.5}
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                </label>

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

                <label>Thoughts:</label>
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

                    <label className="mb-2 flex items-center">
                        Rating:
                        <Rating
                            className="ml-3"
                            size="large"
                            precision={0.5}
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </label>

                    <div className="mb-2">
                        <label className="mr-3">Finished?</label>
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

                    <label>Thoughts:</label>
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
