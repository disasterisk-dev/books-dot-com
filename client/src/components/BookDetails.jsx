import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { formatDistanceToNow } from "date-fns";

const BookDetails = ({ book }) => {
    const [fColor, setFColor] = useState("border-l-red-500");

    let stars = [];

    useEffect(() => {
        if (book.finished) {
            setFColor("border-l-green-500");
        }

        for (let i = 0; i < 5; i++) {
            if (i < book.rating) {
                stars.push("text-yellow-500");
            } else {
                stars.push("text-gray-200");
            }
        }
    }, [book.finished, book.rating]);

    return (
        <Link to={`/books/${book._id}`}>
            <div
                className={`flex items-center rounded-lg border-l-8 bg-white p-3 ${fColor}`}
            >
                <div className="grow">
                    <h4 className="text-2xl">
                        <strong>{book.title}</strong>
                    </h4>
                    <p>{book.author}</p>
                </div>
                <Rating
                    readOnly
                    size="large"
                    precision={0.5}
                    value={book.rating}
                />
            </div>
            <span className="mb-4 block pr-2 pt-1 text-right text-xs">
                {formatDistanceToNow(new Date(book.createdAt), {
                    addSuffix: true,
                })}
            </span>
        </Link>
    );
};

export default BookDetails;
