import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                className={`flex items-center border-l-8 bg-white p-3 ${fColor}`}
            >
                <div className="grow">
                    <h4 className="text-2xl">
                        <strong>{book.title}</strong>
                    </h4>
                    <p>{book.author}</p>
                </div>
                <p className="">{book.rating}/5</p>
                {/* <div>
                    {stars.map((star) => (
                        <FontAwesomeIcon
                            key={stars.indexOf(star)}
                            icon={faStar}
                            className={star}
                        />
                    ))}
                </div> */}
            </div>
            <span className="mb-4 block text-right text-xs">
                {book.createdAt}
            </span>
        </Link>
    );
};

export default BookDetails;
